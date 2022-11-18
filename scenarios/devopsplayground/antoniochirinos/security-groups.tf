# ALB Security Group
resource "aws_security_group" "alb-sg" {
  name        = "wbdapp-load-balancer-security-group"
  description = "controls access to the ALB"
  vpc_id      = aws_vpc.wbd-vpc.id

  ingress {
    protocol    = "tcp"
    from_port   = var.app_port
    to_port     = var.app_port
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    protocol    = "tcp"
    from_port   = var.app_port_secure
    to_port     = var.app_port_secure
    cidr_blocks = ["0.0.0.0/0"]
  }


  egress {
    protocol    = "-1"
    from_port   = 0
    to_port     = 0
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    "Name"        = "${var.project}-${var.environment}"
    "project"     = var.project
    "environment" = var.environment
    origin        = var.origin
  }
}

# this security group for ecs - traffic to the ECS cluster should only come from the ALB
resource "aws_security_group" "ecs_sg" {
  name        = "wbdapp-ecs-tasks-security-group"
  description = "allow inbound access from the ALB only"
  vpc_id      = aws_vpc.wbd-vpc.id

  ingress {
    protocol        = "tcp"
    from_port       = var.app_port
    to_port         = var.app_port
    security_groups = [aws_security_group.alb-sg.id]
  }

  ingress {
    protocol    = "tcp"
    from_port   = var.app_port_secure
    to_port     = var.app_port_secure
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    protocol    = "-1"
    from_port   = 0
    to_port     = 0
    cidr_blocks = ["0.0.0.0/0"]
  }
  tags = {
    "Name"        = "${var.project}-${var.environment}"
    "project"     = var.project
    "environment" = var.environment
    origin        = var.origin
  }
}
