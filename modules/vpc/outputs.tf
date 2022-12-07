################################################################################
# OUTPUTS
################################################################################

output "vpc_id" {
  description = "VPC ID"
  depends_on = [
    aws_route_table_association.private_sub_assoc_app,
    aws_route.public_ig_route_shared,
    aws_route.private_nat_route_app
  ]
  value = aws_vpc.vpc.id
}

output "vpc_sg" {
  description = "VPC's Default Security Group ID"
  value       = aws_default_security_group.default_sg.id
}

output "app_subnet_id" {
  description = "Public Subnet ID - APP"
  value       = aws_subnet.private_sub_app.*.id
}

output "lb_subnet_id" {
  description = "Private Subnet ID - LB"
  value       = aws_subnet.private_sub_lb.*.id
}

output "data_subnet_id" {
  description = "Private Subnet ID - DATA"
  value       = aws_subnet.private_sub_data.*.id
}

output "shared_subnet_id" {
  description = "Public Subnet ID - SHARED"
  value       = aws_subnet.public_sub_shared.*.id
}

output "db_subnet_group" {
  description = "DB Subnet Group"
  value       = aws_db_subnet_group.db_sub.id
}


