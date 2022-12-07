################################################################################
# OUTPUTS
################################################################################

output "cluster_id" {
  description = "EKS Cluster ID"
  depends_on  = [null_resource.update_local_kubeconfig]
  value       = module.eks-cluster.cluster_id
}
output "cluster_arn" {
  description = "The ARN of the EKS cluster"
  value       = module.eks-cluster.cluster_arn
}
output "cluster_endpoint" {
  description = "The endpoint for the EKS Kubernetes API"
  value       = module.eks-cluster.cluster_endpoint
}
output "cluster_oidc_url" {
  description = "URL for the EKS Cluster OpenID"
  value       = module.eks-cluster.cluster_oidc_issuer_url
}

output "efs_arn" {
  description = "ARN of the EFS filesystem"
  value       = aws_efs_file_system.efs.arn
}
output "efs_id" {
  description = "ID of the EFS filesystem"
  value       = aws_efs_file_system.efs.id
}
output "efs_dns" {
  description = "DNS of the EFS filesystem"
  value       = aws_efs_file_system.efs.dns_name
}
output "efs_mount_target_dns" {
  description = "DNS of the EFS mount target"
  value       = aws_efs_mount_target.efs_mounts.*.dns_name
}
