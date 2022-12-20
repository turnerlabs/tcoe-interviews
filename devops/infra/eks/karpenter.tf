# This service makes it easy to scale vertically when our cluster is running out of compute or memory resources: https://karpenter.sh/
data "aws_iam_policy_document" "karpenter_controller" {
  depends_on = [aws_eks_node_group.this]
  statement {
    actions = ["sts:AssumeRoleWithWebIdentity"]
    effect  = "Allow"

    condition {
      test     = "StringEquals"
      variable = "${replace(aws_iam_openid_connect_provider.oidc-eks.url, "https://", "")}:sub"
      values = [
        "system:serviceaccount:karpenter:karpenter"
      ]
    }

    principals {
      identifiers = [aws_iam_openid_connect_provider.oidc-eks.arn]
      type        = "Federated"
    }
  }
}

resource "aws_iam_policy" "karpenter_controller" {
  name = "${var.environment}-karpenter-policy"
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = [
          "ec2:CreateLaunchTemplate",
          "ec2:CreateFleet",
          "ec2:RunInstances",
          "ec2:CreateTags",
          "iam:PassRole",
          "ec2:TerminateInstances",
          "ec2:DescribeLaunchTemplates",
          "ec2:DescribeInstances",
          "ec2:DescribeSecurityGroups",
          "ec2:DescribeSubnets",
          "ec2:DescribeInstanceTypes",
          "ec2:DescribeInstanceTypeOfferings",
          "ec2:DescribeAvailabilityZones",
          "ssm:GetParameter"
        ]
        Effect   = "Allow"
        Resource = "*"
      },
    ]
  })
}

# ExternalDNS, route53 administration.
resource "aws_iam_role" "karpenter_controller" {
  name               = "${var.environment}-karpenter-controller"
  assume_role_policy = data.aws_iam_policy_document.karpenter_controller.json
}

resource "aws_iam_role_policy_attachment" "karpenter_controller" {
  role       = aws_iam_role.karpenter_controller.name
  policy_arn = aws_iam_policy.karpenter_controller.arn
}

resource "helm_release" "karpenter" {
  namespace        = "karpenter"
  create_namespace = true

  name       = "karpenter"
  repository = "https://charts.karpenter.sh"
  chart      = "karpenter"
  version    = "v0.13.2"

  set {
    name  = "serviceAccount.annotations.eks\\.amazonaws\\.com/role-arn"
    value = aws_iam_role.karpenter_controller.arn
  }

  set {
    name  = "clusterName"
    value = aws_eks_cluster.this.id
  }

  set {
    name  = "clusterEndpoint"
    value = aws_eks_cluster.this.endpoint
  }
  # From node_groups.tf
  set {
    name  = "aws.defaultInstanceProfile"
    value = aws_iam_instance_profile.karpenter.name
  }
}

resource "kubectl_manifest" "karpenter_provisioner" {
  yaml_body = <<-YAML
  apiVersion: karpenter.sh/v1alpha5
  kind: Provisioner
  metadata:
    name: "${var.environment}-cluster"
  spec:
    requirements:
      - key: karpenter.sh/capacity-type
        operator: In
        values: ["spot"]
      - key: karpenter.k8s.aws/instance-family
        operator: In
        values: [t3]
      - key: karpenter.k8s.aws/instance-size
        operator: In
        values: [small, large, xlarge, 2xlarge]
    limits:
      resources:
        cpu: 1000
    provider:
      subnetSelector:
        "karpenter.sh/discovery": "${var.environment}-cluster"
      securityGroupSelector:
        "karpenter.sh/discovery": "${var.environment}-cluster"
      tags:
        "karpenter.sh/discovery": "${var.environment}-cluster"
        "kubernetes.io/os": "linux"
    ttlSecondsAfterEmpty: 30
  YAML

  depends_on = [
    helm_release.karpenter
  ]
}
