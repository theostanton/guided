
// imported manually
resource "aws_acm_certificate" "guided" {
  provider = aws.virginia
  domain_name = var.domain_name
  subject_alternative_names = [
    "*.${var.domain_name}"]
  validation_method = "DNS"
  provisioner "local-exec" {
    command = "echo ${aws_acm_certificate.guided.arn}"
  }
}

//resource "aws_route53_record" "validation" {
//  name = aws_acm_certificate.guided.domain_validation_options.0.resource_record_name
//  type = aws_acm_certificate.guided.domain_validation_options[0].resource_record_type
//  zone_id = aws_route53_zone.ridersbible.zone_id
//  ttl = "60"
//  records = [aws_acm_certificate.guided.domain_validation_options.0.resource_record_value,aws_acm_certificate.guided.domain_validation_options.1.resource_record_value]
//}
//
//resource "aws_acm_certificate_validation" "guided" {
//  provider = "aws.virginia"
//  certificate_arn = aws_acm_certificate.guided.arn
//  validation_record_fqdns = [
//    aws_route53_record.validation.fqdn
//  ]
//}