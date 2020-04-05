resource "aws_lb_target_group" "graphql" {
  name = "guided-graphql-${var.stage}"
  port = 443
  vpc_id = aws_default_vpc.default.id

  protocol = "HTTP"

  stickiness {
    type = "lb_cookie"
    cookie_duration = 1800
    enabled = true
  }

  health_check {
    healthy_threshold = 3
    unhealthy_threshold = 10
    timeout = 5
    interval = 10
    path = "/health"
  }

}

resource "aws_lb_target_group_attachment" "graphql" {
  target_group_arn = aws_lb_target_group.graphql.arn
  target_id = aws_instance.server.id
  port = 5000
}

resource "aws_lb_listener" "http_only" {
  load_balancer_arn = aws_lb.server.arn
  protocol = "HTTP"
  port = 80

  default_action {
    type = "fixed-response"
    fixed_response {
      content_type = "text/plain"
      message_body = "HTTPS only"
      status_code = "400"
    }
  }
  depends_on = [
    aws_lb_target_group.graphql]
}

resource "aws_lb_listener" "graphql" {
  load_balancer_arn = aws_lb.server.arn
  port = 443
  protocol = "HTTPS"
  ssl_policy = "ELBSecurityPolicy-2016-08"
  certificate_arn = aws_acm_certificate.guided_london.arn

  default_action {
    type = "forward"
    target_group_arn = aws_lb_target_group.graphql.arn
  }

  depends_on = [
    aws_lb_target_group.graphql]
}