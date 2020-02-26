provider "aws" {
  profile = "default"
  region = var.region
}

provider "aws" {
  profile = "default"
  region = "us-east-1"
  alias = "virginia"
}

locals {
  app_version = "0.0.${var.macro_version}"
}

resource "aws_route53_zone" "ridersbible" {
  name = "ridersbible.com"
}

resource "aws_api_gateway_rest_api" "guided" {
  name = "guided-${var.stage}"
}

/* TODO DNS validation via terraform rather than AWS console
resource "aws_route53_record" "example" {
  name = aws_api_gateway_domain_name.api.domain_name
  type = "A"
  zone_id = aws_route53_zone.ridersbible.id

  alias {
    evaluate_target_health = true
    name = aws_api_gateway_domain_name.api.cloudfront_domain_name
    zone_id = aws_api_gateway_domain_name.api.cloudfront_zone_id
  }
}

resource "aws_acm_certificate" "guided" {
  domain_name = "*.ridersbible.com"
  validation_method = "DNS"
  subject_alternative_names = [
    "ridersbible.com"]
  provider = "aws_virginia"
}

variable "certificate_arn" {
  default = "arn:aws:acm:us-east-1:132788847502:certificate/03fad052-7aa5-4ac5-bd98-d09a7225a3d5"
}

data "aws_acm_certificate" "guided" {
  domain = "*.ridersbible.com"
  statuses = [
    "ISSUED"]
  provider = "aws.virginia"
}

resource "aws_route53_record" "cert_validation" {
  name = aws_acm_certificate.guided.domain_validation_options[0].resource_record_name
  type = aws_acm_certificate.guided.domain_validation_options[0].resource_record_type
  zone_id = aws_route53_zone.ridersbible.id
  records = [
    aws_acm_certificate.guided.domain_validation_options[0].resource_record_value]
  ttl = 60
}

resource "aws_acm_certificate_validation" "guided" {
  certificate_arn = aws_acm_certificate.guided.arn
  validation_record_fqdns = [
    aws_route53_record.cert_validation.fqdn]
}
*/

resource "aws_api_gateway_domain_name" "api" {
  certificate_arn = aws_acm_certificate.guided.arn
  domain_name = "${var.stage}-api.ridersbible.com"
}


resource "aws_api_gateway_base_path_mapping" "guided" {
  api_id = aws_api_gateway_rest_api.guided.id
  domain_name = aws_api_gateway_domain_name.api.domain_name
}