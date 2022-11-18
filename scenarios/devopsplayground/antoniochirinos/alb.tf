#Application loadbalancer and target group and alb http listener

resource "aws_alb" "alb" {
  name            = "myapp-load-balancer"
  subnets         = aws_subnet.public.*.id
  security_groups = [aws_security_group.alb-sg.id]
  tags = {
    "Name"        = "${var.project}-${var.environment}"
    "project"     = var.project
    "environment" = var.environment
    origin        = var.origin
  }
}

resource "aws_alb_target_group" "myapp-tg" {
  name        = "myapp-tg"
  port        = 80
  protocol    = "HTTP"
  target_type = "ip"
  vpc_id      = aws_vpc.wbd-vpc.id

  health_check {
    healthy_threshold   = 2
    unhealthy_threshold = 2
    timeout             = 3
    protocol            = "HTTP"
    matcher             = "200"
    path                = var.health_check_path
    interval            = 30
  }
  tags = {
    "Name"        = "${var.project}-${var.environment}"
    "project"     = var.project
    "environment" = var.environment
    origin        = var.origin
  }
}

#redirecting all incomming traffic from ALB to the target group
resource "aws_alb_listener" "wbdapp" {
  load_balancer_arn = aws_alb.alb.arn
  port              = var.app_port
  protocol          = "HTTPS"
  ssl_policy        = "ELBSecurityPolicy-2016-08"
  certificate_arn   = aws_acm_certificate.cert.arn

  default_action {
    type             = "forward"
    target_group_arn = aws_alb_target_group.myapp-tg.arn
  }
  tags = {
    "Name"        = "${var.project}-${var.environment}"
    "project"     = var.project
    "environment" = var.environment
    origin        = var.origin
  }
}
