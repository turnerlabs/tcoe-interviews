# UI Challenge

In this challenge, your task is to test a website for proper UI functionality. 

## Instructions

Create a fork in your account, perform the following tasks, and then submit a pull request back to this repository [turnerlabs/tcoe-interviews (github.com)](https://github.com/turnerlabs/tcoe-interviews). Once you start working on the coding challenge, you have to finish the challenge and raise the pull request within 4 hours. Make sure that you have to submit a PR within 48 hours from the time of invitation to complete the coding exercise. Feel free to reach out anytime if you have any questions.

## What you will be building

 Baseurl -  http://uitestingplayground.com/ 

 Scenarios are listed below
  
  Positive cases:
  * Change the page URL being used to http://uitestingplayground.com/ and perform below tests based on the different components available on the website.
  * Create a test for below scenario
    Navigate to the url -http://uitestingplayground.com/progressbar and Create a test that clicks Start button and then waits for the progress bar to reach     75%. Then the test should click Stop. The less the differnce between value of the stopped progress bar and 75% the better your result.
    
  Bug cases: 
  * Create a test for below bug scenario
    Navigate to the url - http://uitestingplayground.com/ajax then click on the button(Data loaded with AJAX get request) more than **once** and verify the     button is not displayed more than once
  * Create a test for below bug scenario
    Navigate to the url - http://uitestingplayground.com/visibility and click on hide button then I exepect unhide button to show in place of hide button
  * Create a test for below bug scenario -the copy button doesn't work, write a test that proves it
    Navigate to the url -http://uitestingplayground.com/shadowdom
  * Write a test case that proves the click request behavior does not work as intended (there's a bug). You can intentionally write a negative test case       here (Pls use the base url and create a neagtive test case by finding the bug)
  
Your testing of the function should demonstrate your ability to analyze a system and understand it's intended behavior, and verify that it succeeds or fails to meet those expectations.

**Below needs clean up**
* Print button text when button element is using a dynamic ID
* Perform a test where an element may appaear on a page after heavy JavaScript processing on a client side.



