# DevOps Challenge 2

## What you will be building

 Scenario is listed below
  
  We would like to create a new function we plan to launch next year for an existing product. We expect to have a small amount of sporadic traffic go to this new system, so please allocate some serverless functions inside AWS for this product. Some of the requirements we expect to need for this product are listed below

  * Please allocate 1 lambda function with a "hello world" script
  * Connect the function to an API gateway so it can recieve traffic publicly

  ### Additional Requirements

  * scripts must be defined in [terraform](https://www.terraform.io/)

## How the project is organized?

This project is organized into two folders. The first one, store a python code that will be used for lambda fucntion. The second one is related to Terraform scripts.

## Terraform

env folder is divided into three subfolders and the main idea behind it is to prepare these terraform scripts for multiple environments. Inside each subfolder has a 'variables.tf'file that stores all the variables to be used in the script execution. An example of a variable could be seen below:

```tfvars
bucket_name = "iac-state-demo"
```

> Note: In this example 'bucket_name' represent the S3 Bucket name. Its name should be unique because S3 is a Global resource.

'outputs.tf' define all the outputs that will be shown in the console after the terraform execution.

>Note: terraform aplly

'variable.tf' declare all the types and descriptions for any variable defined in 'variables.tf'.

```tf
variable "bucket_name" {
  type        = string
  description = "The name of the bucket."
}
```

To address the scope of this project four AWS resources were created:

- S3 Bucket (s3.tf)
- DynamoDB (dynamodb.tf)
- Lambda Function (lambda.tf)
- API Gateway (apigateway.tf)

## Commands

The idea behind S3 Bucket resource is to store 'tfstate'file. DynamoDB is created for storage the state lock.

To init Terraform there are two options. First one, don't use 'backend.tf' file, and consequently S3 and DynamoDB lost heir propose. The second one is oposite that means use 'backend.tf'.

### Using 'backend.tf'

Firt step: Initialize Terraform

```tf
terraform init
}
```

Second step: Plan the infrastructure to be create

```tf
terraform plan -var-file=env/dev/variables.tfvars -out=plan
```

>Note: -var-file means the path of 'variables.tfvars'.

>Note: -out means to save the plan in a file to be used in the apply phase.

Third step: Apply the infrastructure

```tf
terraform apply "plan"
}
```

Fourth step: Use output value 'apigateway_call_url' to test the challenge 2

```sh
curl https://9c0epwtxod.execute-api.us-east-1.amazonaws.com/dev/test
```

>Note: This URL must be changed every deploy.

Fifth step: Initialize 'backend.tf'

```tf
terraform init -backend-config "bucket=iac-state-demo" -backend-config "key=dev/terraform.tfstate" -backend-config "region=us-east-1" -backend-config "dynamodb_table=terraform-state"
}
```

>Note: Remember to use a unique value for the bucket.

>Note: Hit 'yes'to send 'tfstate' to S3 Bucket.

Sixth step: Destroy the infrastructure

```tf
terraform plan -var-file=env/dev/variables.tfvars -destroy -out=plan 
}
```

```tf
terraform apply "plan"
}
```

### Don't use 'backend.tf'

Firt step: initialize Terraform

```tf
terraform init
}
```

Second step: Plan the infrastructure to be created

```tf
terraform plan -var-file=env/dev/variables.tfvars -out=plan
```

>Note: -var-file means the path of 'variables.tfvars'.

>Note: -out means to save the plan in a file to be used in the apply phase.

Third step: Apply the infrastructure

```tf
terraform apply "plan"
}
```

Fourth step: Use output value 'apigateway_call_url' to test the challenge 2

```sh
curl https://9c0epwtxod.execute-api.us-east-1.amazonaws.com/dev/test
```

>Note: This URL must be changed every deploy.

Fifth step: Destroy the infrastructure


```tf
terraform plan -var-file=env/dev/variables.tfvars -destroy -out=plan 
}
```

```tf
terraform apply "plan"
}
```

### Deliverable

For this deliverable the 'backend.tf'is commented and 's3.tf' and dynamodb.tf are uncommented.