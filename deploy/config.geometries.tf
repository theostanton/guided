resource "aws_s3_bucket" "geometries" {
  bucket = "guided-geometries-${var.stage}"
  hosted_zone_id = aws_route53_zone.ridersbible.zone_id
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
  name = "${local.domain_prefix}geometries.${var.domain_name}"
  type = "CNAME"
  zone_id = aws_route53_zone.ridersbible.zone_id
  ttl = 30
  records = [
    aws_s3_bucket.geometries.bucket_domain_name]
}