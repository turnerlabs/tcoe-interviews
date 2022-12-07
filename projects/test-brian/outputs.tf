################################################################################
# OUTPUTS
################################################################################

# VPC
output "vpc_id" {
  description = "VPC ID"
  value       = module.vpc.vpc_id
}
output "app_subnet_id" {
  description = "VPC Public Subnet ID - APP"
  value       = module.vpc.app_subnet_id
}
output "lb_subnet_id" {
  description = "VPC Private Subnet ID - LB"
  value       = module.vpc.lb_subnet_id
}
output "data_subnet_id" {
  description = "VPC Private Subnet ID - DATA"
  value       = module.vpc.data_subnet_id
}
output "vpc_db_subnet_group" {
  description = "VPC DB Subnet Group"
  value       = module.vpc.db_subnet_group
}
output "shared_subnet_id" {
  description = "VPC Public Subnet ID - SHARE"
  value       = module.vpc.shared_subnet_id
}

