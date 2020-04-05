//resource "aws_vpc" "guided" {
//  cidr_block = "10.0.0.0/16"
//  enable_dns_hostnames = true
//}
//
//resource "aws_internet_gateway" "guided" {
//  vpc_id = aws_vpc.guided.id
//}

data "aws_subnet_ids" "default" {
  vpc_id = aws_default_vpc.default.id
}

resource "aws_default_vpc" "default" {
  enable_dns_hostnames = true
}


resource "aws_lb" "server" {
  name = "guided-server-${var.stage}"
  internal = false
  load_balancer_type = "application"
  security_groups = [
    aws_security_group.open.id]
  subnets = data.aws_subnet_ids.default.ids

  access_logs {
    bucket = aws_s3_bucket.access_logs.bucket
    prefix = "logs-server-lb"
  }
}

resource "aws_route53_record" "api" {
  name = "${local.domain_prefix}api.${var.domain_name}"
  type = "A"
  zone_id = aws_route53_zone.ridersbible.id
  alias {
    name = aws_lb.server.dns_name
    zone_id = aws_lb.server.zone_id
    evaluate_target_health = true
  }
}