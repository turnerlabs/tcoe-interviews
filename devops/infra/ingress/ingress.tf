
resource "kubectl_manifest" "ingress-marketplace" {
  yaml_body = <<YAML
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: ingress-marketplace
  namespace: marketplace
  annotations:
    external-dns.alpha.kubernetes.io/hostname: '${var.environment}-marketplace.${var.domain}'
    kubernetes.io/ingress.class: alb
    alb.ingress.kubernetes.io/scheme: internet-facing
    alb.ingress.kubernetes.io/backend-protocol: HTTP
    alb.ingress.kubernetes.io/certificate-arn: arn:aws:acm:us-east-1:${var.account_id}:certificate/${var.acm_org_com}
    alb.ingress.kubernetes.io/group.name: ingress-external
    alb.ingress.kubernetes.io/listen-ports: '[{"HTTP": 80}, {"HTTPS":443}]'
    alb.ingress.kubernetes.io/ssl-redirect: '443'
    alb.ingress.kubernetes.io/target-type: 'ip'
spec:
  rules:
  - host: ${var.environment}-marketplace.${var.domain}
    http:
      paths:
      - path:
        pathType: ImplementationSpecific
        backend:
          service:
            name: ecsdemo-nodejs
            port:
              number: 80
YAML
}

data "kubectl_path_documents" "sample-app" {
  pattern = "../sample-app/*.yaml"
}

resource "kubectl_manifest" "sample-app-apply" {
  depends_on = [helm_release.argocd-chart]
  for_each   = toset(data.kubectl_path_documents.sample-app.documents)
  yaml_body  = each.value
}