Feature: Clas Attribute

Background:
Given User opens "uitestingplayground" link

@demo
Scenario: 1: Browser title and URL validation
Given User selects "class attribute" header
When User is displayed with "Class Attribute" browser title
Then User is navigated to "class attribute" url

@demo
Scenario: 2:Record primary button click and alert response
Given User selects "class attribute" header
And User is displayed with "primary" button
When User selects "primary" button
Then User is displayed with alert
Then User selects ok
@demo
Scenario: 3: Primary button after Alert
Given User selects "class attribute" header
And User is displayed with "primary" button
When User selects "primary" button
And User selects ok
Then User is displayed with "primary" button
