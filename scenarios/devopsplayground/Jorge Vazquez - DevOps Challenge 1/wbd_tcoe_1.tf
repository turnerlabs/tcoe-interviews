terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }
}

provider "aws" {
  region     = var.region
  access_key = var.my_access_key
  secret_key = var.my_secret_key
}

# Create a VPC
resource "aws_vpc" "vpc-wbd-tcoe" {
    cidr_block = "172.31.0.0/16"
    enable_dns_support   = true
    enable_dns_hostnames = true
    tags       = {
        Name = "vpc-wbd-tcoe"
    }
}

# Create an Internet Gateway
resource "aws_internet_gateway" "internet_gateway" {
    vpc_id = aws_vpc.vpc-wbd-tcoe.id
}

# Create a Subnet
resource "aws_subnet" "subnet_1" {
    vpc_id                  = aws_vpc.vpc-wbd-tcoe.id
    cidr_block              = "172.31.16.0/20"
}

# Create a Route Table
resource "aws_route_table" "public_rt" {
    vpc_id = aws_vpc.vpc-wbd-tcoe.id

    route {
        cidr_block = "0.0.0.0/0"
        gateway_id = aws_internet_gateway.internet_gateway.id
    }
}

resource "aws_route_table_association" "route_table_association" {
    subnet_id      = aws_subnet.subnet_1.id
    route_table_id = aws_route_table.public_rt.id
}

# Create a Security Group
resource "aws_security_group" "wbd-tcoe-ecs_sg" {
    vpc_id      = aws_vpc.vpc-wbd-tcoe.id

    ingress {
        from_port       = 22
        to_port         = 22
        protocol        = "tcp"
        cidr_blocks     = ["0.0.0.0/0"]
    }

    ingress {
        from_port       = 443
        to_port         = 443
        protocol        = "tcp"
        cidr_blocks     = ["0.0.0.0/0"]
    }

    ingress {
        from_port       = 80
        to_port         = 80
        protocol        = "tcp"
        cidr_blocks     = ["0.0.0.0/0"]
    }

    egress {
        from_port       = 0
        to_port         = 65535
        protocol        = "tcp"
        cidr_blocks     = ["0.0.0.0/0"]
    }
}

# Create an ECS cluster
resource "aws_ecs_cluster" "wbd-tcoe-ecs" {
  name = "wbd-tcoe-ecs-cluster"
}

# Create a ECR Repo
resource "aws_ecr_repository" "wbd-tcoe-ecr" {
    name  = "wbd-tcoe-ecr"
}

# Create an IAM Role for EC2 Instances
resource "aws_iam_role" "wbd-tcoe-ec2-ecs_agent" {
  name  = "wbd-tcoe-ec2-ecs-agent"
  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Sid    = ""
        Principal = {
          Service = "ec2.amazonaws.com"
        }
      },
    ]
  })
}


resource "aws_iam_role_policy_attachment" "wbd-tcoe-ec2-ecs_agent" {
  role       = "aws_iam_role.wbd-tcoe-ec2-ecs_agent.name"
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonEC2ContainerServiceforEC2Role"
}

resource "aws_iam_instance_profile" "wbd-tcoe-ec2-ecs_agent" {
  name = "wbd-tcoe-ec2-ecs-agent"
  role = aws_iam_role.wbd-tcoe-ec2-ecs_agent.name
}

# Create an Autoscalling Group
resource "aws_launch_configuration" "wbd-tcoe-ecs_launch_config" {
    image_id             = "ami-0941a7859f46171d5"
    iam_instance_profile = aws_iam_instance_profile.wbd-tcoe-ec2-ecs_agent.name
    security_groups      = [aws_security_group.wbd-tcoe-ecs_sg.id]
    user_data            = "#!/bin/bash\necho ECS_CLUSTER=wbd-tcoe-ecs-cluster >> /etc/ecs/ecs.config"
    instance_type        = "t2.micro"
}

resource "aws_autoscaling_group" "failure_analysis_ecs_asg" {
    name                      = "wbd-tcoe-ecs-asg"
    vpc_zone_identifier       = [aws_subnet.subnet_1.id]
    launch_configuration      = aws_launch_configuration.wbd-tcoe-ecs_launch_config.name

    desired_capacity          = 1
    min_size                  = 1
    max_size                  = 1
    health_check_grace_period = 300
    health_check_type         = "EC2"
}

# Create a Task Definition
resource "aws_ecs_task_definition" "wbd-tcoe-task_definition" {
  family                = "wbd-tcoe-task_definition"
  container_definitions = jsonencode([
    {
      name      = "ecs-service_1"
      image     = "861973931088.dkr.ecr.us-west-2.amazonaws.com/wbd-tcoe-ecr:latest"
      cpu       = 2
      memory    = 512
      essential = true
      portMappings = [
        {
          containerPort = 80
          hostPort      = 80
        }
      ]
    }
  ])
}

# Create an ECS Task
resource "aws_ecs_service" "wbd-tcoe-ecs-service" {
  name            = "wbd-tcoe-ecs-service"
  cluster         = aws_ecs_cluster.wbd-tcoe-ecs.id
  task_definition = aws_ecs_task_definition.wbd-tcoe-task_definition.arn
  desired_count   = 1
}

# Create a CloudFront distribution
resource "aws_cloudfront_distribution" "cfd-wbd-tcoe" {
  enabled = true
  origin {
    domain_name = "web-wbd-tcoe.s3.amazonaws.com"
    origin_id   = var.origin_id
    custom_origin_config {
      http_port              = "80"
      https_port             = "443"
      origin_protocol_policy = "http-only"
      origin_ssl_protocols   = ["TLSv1", "TLSv1.1", "TLSv1.2"]
    }
  }


  restrictions {
    geo_restriction {
      restriction_type = "whitelist"
      locations        = ["US", "CA"]
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }

  default_cache_behavior {
    viewer_protocol_policy = "allow-all"
    allowed_methods        = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods         = ["GET", "HEAD"]
    target_origin_id       = var.origin_id

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }
  }
}
