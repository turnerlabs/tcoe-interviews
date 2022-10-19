Feature: Progress Bar

    Background:
        Given User opens "uitestingplayground" link
    @demo
    Scenario: 1: Progress bar percentage
        Given User selects "progress bar" header
        When User is displayed with "Progress Bar" browser title
        Then User selects start button
        And User waits until progress bar reaches "75%"
        And User selects stop button