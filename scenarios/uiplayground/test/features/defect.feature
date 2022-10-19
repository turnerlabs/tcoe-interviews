Feature: defects

Background:
Given User opens "uitestingplayground" link

@demo
Scenario: 1: Browser title and URL validation
Given User selects "class attribute" header
When User is displayed with "Class Attribute" browser title
Then User is navigated to class attribute url

@demo
Scenario: 2: Progress bar text content
Given User selects "progress bar" header
When User is displayed with "Progress Bar" browser title
Then User is displayed with text content