################################################################################
# VPC
################################################################################

resource "aws_vpc" "vpc" {
  cidr_block           = var.cidr
  enable_dns_support   = true
  enable_dns_hostnames = true

  tags = merge(
    { "Name" = format("%s-VPC", var.name) },
    var.tags
  )
}

# Public IP of the machine executing Terraform
data "http" "terra_env_ip" {
  url = "http://ipv4.icanhazip.com"
}

resource "aws_default_security_group" "default_sg" {
  vpc_id = aws_vpc.vpc.id

  ingress {
    description = "VPC self permissions"
    protocol    = -1
    from_port   = 0
    to_port     = 0
    self        = true
  }
  ingress {
    description = "VPC CIDR"
    protocol    = -1
    from_port   = 0
    to_port     = 0
    cidr_blocks = [var.cidr]
  }
  ingress {
    description = "HTTPS - Temporary rule, please delete after initial config!!"
    protocol    = "TCP"
    from_port   = 443
    to_port     = 443
    cidr_blocks = ["${chomp(data.http.terra_env_ip.response_body)}/32"]
  }

  egress {
    description = "Egress open permissions"
    protocol    = -1
    from_port   = 0
    to_port     = 0
    cidr_blocks = ["0.0.0.0/0"]
  }

  lifecycle {
    ignore_changes = [ingress, tags]
  }

  tags = merge(
    { "Name" = format("%s-SG", var.name) },
    var.tags
  )
}

################################################################################
# INTERNET GATEWAY
################################################################################

resource "aws_internet_gateway" "igw" {
  vpc_id = aws_vpc.vpc.id

  tags = merge(
    { "Name" = format("%s-IGW", var.name) },
    var.tags
  )
}

################################################################################
# SUBNETS
################################################################################

###Application
resource "aws_subnet" "private_sub_app" {
  count                   = length(var.cidr_app)
  vpc_id                  = aws_vpc.vpc.id
  cidr_block              = var.cidr_app[count.index]
  availability_zone       = var.subs_az[(count.index % length(var.subs_az))]
  map_public_ip_on_launch = false
  lifecycle {
    ignore_changes = [tags]
  }

  tags = merge(
    {
      Name                                        = format("%s-Private_Sub_App_%s", var.name, upper(substr(var.subs_az[count.index % length(var.subs_az)], -1, 1)))
      Type                                        = "private"
      "kubernetes.io/cluster/${var.cluster_name}" = "1"
    },
    var.tags,
    var.tags_subs["tags_private"]
  )
}

###Load_balancer
resource "aws_subnet" "private_sub_lb" {
  count                   = length(var.cidr_lb)
  vpc_id                  = aws_vpc.vpc.id
  cidr_block              = var.cidr_lb[count.index]
  availability_zone       = var.subs_az[(count.index % length(var.subs_az))]
  map_public_ip_on_launch = false
  lifecycle {
    ignore_changes = [tags]
  }

  tags = merge(
    {
      Name                                        = format("%s-Private_Sub_Lb_%s", var.name, upper(substr(var.subs_az[count.index % length(var.subs_az)], -1, 1)))
      Type                                        = "private"
      "kubernetes.io/role/internal-elb"           = "1"
      "kubernetes.io/cluster/${var.cluster_name}" = "owned"
    },
    var.tags,
    var.tags_subs["tags_private"]
  )
}

###Data
resource "aws_subnet" "private_sub_data" {
  count                   = length(var.cidr_data)
  vpc_id                  = aws_vpc.vpc.id
  cidr_block              = var.cidr_data[count.index]
  availability_zone       = var.subs_az[(count.index % length(var.subs_az))]
  map_public_ip_on_launch = false
  # lifecycle {
  #   ignore_changes = [tags]
  # }

  tags = merge(
    {
      Name = format("%s-Private_Sub_Data_%s", var.name, upper(substr(var.subs_az[count.index % length(var.subs_az)], -1, 1)))
      Type = "private"
    },
    var.tags,
    var.tags_subs["tags_private"]
  )
}

resource "aws_db_subnet_group" "db_sub" {
  name       = lower(format("%s-DB_Sub", var.name))
  subnet_ids = aws_subnet.private_sub_data.*.id

  tags = merge(
    { "Name" = format("%s-DB_Sub", var.name) },
    var.tags
  )
}

###Shared
resource "aws_subnet" "public_sub_shared" {
  count                   = length(var.cidr_shared)
  vpc_id                  = aws_vpc.vpc.id
  cidr_block              = var.cidr_shared[count.index]
  availability_zone       = var.subs_az[count.index]
  map_public_ip_on_launch = true
  lifecycle {
    ignore_changes = [tags]
  }

  tags = merge(
    {
      Name                                        = format("%s-Public_Sub_Shared_%s", var.name, upper(substr(var.subs_az[count.index % length(var.subs_az)], -1, 1)))
      Type                                        = "public"
      "kubernetes.io/role/elb"                    = "1"
      "kubernetes.io/cluster/${var.cluster_name}" = "owned"
    },
    var.tags,
    var.tags_subs["tags_public"],

  )
}

