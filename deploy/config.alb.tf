resource "aws_default_vpc" "default" {
  enable_dns_hostnames = true
}

data "aws_subnet_ids" "default" {
  vpc_id = aws_default_vpc.default.id
}

resource "aws_lb" "server" {
  name = "guided-server-${var.stage}"
  internal = false
  load_balancer_type = "application"
  security_groups = [
    aws_security_group.server.id]
  subnets = data.aws_subnet_ids.default.ids

  access_logs {
    bucket = aws_s3_bucket.access_logs.bucket
    prefix = "lb-server"
  }
}

resource "aws_route53_record" "api" {
  name = "${var.stage}-api.${var.domain_name}"
  type = "A"
  zone_id = aws_route53_zone.ridersbible.id
  alias {
    name = aws_lb.server.dns_name
    zone_id = aws_lb.server.zone_id
    evaluate_target_health = true
  }
}