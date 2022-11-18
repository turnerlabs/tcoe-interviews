terraform {
  backend "s3" {
    bucket = "wbd-antoniochirinos-challenge-1"
    key    = "terraform/terraform.tfstate"
    region = "us-east-1"
  }
}