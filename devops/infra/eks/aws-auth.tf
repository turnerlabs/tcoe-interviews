resource "kubectl_manifest" "rbac-clusterrolebinding" {
  yaml_body = <<YAML
kind: ClusterRoleBinding
apiVersion: rbac.authorization.k8s.io/v1
metadata:
  name: kubelet-api-admin
subjects:
- kind: User
  name: kubelet-api
  apiGroup: rbac.authorization.k8s.io
roleRef:
  kind: ClusterRole
  name: system:kubelet-api-admin
  apiGroup: rbac.authorization.k8s.io
YAML
}

resource "kubectl_manifest" "aws-auth" {
  yaml_body = <<YAML
apiVersion: v1
data:
  mapRoles: |
    - groups:
      - system:bootstrappers
      - system:nodes
      rolearn: arn:aws:iam::${var.account_id}:role/${var.environment}-Worker-Role
      username: system:node:{{EC2PrivateDNSName}}

  mapUsers: |
      - userarn: arn:aws:iam::${var.account_id}:user/svc-terraform
        username: svc-terraform
        groups:
          - system:masters
      - userarn: arn:aws:iam::${var.account_id}:user/${var.admin_user}
        username: ${var.admin_user}
        groups:
          - system:masters

kind: ConfigMap
metadata:
  name: aws-auth
  namespace: kube-system
YAML
}
