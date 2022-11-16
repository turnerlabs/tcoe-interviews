output "lb_url" {
  value = "http://${aws_alb.application_load_balancer.dns_name}"
}