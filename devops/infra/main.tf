

module "vpc" {
  source = "vpc/"
    environment = "${var.env}"
    vpc_cidr = var.vpc_cidr
    public_sub_1 = var.public_sub_1
    public_sub_2 = var.public_sub_2
    public_sub_3 = var.public_sub_3
    private_sub_1 = var.private_sub_1
    private_sub_2 = var.private_sub_2
    private_sub_3 = var.private_sub_3
}

module "eks" {
  source = "eks/"
    account_id = var.account_id
    environment = var.env
    vpc_cidr = var.vpc_cidr
    vpc_id = module.vpc.vpc_id
    public_sub_1_id = module.vpc.public_sub_1_id
    public_sub_2_id = module.vpc.public_sub_2_id
    public_sub_3_id = module.vpc.public_sub_3_id
    private_sub_1_id = module.vpc.private_sub_1_id
    private_sub_2_id = module.vpc.private_sub_2_id
    private_sub_3_id = module.vpc.private_sub_3_id
    acm_org_com = var.acm_org_com
    OIDC_PROVIDER = var.OIDC_PROVIDER
}
