resource "kubectl_manifest" "ec2-management-role-sa" {
    yaml_body = <<YAML
apiVersion: v1
kind: ServiceAccount
metadata:
  annotations:
    eks.amazonaws.com/role-arn: arn:aws:iam::${var.account_id}:role/ec2-management-role-${var.environment}
  name: ec2-management-role
  namespace: kube-system
YAML
}