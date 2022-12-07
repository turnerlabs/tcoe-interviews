################################################################################
# OUTPUTS
################################################################################
output "cluster_id" {
  description = "EKS Cluster ID"
  depends_on  = [helm_release.helm_alb_install]
  value       = var.cluster_name
}
output "argocd_nlb_dns" {
  description = "DNS for ArgoCDs NLB"
  value       = kubernetes_service.argocd_nlb.status[0].load_balancer[0].ingress[0].hostname
}
