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