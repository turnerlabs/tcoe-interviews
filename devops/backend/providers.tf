provider "aws" {
  region                   = "us-east-1"
  shared_config_files      = [var.aws_config_file]
  shared_credentials_files = [var.aws_credentials_file]
  profile                  = var.aws_profile
  default_tags {
    tags = {
      Environment = "production"
      Application = "Terraform Backend"
      ManagedBy   = "terraform"
    }
  }
}
