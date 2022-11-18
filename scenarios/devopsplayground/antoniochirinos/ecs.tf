resource "aws_ecs_cluster" "wbd-cluster" {
  name = "myapp-cluster"
  tags = {
    "Name"        = "${var.project}-${var.environment}"
    "project"     = var.project
    "environment" = var.environment
    origin        = var.origin
  }
}

data "template_file" "wbdapp" {
  template = file("./images/image.json")

  vars = {
    app_image      = var.app_image
    app_port       = var.app_port
    fargate_cpu    = var.fargate_cpu
    fargate_memory = var.fargate_memory
    aws_region     = var.aws_region
  }
}

resource "aws_ecs_task_definition" "wbd-def" {
  family                   = "wbdapp-task"
  execution_role_arn       = aws_iam_role.ecs_task_execution_role.arn
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  cpu                      = var.fargate_cpu
  memory                   = var.fargate_memory
  container_definitions    = data.template_file.wbdapp.rendered
  tags = {
    "Name"        = "${var.project}-${var.environment}"
    "project"     = var.project
    "environment" = var.environment
    origin        = var.origin
  }
}

resource "aws_ecs_service" "wbd-service" {
  name            = "wbdapp-service"
  cluster         = aws_ecs_cluster.wbd-cluster.id
  task_definition = aws_ecs_task_definition.wbd-def.arn
  desired_count   = var.app_count
  launch_type     = "FARGATE"

  network_configuration {
    security_groups  = [aws_security_group.ecs_sg.id]
    subnets          = aws_subnet.private.*.id
    assign_public_ip = true
  }

  load_balancer {
    target_group_arn = aws_alb_target_group.myapp-tg.arn
    container_name   = "wbdapp"
    container_port   = var.app_port
  }

  tags = {
    "Name"        = "${var.project}-${var.environment}"
    "project"     = var.project
    "environment" = var.environment
    origin        = var.origin
  }

  depends_on = [aws_alb_listener.wbdapp, aws_iam_role_policy_attachment.ecs_task_execution_role]
}
