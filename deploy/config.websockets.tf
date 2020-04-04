resource "aws_lb_target_group" "websockets" {
  name = "guided-websockets-${var.stage}"
  port = 443
  vpc_id = aws_default_vpc.default.id

  //  stickiness {
  //    type = "lb_cookie"
  //    cookie_duration = 1800
  //    enabled = true
  //  }

  //  health_check {
  //    healthy_threshold = 3
  //    unhealthy_threshold = 10
  //    timeout = 5
  //    interval = 10
  //    path = "/health"
  //  }

}

resource "aws_lb_target_group_attachment" "websockets" {
  target_group_arn = aws_lb_target_group.websockets.arn
  target_id = aws_instance.server.id
  port = 5000
}

resource "aws_lb_listener" "websockets" {
  load_balancer_arn = aws_lb.server.arn
  port = 443
  protocol = "TLS"
  depends_on = [
    aws_lb_target_group.websockets]
  ssl_policy = "ELBSecurityPolicy-2016-08"
  certificate_arn = aws_acm_certificate.guided_london.arn

  default_action {
    type = "forward"
    target_group_arn = aws_lb_target_group.websockets.arn
  }
}