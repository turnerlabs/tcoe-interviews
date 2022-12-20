resource "helm_release" "metrics_server" {
    name = "metrics-server"

    repository       = "https://charts.bitnami.com/bitnami"
    chart            = "metrics-server"
    namespace        = "metrics-server"
    version          = "6.0.8"
    create_namespace = true

    set {
        name  = "apiService.create"
        value = "true"
    }
}
