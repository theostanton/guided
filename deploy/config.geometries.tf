locals {
  geometries_bucket_url = "${local.domain_prefix}geometries.${var.domain_name}"
}

resource "aws_s3_bucket" "geometries" {
  bucket = local.geometries_bucket_url
  hosted_zone_id = aws_route53_zone.ridersbible.zone_id


  cors_rule {
    allowed_origins = ["*"]
    allowed_methods = ["GET", "HEAD"]
    allowed_headers = ["*"]
    max_age_seconds = 3000
  }
}

resource "aws_s3_bucket_policy" "geometries" {
  bucket = aws_s3_bucket.geometries.bucket
  policy = <<POLICY
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "",
            "Effect": "Allow",
            "Principal": {
                "AWS": "*"
            },
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::${aws_s3_bucket.geometries.bucket}/*"
        },
        {
            "Sid": "",
            "Effect": "Allow",
            "Principal": {
                "AWS": "*"
            },
            "Action": "s3:ListBucket",
            "Resource": "arn:aws:s3:::${aws_s3_bucket.geometries.bucket}"
        }
    ]
}
POLICY
}

resource "aws_route53_record" "geometries" {
  name = local.geometries_bucket_url
  type = "A"
  zone_id = aws_route53_zone.ridersbible.zone_id
  alias {
    evaluate_target_health = false
    name = aws_cloudfront_distribution.geometries.domain_name
    zone_id = aws_cloudfront_distribution.geometries.hosted_zone_id
  }
}


resource "aws_cloudfront_distribution" "geometries" {
  comment = "gudied-geometries-${var.stage}"
  origin {
    domain_name = aws_s3_bucket.geometries.bucket_domain_name
    origin_id = local.geometries_bucket_url

    s3_origin_config {
      origin_access_identity = "origin-access-identity/cloudfront/ABCDEFG1234567"
    }

    custom_origin_config {
      http_port = 80
      https_port = 443
      origin_protocol_policy = "http-only"
      origin_ssl_protocols = [
        "TLSv1.2"]
    }
  }
  enabled = true
  aliases = [
    local.geometries_bucket_url]
  price_class = "PriceClass_100"

  is_ipv6_enabled = true
  default_cache_behavior {
    allowed_methods = [
      "GET",
      "HEAD"]
    cached_methods = [
      "GET",
      "HEAD"]
    target_origin_id = local.geometries_bucket_url
    forwarded_values {
      query_string = false
      headers = [
        "Origin"]
      cookies {
        forward = "none"
      }
    }
    viewer_protocol_policy = "redirect-to-https"
    min_ttl = 0
    default_ttl = 1000
    max_ttl = 86400
    compress = true
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }
  viewer_certificate {
    acm_certificate_arn = aws_acm_certificate.guided.arn
    ssl_support_method = "sni-only"
    minimum_protocol_version = "TLSv1.1_2016"
  }
}
