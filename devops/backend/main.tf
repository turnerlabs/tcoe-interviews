terraform {
  required_version = ">=1.1.7"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "4.2.0"
    }
  }
}

resource "aws_kms_key" "terraform-backend" {
  description              = "Key use for DynamoDB and S3 Terraform backend"
  key_usage                = "ENCRYPT_DECRYPT"
  customer_master_key_spec = "SYMMETRIC_DEFAULT"
  policy                   = <<EOF
{
  "Version": "2012-10-17",
   "Statement": [
    {
      "Sid": "Enable IAM policies",
      "Effect": "Allow",
      "Action": ["kms:*"],
      "Resource": ["*"],
      "Principal": {
        "AWS": "arn:aws:iam::${var.account_id}:root"
      }
    },
    {
      "Sid": "Allow access for Key Administrators",
      "Effect": "Allow",
      "Principal": { "AWS": [
        "arn:aws:iam::${var.account_id}:user/${var.admin_user}",
        "arn:aws:iam::${var.account_id}:user/svc-terraform"
        ] },
      "Action": [
        "kms:Create*",
        "kms:Describe*",
        "kms:Enable*",
        "kms:List*",
        "kms:Put*",
        "kms:Update*",
        "kms:Revoke*",
        "kms:Disable*",
        "kms:Get*",
        "kms:Delete*",
        "kms:TagResource",
        "kms:UntagResource",
        "kms:ScheduleKeyDeletion",
        "kms:CancelKeyDeletion"
      ],
      "Resource": "*"
    }
  ]
}
EOF
  enable_key_rotation      = true

  tags = {
    Name           = "terraform-tfstate-lock"
    Owners         = "DevOps"
    Version        = "1.0.0"
    Monitoring     = "No"
    Security       = "High"
    DataProtection = "No"
    Critical       = "High"
  }
}

resource "aws_kms_alias" "terraform-backend" {
  name          = "alias/terraform-backend"
  target_key_id = aws_kms_key.terraform-backend.key_id
}
