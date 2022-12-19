# Welcome to TCoE Interviews!

We have created a variety of Scenarios that we think are good ways to evaluate candidates technical skills during the interview process.

## Instructions

Create a fork in your account, perform one of the following scenarios, and then submit a pull request back to this repository turnerlabs/tcoe-interviews (github.com).
Once you start working on the coding challenge, you have to finish the challenge and raise the pull request within 4 hours.
Make sure that you have to submit a PR within 48 hours from the time of invitation to complete the coding exercise.
Feel free to reach out anytime if you have any questions.

## Scenarios

- [API Challenges](scenarios/apiplayground/README.md)
- [UI Challenges](./scenarios/uiplayground/README.md)
- [Android Challenges](./scenarios/androidplayground/README.md)
- [DevOps Challenges](./scenarios/devopsplayground/README.md)

Your testing of the provided scenarios should demonstrate your ability to analyze a system and understand it's intended behavior, and verify that it succeeds or fails to meet those expectations.

## DevOps Challenges

### Excercise 1

#### Pre-requisites

- [aws iam account](https://docs.aws.amazon.com/IAM/latest/UserGuide/getting-set-up.html)
- [aws-cli](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html) with [configuration and credential file settings](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html)
- [terraform](https://developer.hashicorp.com/terraform/tutorials/aws-get-started/install-cli)

#### Steps

1. Create the .env file with the EXEC_DIR variable value, in this case we are going to create first the infrastructure for an AWS centrilized remote backend, so the variable value should be "./devops/backend".

2. Execute the Makefile phony target "make create-project" to call the necessary terraform commands to deploy our backend (You can also use each phony target called inside create-backend for development and testing purposes).

3. Change the EXEC_DIR variable value in the .env file for "./devops/infra" and execute the Makefile phony target "make create-project" to call the necessary terraform commands to deploy our complete infrastructure stack.
