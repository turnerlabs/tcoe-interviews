# Set up CloudWatch group and log stream and retain logs for 30 days
resource "aws_cloudwatch_log_group" "wbdapp_log_group" {
  name              = "/ecs/wbdapp"
  retention_in_days = 30

  tags = {
    "Name"        = "${var.project}-${var.environment}"
    "project"     = var.project
    "environment" = var.environment
    origin        = var.origin
  }
}

resource "aws_cloudwatch_log_stream" "myapp_log_stream" {
  name           = "wbd-log-stream"
  log_group_name = aws_cloudwatch_log_group.wbdapp_log_group.name

}
