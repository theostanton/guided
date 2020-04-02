resource "aws_route53_zone" "ridersbible" {
  name = "ridersbible.com"
}

resource "aws_route53_record" "validation_london" {
  allow_overwrite = true
  name = aws_acm_certificate.guided_london.domain_validation_options[0].resource_record_name
  type = aws_acm_certificate.guided_london.domain_validation_options[0].resource_record_type
  zone_id = aws_route53_zone.ridersbible.id
  records = [
    aws_acm_certificate.guided_london.domain_validation_options[0].resource_record_value]
  ttl = 30
}

resource "aws_acm_certificate_validation" "cert" {
  certificate_arn = aws_acm_certificate.guided_london.arn
  validation_record_fqdns = [
    aws_route53_record.validation_london.fqdn]
}

resource "aws_acm_certificate" "guided" {
  provider = aws.virginia
  domain_name = var.domain_name
  subject_alternative_names = [
    "*.${var.domain_name}"]
  validation_method = "DNS"
  tags = {
    "Name":"guided-${var.stage}"
  }
}

resource "aws_acm_certificate" "guided_london" {
  domain_name = var.domain_name
  subject_alternative_names = [
    "*.${var.domain_name}"]
  validation_method = "DNS"
  tags = {
    "Name":"guided-${var.stage}"
  }
}