################################################################################
# NAT GATEWAY
################################################################################

resource "aws_eip" "nat_eip_app" {
  count = length(var.cidr_shared)
  vpc   = true
}

resource "aws_nat_gateway" "natgw" {
  count         = length(var.cidr_shared)
  allocation_id = aws_eip.nat_eip_app[count.index].id
  subnet_id     = aws_subnet.public_sub_shared[count.index].id

  tags = merge(
    {
      "Name" = format("%s-NAT_GW_SHARED_%d", var.name, count.index)
    },
    var.tags
  )

  depends_on = [aws_internet_gateway.igw]
}

################################################################################
# ROUTE TABLE
################################################################################

# PUBLIC SUBNET
resource "aws_route_table" "public_rt_shared" {
  vpc_id = aws_vpc.vpc.id

  tags = merge(
    { "Name" = format("%s-Private_RT_SHARED", var.name) },
    var.tags
  )
}

resource "aws_route" "public_ig_route_shared" {
  route_table_id         = aws_route_table.public_rt_shared.id
  destination_cidr_block = "0.0.0.0/0"
  gateway_id             = aws_internet_gateway.igw.id
}

resource "aws_route_table_association" "public_sub_assoc_shared" {
  count          = length(var.cidr_shared)
  route_table_id = aws_route_table.public_rt_shared.id
  subnet_id      = aws_subnet.public_sub_shared[count.index].id
}

# PRIVATE SUBNET
resource "aws_route_table" "private_rt_app" {
  count  = length(aws_nat_gateway.natgw)
  vpc_id = aws_vpc.vpc.id

  tags = merge(
    { "Name" = format("%s-Private_RT_APP_%d", var.name, count.index) },
    var.tags
  )
}

resource "aws_route" "private_nat_route_app" {
  count                  = length(aws_nat_gateway.natgw)
  route_table_id         = aws_route_table.private_rt_app[count.index].id
  destination_cidr_block = "0.0.0.0/0"
  nat_gateway_id         = aws_nat_gateway.natgw[count.index].id
}

resource "aws_route_table_association" "private_sub_assoc_app" {
  count          = length(aws_subnet.private_sub_app)
  route_table_id = aws_route_table.private_rt_app[(count.index % length(aws_nat_gateway.natgw))].id
  subnet_id      = aws_subnet.private_sub_app[count.index].id
}


# PRIVATE SUBNET
resource "aws_route_table" "private_rt_data_lb" {
  vpc_id = aws_vpc.vpc.id

  tags = merge(
    { "Name" = format("%s-Private_RT_DATA", var.name) },
    var.tags
  )
}

locals {
  data_lb_subids = concat(tolist(aws_subnet.private_sub_data.*.id), tolist(aws_subnet.private_sub_lb.*.id))
}

# //SUMAR LAS LISTAS DE LAS SUBNETS DATA Y LB
resource "aws_route_table_association" "private_sub_assoc_data_lb" {
  count          = length(local.data_lb_subids)
  route_table_id = aws_route_table.private_rt_data_lb.id
  subnet_id      = local.data_lb_subids[count.index]
}


################################################################################
# NETWORK ACLS
################################################################################

resource "aws_network_acl" "private_nacl_data" {
  vpc_id     = aws_vpc.vpc.id
  subnet_ids = aws_subnet.private_sub_data.*.id

  tags = merge(
    { "Name" = format("%s-Private_NACL_Data", var.name) },
    var.tags
  )
}

resource "aws_network_acl_rule" "private_nacl_inbound_data" {
  network_acl_id = aws_network_acl.private_nacl_data.id

  count       = length(var.nacl_inbound_data)
  egress      = var.nacl_inbound_data[count.index].egress_enable
  rule_number = var.nacl_inbound_data[count.index].rule_number
  protocol    = var.nacl_inbound_data[count.index].protocol
  rule_action = var.nacl_inbound_data[count.index].rule_action
  cidr_block  = var.nacl_inbound_data[count.index].cidr_block

}

resource "aws_network_acl_rule" "private_nacl_outbound_data" {
  network_acl_id = aws_network_acl.private_nacl_data.id

  count       = length(var.nacl_outbound_data)
  egress      = var.nacl_outbound_data[count.index].egress_enable
  rule_number = var.nacl_outbound_data[count.index].rule_number
  protocol    = var.nacl_outbound_data[count.index].protocol
  rule_action = var.nacl_outbound_data[count.index].rule_action
  cidr_block  = var.nacl_outbound_data[count.index].cidr_block
}

