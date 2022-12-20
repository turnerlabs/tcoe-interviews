# Main namespace for app/apis/etc
resource "kubectl_manifest" "namespace-marketplace" {
    yaml_body = <<YAML
apiVersion: v1
kind: Namespace
metadata:
    name: marketplace
YAML
}