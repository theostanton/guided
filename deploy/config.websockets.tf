//resource "aws_lb_target_group" "websockets" {
//  name = "guided-websockets-${var.stage}"
//  port = 443
//  protocol = "HTTPS"
////  vpc_id = aws_default_vpc.default.id
//
//
//  //  stickiness {
//  //    type = "lb_cookie"
//  //    cookie_duration = 1800
//  //    enabled = true
//  //  }
//  //  health_check {
//  //    healthy_threshold   = 3
//  //    unhealthy_threshold = 10
//  //    timeout             = 5
//  //    interval            = 10
//  //    path                = "${var.target_group_path}"
//  //    port                = "${var.target_group_port}"
//  //  }
//
//}
//
//resource "aws_lb_target_group_attachment" "websockets" {
//  target_group_arn = aws_lb_target_group.websockets.arn
//  target_id = aws_instance.server.id
//  port = 5000
//}
//
//resource "aws_lb_listener_certificate" "websockets" {
//  listener_arn = aws_alb_listener.websockets.arn
//  certificate_arn = aws_acm_certificate_validation.cert.certificate_arn
//}
//
//resource "aws_alb_listener" "websockets" {
//  load_balancer_arn = aws_lb.websockets.arn
//  port = 443
//  protocol = "HTTPS"
//  ssl_policy = "ELBSecurityPolicy-2016-08"
//  certificate_arn = aws_acm_certificate.guided_london.arn
//
//  default_action {
//    type = "forward"
//    target_group_arn = aws_lb_target_group.websockets.arn
//  }
//}
//
//resource "aws_route53_record" "websockets" {
//  name = "${var.stage}-websockets.${var.domain_name}"
//  type = "A"
//  zone_id = aws_route53_zone.ridersbible.id
//  alias {
//    name = aws_lb.websockets.dns_name
//    zone_id = aws_lb.websockets.zone_id
//    evaluate_target_health = true
//  }
//}
