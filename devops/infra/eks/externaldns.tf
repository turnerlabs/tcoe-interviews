data "aws_iam_policy_document" "sa-external-dns" {
  depends_on = [aws_eks_node_group.this]
  statement {
    actions = ["sts:AssumeRoleWithWebIdentity"]
    effect  = "Allow"

    condition {
      test     = "StringEquals"
      variable = "${replace(aws_iam_openid_connect_provider.oidc-eks.url, "https://", "")}:sub"
      values = [
        "system:serviceaccount:kube-system:external-dns"
      ]
    }

    principals {
      identifiers = [aws_iam_openid_connect_provider.oidc-eks.arn]
      type        = "Federated"
    }
  }
}

resource "aws_iam_policy" "externaldns-policy" {
  name = "${var.environment}-externaldns-policy"
  policy = jsonencode({
    "Version" : "2012-10-17",
    "Statement" : [
      {
        "Effect" : "Allow",
        "Action" : [
          "route53:ChangeResourceRecordSets"
        ],
        "Resource" : [
          "arn:aws:route53:::hostedzone/*"
        ]
      },
      {
        "Effect" : "Allow",
        "Action" : [
          "route53:ListHostedZones",
          "route53:ListResourceRecordSets"
        ],
        "Resource" : [
          "*"
        ]
      }
    ]
  })
}

#ExternalDNS, route53 administration. 
resource "aws_iam_role" "externaldns-role" {
  name               = "${var.environment}-externaldns-role"
  assume_role_policy = data.aws_iam_policy_document.sa-external-dns.json
}

resource "aws_iam_role_policy_attachment" "externaldns-attach" {
  depends_on = [aws_iam_policy.externaldns-policy]
  role       = aws_iam_role.externaldns-role.name
  policy_arn = aws_iam_policy.externaldns-policy.arn
}

resource "kubectl_manifest" "externaldns-manifest_1" {
  depends_on = [aws_iam_role_policy_attachment.externaldns-attach]
  yaml_body  = <<YAML
apiVersion: v1
kind: ServiceAccount
metadata:
  name: external-dns
  namespace: kube-system
  annotations:
    eks.amazonaws.com/role-arn: arn:aws:iam::${var.account_id}:role/${var.environment}-externaldns-role
  YAML
}
resource "kubectl_manifest" "externaldns-manifest_2" {
  depends_on = [kubectl_manifest.externaldns-manifest_1]
  yaml_body  = <<YAML
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: external-dns
  namespace: kube-system
rules:
- apiGroups: [""]
  resources: ["services","endpoints","pods"]
  verbs: ["get","watch","list"]
- apiGroups: ["extensions","networking.k8s.io"]
  resources: ["ingresses"]
  verbs: ["get","watch","list"]
- apiGroups: [""]
  resources: ["nodes"]
  verbs: ["list","watch"]
  YAML
}
resource "kubectl_manifest" "externaldns-manifest_3" {
  depends_on = [kubectl_manifest.externaldns-manifest_2]
  yaml_body  = <<YAML
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: external-dns-viewer
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: external-dns
subjects:
- kind: ServiceAccount
  name: external-dns
  namespace: kube-system
  YAML
}
resource "kubectl_manifest" "externaldns-manifest_4" {
  depends_on = [kubectl_manifest.externaldns-manifest_3]
  yaml_body  = <<YAML
apiVersion: apps/v1
kind: Deployment
metadata:
  name: external-dns
  namespace: kube-system
spec:
  strategy:
    type: Recreate
  selector:
    matchLabels:
      app: external-dns
  template:
    metadata:
      labels:
        app: external-dns
    spec:
      serviceAccountName: external-dns
      containers:
      - name: external-dns
        image: k8s.gcr.io/external-dns/external-dns:v0.11.0
        args:
        - --source=service
        - --source=ingress
        - --domain-filter=${var.domain}
        - --provider=aws
        - --aws-zone-type=public # only look at public hosted zones (valid values are public, private or no value for both)
        - --registry=txt
        - --txt-owner-id=${var.environment}-${var.hosted_zone_id}
      securityContext:
        fsGroup: 65534 # For ExternalDNS to be able to read Kubernetes and AWS token files
YAML
}
