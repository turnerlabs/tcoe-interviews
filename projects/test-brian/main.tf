### AWS PROVIDER ###
provider "aws" {
    region = var.aws_region

    ignore_tags {
      key_prefixes = ["kubernetes.io/"]
    }
}

### REMOTO BACKEND ###
terraform {
    backend "s3" {
        region = "us-west-2"
        bucket = "devops-tf-backend-test"
        key = "test-backend-test/test-brian"
        dynamodb_table = "tf_state_lock_test"
    }
}

### CREATE VPC ###
module "vpc" {
    #source = "REFERENCIA AL GIT"
    source = "../../modules/vpc"

    name = var.vpc_name
    cidr         = var.vpc_cidr
    subs_az      = var.vpc_subs_az
    cidr_app     = var.vpc_cidr_app
    cidr_shared  = var.vpc_cidr_shared
    cidr_lb      = var.vpc_cidr_lb
    cidr_data    = var.vpc_cidr_data
    tags         = var.tags
    tags_subs    = var.tags_vpc
    cluster_name = var.eks_cluster_name
}

### CREATE EKS cluster ###
module "eks" {
   #source = "REFERENCIA AL GIT"
  source = "../../modules/eks"

  aws_region   = var.aws_region
  cluster_name = var.eks_cluster_name
  vpc_id       = module.vpc.vpc_id
  subnet_id    = module.vpc.app_subnet_id
  az_list      = var.vpc_subs_az

  ng_instance_types = var.eks_main_ng["ng_instance_types"]
  ng_capacity_type  = var.eks_main_ng["ng_capacity_type"]
  ng_disk_size      = var.eks_main_ng["ng_disk_size"]
  ng_min_size       = var.eks_main_ng["ng_min_size"]
  ng_max_size       = var.eks_main_ng["ng_max_size"]
  ng_desired_size   = var.eks_main_ng["ng_desired_size"]

  node_groups_map = var.eks_node_groups_map

  tags = var.tags
}

### CREATE CLOUD FRONT ###
module "cloudfront" {
   #source = "REFERENCIA AL GIT"
  source = "../../modules/cloudfront"

  name           = var.cf_name
  tags           = var.tags
  bucket_name    = var.cf_bucket_name
  name_cf_policy = var.name_cf_policy
}
