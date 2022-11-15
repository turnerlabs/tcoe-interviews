# DevOps Challenge 1

## What you will be building

 Scenario is listed below
  
  We would like to create a new web server for an upcoming product we plan to launch next year. We expect to have a lot of traffic go to this new system, so please allocate a new cluster inside AWS for this product. Some of the requirements we expect to need for this product are listed below

  * We expect a lot of traffic, so allocating an ECS cluster would be ideal (classic or Fargate). EKS would work too. One or the other is fine.
  * We want to have a lot of the traffic cached so we don't have to go to origin all the time for every request, please allocate a CloudFront distribution in front to create cached responses.

  ### Additional Requirements

  * scripts must be defined in [terraform](https://www.terraform.io/)
  