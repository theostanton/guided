//resource "aws_elb" "graphql" {
//  name = "guided-graphql-${var.stage}"
//  instances = [
//    aws_instance.server.id]
//
//  availability_zones = data.aws_availability_zones.default.names
//
//  source_security_group = aws_security_group.server.id
//
//  listener {
//    ssl_certificate_id = aws_acm_certificate_validation.cert.certificate_arn
//    instance_port = 5000
//    instance_protocol = "HTTP"
//    lb_port = 443
//    lb_protocol = "HTTPS"
//  }
//
//  health_check {
//    healthy_threshold = 2
//    unhealthy_threshold = 2
//    timeout = 25
//    target = "HTTP:5000/health"
//    interval = 30
//  }
//
//  access_logs {
//    bucket = aws_s3_bucket.access_logs.bucket
//    bucket_prefix = "graphql"
//    interval = 5
//  }
//
//  tags = {
//    Name = "guided-graphql-${var.stage}"
//  }
//}
//
//resource "aws_proxy_protocol_policy" "graphql" {
//  instance_ports = [
//    "443",
//    "5000"]
//  load_balancer = aws_elb.graphql.id
//}
//
//resource "aws_lb_cookie_stickiness_policy" "graphql" {
//  name = "graphql-${var.stage}"
//  load_balancer = aws_elb.graphql.id
//  lb_port = 443
//  cookie_expiration_period = 600
//}
//
//resource "aws_route53_record" "graphql" {
//  name = "${var.stage}-graphql.${var.domain_name}"
//  type = "A"
//  zone_id = aws_route53_zone.ridersbible.zone_id
//
//  alias {
//    name = aws_elb.graphql.dns_name
//    zone_id = aws_elb.graphql.zone_id
//    evaluate_target_health = true
//  }
//}