resource "aws_network_acl" "private_nacl_app" {
  vpc_id     = aws_vpc.vpc.id
  subnet_ids = aws_subnet.private_sub_app.*.id

  tags = merge(
    { "Name" = format("%s-Private_NACL_App", var.name) },
    var.tags
  )
}

resource "aws_network_acl_rule" "private_nacl_inbound_app" {
  network_acl_id = aws_network_acl.private_nacl_app.id

  count       = length(var.nacl_inbound_app)
  egress      = var.nacl_inbound_app[count.index].egress_enable
  rule_number = var.nacl_inbound_app[count.index].rule_number
  protocol    = var.nacl_inbound_app[count.index].protocol
  rule_action = var.nacl_inbound_app[count.index].rule_action
  cidr_block  = var.nacl_inbound_app[count.index].cidr_block
}

resource "aws_network_acl_rule" "private_nacl_outbound_app" {
  network_acl_id = aws_network_acl.private_nacl_app.id

  count       = length(var.nacl_outbound_app)
  egress      = var.nacl_outbound_app[count.index].egress_enable
  rule_number = var.nacl_outbound_app[count.index].rule_number
  protocol    = var.nacl_outbound_app[count.index].protocol
  rule_action = var.nacl_outbound_app[count.index].rule_action
  cidr_block  = var.nacl_outbound_app[count.index].cidr_block
}

resource "aws_network_acl" "public_nacl_shared" {
  vpc_id     = aws_vpc.vpc.id
  subnet_ids = aws_subnet.public_sub_shared.*.id

  tags = merge(
    { "Name" = format("%s-Public_NACL_Shared", var.name) },
    var.tags
  )
}

resource "aws_network_acl_rule" "public_nacl_inbound_shared" {
  network_acl_id = aws_network_acl.public_nacl_shared.id

  count       = length(var.nacl_inbound_shared)
  egress      = var.nacl_inbound_shared[count.index].egress_enable
  rule_number = var.nacl_inbound_shared[count.index].rule_number
  protocol    = var.nacl_inbound_shared[count.index].protocol
  rule_action = var.nacl_inbound_shared[count.index].rule_action
  cidr_block  = var.nacl_inbound_shared[count.index].cidr_block
}

resource "aws_network_acl_rule" "public_nacl_outbound_shared" {
  network_acl_id = aws_network_acl.public_nacl_shared.id

  count       = length(var.nacl_outbound_shared)
  egress      = var.nacl_outbound_shared[count.index].egress_enable
  rule_number = var.nacl_outbound_shared[count.index].rule_number
  protocol    = var.nacl_outbound_shared[count.index].protocol
  rule_action = var.nacl_outbound_shared[count.index].rule_action
  cidr_block  = var.nacl_outbound_shared[count.index].cidr_block
}

resource "aws_network_acl" "private_nacl_lb" {
  vpc_id     = aws_vpc.vpc.id
  subnet_ids = aws_subnet.private_sub_lb.*.id

  tags = merge(
    { "Name" = format("%s-Private_NACL_Lb", var.name) },
    var.tags
  )
}

resource "aws_network_acl_rule" "private_nacl_inbound_lb" {
  network_acl_id = aws_network_acl.private_nacl_lb.id

  count       = length(var.nacl_inbound_lb)
  egress      = var.nacl_inbound_lb[count.index].egress_enable
  rule_number = var.nacl_inbound_lb[count.index].rule_number
  protocol    = var.nacl_inbound_lb[count.index].protocol
  rule_action = var.nacl_inbound_lb[count.index].rule_action
  cidr_block  = var.nacl_inbound_lb[count.index].cidr_block
}

resource "aws_network_acl_rule" "private_nacl_outbound_lb" {
  network_acl_id = aws_network_acl.private_nacl_lb.id

  count       = length(var.nacl_outbound_lb)
  egress      = var.nacl_outbound_lb[count.index].egress_enable
  rule_number = var.nacl_outbound_lb[count.index].rule_number
  protocol    = var.nacl_outbound_lb[count.index].protocol
  rule_action = var.nacl_outbound_lb[count.index].rule_action
  cidr_block  = var.nacl_outbound_lb[count.index].cidr_block
}

################################################################################
# Route 53 association
################################################################################
#data "aws_route53_zone" "globant" {
#  name         = "XXXXXXX"
#  private_zone = true
#}
#resource "aws_route53_zone_association" "secondary" {
#  zone_id = data.aws_route53_zone.globant.zone_id
#  vpc_id  = aws_vpc.vpc.id
#}

