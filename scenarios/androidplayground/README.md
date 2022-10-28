# Android Challenge

In this challenge, your task is to test an Android for proper UI functionality.

## What you will be building

* Provide at least two test cases that prove the request behavior works as intended
* Provide at least two test cases that prove the response behavior works as intended
* Provide at least one test case that proves the request behavior does not work as intended (there's a bug)
* Provide at least one test case that demonstrates boundary based testing
* Provide at least one negative test case

## The System Under Test

1. Change the page URL being used to http://uitestingplayground.com/
2. Write a test to validate that clicking on Business link in header navigates to the Business section by validating URL.
3. Feel free to add/modify/remove existing tests if needed.
4. Configure the script where anyone should be able to run all tests by executing npm test
Create a pull request to merge back to turnerlabs/tcoe-interviews (github.com)

# Appium project

**NOTE:** This project is for Webdriver V7 where the tests are written with `async`/`await` and TypeScript.

The project runs Appium tests together with WebdriverIO for:

- iOS/Android Native Apps
- iOS/Android Hybrid Apps
- Android Chrome and iOS Safari browser

## Based on

This project is currently based on:

- **WebdriverIO:** `7.##.#`
- **Appium:** `1.22.#`

## Installation

1. Fork project
1. Running `npm install`
1. Install Appium on a local machine - ()
1. Setting up Android and iOS on a local machine - ()
1. Making demo app available. Create a `./apps` directory. Download the app files (.app / .apk) with version >= `0.4.0` [here](https://github.com/webdriverio/native-demo-app/releases). Move the files into the directory `apps`.
1. Running tests `npm run android.app` or `npm run android.app`

# Installing Appium on a local machine

> There are several documents and instructions on the internet to install Appium on your local machine.
This is just one of the many ;-)

To setup the local test environment the following needs to be installed:

- [appium-doctor](https://github.com/appium/appium-doctor) with `npm install appium-doctor -g`
- [Appium](https://github.com/appium/appium) with `npm install appium -g`
- [appium-desktop](https://github.com/appium/appium-desktop). This one needs to be downloaded from [here](https://github.com/appium/appium-desktop/releases) and pick the latest stable releases
- [appium-inspector](https://github.com/appium/appium-inspector). Used to be part of appium-desktop, now needs to be installed separately. Can be downloaded from [here](https://github.com/appium/appium-inspector/releases) and pick the latest stable release

## Setup a local machine

### Appium Doctor
appium-doctor is used to diagnose and fix common Node, iOS and Android configuration issues before starting Appium. You only run it once to check your local machine. See an example output below.

```bash
appium-doctor

info AppiumDoctor Appium Doctor v.1.4.3
info AppiumDoctor ### Diagnostic starting ###
info AppiumDoctor  ✔ The Node.js binary was found at: /Users/wswebcreation/.nvm/versions/node/v8.9.1/bin/node
info AppiumDoctor  ✔ Node version is 8.9.1
info AppiumDoctor  ✔ Xcode is installed at: /Applications/Xcode.app/Contents/Developer
info AppiumDoctor  ✔ Xcode Command Line Tools are installed.
info AppiumDoctor  ✔ DevToolsSecurity is enabled.
info AppiumDoctor  ✔ The Authorization DB is set up properly.
info AppiumDoctor  ✔ Carthage was found at: /usr/local/bin/carthage
info AppiumDoctor  ✔ HOME is set to: /Users/wswebcreation
info AppiumDoctor  ✔ ANDROID_HOME is set to: /Users/wswebcreation/Library/Android/sdk
info AppiumDoctor  ✔ JAVA_HOME is set to: /Library/Java/JavaVirtualMachines/jdk1.8.0_152.jdk/Contents/Home
info AppiumDoctor  ✔ adb exists at: /Users/wswebcreation/Library/Android/sdk/platform-tools/adb
info AppiumDoctor  ✔ android exists at: /Users/wswebcreation/Library/Android/sdk/tools/android
info AppiumDoctor  ✔ emulator exists at: /Users/wswebcreation/Library/Android/sdk/tools/emulator
info AppiumDoctor  ✔ Bin directory of $JAVA_HOME is set
info AppiumDoctor ### Diagnostic completed, no fix needed. ###
info AppiumDoctor
info AppiumDoctor Everything looks good, bye!
info AppiumDoctor
```

When appium-doctor can, it will fix the problems for you, otherwise fix them manually. If you have some ENV issues make sure you have set them like this

```bash
export ANDROID_HOME=/Users/wswebcreation/Library/Android/sdk
export JAVA_HOME=$(/usr/libexec/java_home)
export PATH=$PATH:$ANDROID_HOME/platform-tools:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools/adb:$ANDROID_HOME/build-tools:$JAVA_HOME/bin
# This one is used for the `start.android.emulator` script
export emulator=/Users/wswebcreation/Library/Android/sdk/emulator
```

### Appium
If the npm install was successful you should be able to run this command `appium -v` and see a version like below.

```bash
➜  appium -v
1.9.0
➜
```

> Always make sure to check the Appium site if there is a new version. New Appium version are released mostly when Android/iOS release new versions.
Bugfixes can also be released. Just check the [changelog](https://github.com/appium/appium/blob/master/CHANGELOG.md) for a clear overview

## Appium desktop
Appium Desktop is an open source app which gives us the ability of the Appium automation server in a UI. It is a combination of a few Appium-related tools:

- A graphical interface for the Appium Server. You can set options, start/stop the server, see logs, etc...
- An Inspector (installed separately) that you can use to look at your app's elements, get basic information about them, and perform basic interactions with them. This is useful as a way to learn about Appium or as a way to learn about your app so you can write tests for it.

This tool is mainly used to view the UI-hierarchy and locate elements to be sure that all elements can be found.

See the [readme](https://github.com/appium/appium-desktop) about how to use the Appium Desktop.

When Appium Destkop is started make sure the _Automatic Server_-tab is enabled.

```js
{
  "app": "../Android-NativeDemoApp-0.2.0.apk",
  "platformName": "Android",
  "deviceName": "Pixel XL",
  "platformVersion": "7.1.1",
  "noReset": true,
  "automationName": "UiAutomator2"
}
```

And the following settings for iOS 


```js
{
  "platformName": "iOS",
  "appium:app": "../iOS-NativeDemoApp-0.2.0.zip",
  "appium:deviceName": "iPhone 6",
  "appium:platformVersion": "11.1",
  "appium:noReset": true
}
```
