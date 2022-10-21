# UI Challenge

In this challenge, your task is to test an Android for proper UI functionality. 

## Instructions

Create a fork in your account, perform the following tasks, and then submit a pull request back to this repository.

## What you will be building

* Provide at least two test cases that prove the request behavior works as intended
* Provide at least two test cases that prove the response behavior works as intended
* Provide at least one test case that proves the request behavior does not work as intended (there's a bug)
* Provide at least one test case that demonstrates boundary based testing
* Provide at least one negative test case

Your testing of the function should demonstrate your ability to analyze a system and understand it's intended behavior, and verify that it succeeds or fails to meet those expectations.

## The System Under Test

1. Change the page URL being used to http://uitestingplayground.com/
2. Write a test to validate that clicking on Business link in header navigates to the Business section by validating URL.
3. Feel free to add/modify/remove existing tests if needed.
4. Configure the script where anyone should be able to run all tests by executing npm test
Create a pull request to merge back to turnerlabs/tcoe-interviews (github.com)

# Appium project

**NOTE:** This project is for Webdriver V7 where the tests are written with `async`/`await` and TypeScript. If you need a boilerplate for sync mode then check the following:

The project runs Appium tests together with WebdriverIO for:

- iOS/Android Native Apps
- iOS/Android Hybrid Apps
- Android Chrome and iOS Safari browser ([check here](./README.md#automating-chrome-or-safari))

## Based on

This project is currently based on:

- **WebdriverIO:** `7.##.#`
- **Appium:** `1.22.#`

## Installation

1. Fork project
1. Running `npm install`
1. Installing Appium on a local machine [here](./docs/APPIUM.md)
1. Setting up Android and iOS on a local machine [here](./docs/ANDROID_IOS_SETUP.md)
1. Making demo app available. Create a `./apps` directory. Download the app files (.app / .apk) with version >= `0.4.0` [here](https://github.com/webdriverio/native-demo-app/releases). Move the files into the directory `apps`.
1. Running tests `npm run android.app` or `npm run android.app`
