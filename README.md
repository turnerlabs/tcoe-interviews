# Welcome to TCoE Interviews!

We have created a variety of Scenarios that we think are good ways to evaluate candidates technical skills during the interview process.


## Instructions

Create a fork in your account, perform one of the following scenarios, and then submit a pull request back to this repository turnerlabs/tcoe-interviews (github.com). 
Once you start working on the coding challenge, you have to finish the challenge and raise the pull request within 4 hours. 
Make sure that you have to submit a PR within 48 hours from the time of invitation to complete the coding exercise. 
Feel free to reach out anytime if you have any questions.

## Scenarios

* [API Challenges](scenarios/apiplayground/README.md)
* [UI Challenges](./scenarios/uiplayground/README.md)
* [Android Challenges](./scenarios/androidplayground/README.md)
* [DevOps Challenges](./scenarios/devopsplayground/README.md)

Your testing of the provided scenarios should demonstrate your ability to analyze a system and understand it's intended behavior, and verify that it succeeds or fails to meet those expectations.

## Solution

### Overview
Coding model is the Page Object Model (POM)

Exercise was Exercise 2.

I set up my framework in the home directory so as not to delete the test data that exists in the fork.

I also used xpath for locators.

***
### Test cases
#### Test cases for the search function
1. Verify user can open search dialog
2. Verify new page contains search term in search result
3. Verify url contains search term

#### Test cases for Media page
1. Verify user can play and pause a video
2. Verify video playing corresponds to the video playing in the suggested video list
3. Verify user can scroll to the left and right of suggested videos
4. Verify user can play video from suggestions (I used fuzz logic for this so a random video is selected)

#### Test cases for Gallery page
1. Verify index of first video is 1.
2. Verify carousel work by clicking back control. Image index should be the max
3. Verify right button loads a different image


***
### Running e2e tests

The framework used is webdriverio

#### Set up

1. Checkout the branch

2. Run `yarn install` or `npm run install` from the project root directory to install all dependencies.

#### Run tests
The following code has been added to package.json and can be run from the project root directory.
* `npm run wdio` to run all tests in the e2e directory.

***
Thanks for the opportunity to participate in the code challenge.
