aws_region = "us-west-2"

### VPC ###
vpc_name = "vpc-test"
vpc_cidr = "16.4.0.0/18"
vpc_cidr_lb = [
  "16.4.40.0/23",
  "16.4.42.0/23"
]
vpc_cidr_shared = [
  "16.4.44.0/23",
  "16.4.46.0/23"
]
vpc_cidr_app = [
  "16.4.0.0/20",
  "16.4.16.0/20"
]
vpc_cidr_data = [
  "16.4.32.0/22",
  "16.4.36.0/22"
]
vpc_subs_az = [
  "us-west-2a",
  "us-west-2b",
]
tags = {
  Environment = "test"
  Owner       = "Brian Romero"
}

### EKS ###
eks_cluster_name = "cluster-test"

eks_main_ng = {
  ng_instance_types = ["c5.large"]
  ng_disk_size      = 25
  ng_min_size       = 1
  ng_max_size       = 1
  ng_desired_size   = 1
  ng_capacity_type  = "ON_DEMAND"
}
eks_node_groups_map = {
  spot = {
    capacity_type = "SPOT"
    instance_types = [
      "c5.4xlarge", 
      "c5a.4xlarge"
    ]
    desired_capacity = 1
    desired_size = 1
    min_size     = 1
    max_size     = 1
    min_capacity     = 1
    max_capacity     = 1
    disk_size = 20
    tags = {
      nodegroup = "spot"
    }
  }
  ondemand = {
    capacity_type = "ON_DEMAND"
    instance_types = [
      "t3.2xlarge",
      "m4.2xlarge",
      "m5d.2xlarge"
    ]
    desired_capacity = 1
    desired_size = 1
    min_size         = 1
    max_size         = 1
    desired_size     = 1
    min_capacity     = 1
    max_capacity     = 1
    disk_size        = 20
    tags = {
      nodegroup = "on_demand"
    }
  }
}

eks_namespaces      = ["dev", "qa", "grafana", "prometheus"]

# CloudFront
cf_name        = "glow-devops-02"
cf_bucket_name = "cf-glow-development-devops-02"
name_cf_policy = "example-headers-policy-devops-02"

