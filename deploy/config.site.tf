resource "aws_s3_bucket" "site_logs" {
  bucket = "${var.stage}-${var.domain_name}-logs"
  acl = "log-delivery-write"
}

locals {
  full_domain = "${terraform.workspace=="production"?"www":var.stage}.${var.domain_name}"
}

resource "null_resource" "site_push" {
  triggers = {
    app_version = var.app_version
  }
  provisioner "local-exec" {
    environment = {
      GATSBY_STAGE = var.stage
      GATSBY_APP_VERSION = var.app_version
      GATSBY_MAPBOX_TOKEN = var.mapbox_token
      GATSBY_GUIDED_GRAPHQL = "${aws_api_gateway_deployment.graphql.invoke_url}/${aws_api_gateway_resource.guided.path_part}"
    }
//    command = "cd ../frontend/website && yarn deploy"
    command = "echo noop"
  }

  depends_on = [aws_lambda_function.graphql]
}

resource "aws_cloudfront_distribution" "site" {
  origin {
    domain_name = aws_s3_bucket.site.website_endpoint
    origin_id = local.full_domain
    // The origin must be http even if it's on S3 for redirects to work properly
    // so the website_endpoint is used and http-only as S3 doesn't support https for this
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
    local.full_domain]
  price_class = "PriceClass_100"
  default_root_object = "index.html"
  is_ipv6_enabled = true
  default_cache_behavior {
    allowed_methods = [
      "GET",
      "HEAD"]
    cached_methods = [
      "GET",
      "HEAD"]
    target_origin_id = local.full_domain
    forwarded_values {
      query_string = true
      cookies {
        forward = "all"
      }
    }
    viewer_protocol_policy = "redirect-to-https"
    min_ttl = 0
    default_ttl = 1000
    max_ttl = 86400
    compress = true
  }

  logging_config {
    bucket = aws_s3_bucket.site_logs.bucket_domain_name
    include_cookies = false
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

  depends_on = [
    null_resource.site_push]
}

resource "aws_route53_record" "site" {
  name = local.full_domain
  type = "A"
  zone_id = aws_route53_zone.ridersbible.zone_id
  alias {
    evaluate_target_health = false
    name = aws_cloudfront_distribution.site.domain_name
    zone_id = aws_cloudfront_distribution.site.hosted_zone_id
  }
}

data "aws_iam_policy_document" "site" {
  statement {
    actions = [
      "s3:GetObject"]
    resources = [
      "${aws_s3_bucket.site.arn}/*"]

    principals {
      type = "AWS"
      identifiers = [
        "*"]
    }
  }

  statement {
    actions = [
      "s3:ListBucket"]
    resources = [
      aws_s3_bucket.site.arn]

    principals {
      type = "AWS"
      identifiers = [
        "*"]
    }
  }
}

resource "aws_s3_bucket_policy" "site" {
  bucket = aws_s3_bucket.site.id
  policy = data.aws_iam_policy_document.site.json
}

resource "aws_s3_bucket" "site" {
  bucket = local.full_domain
  website {
    index_document = "index.html"
    error_document = "error.html"
  }
}
