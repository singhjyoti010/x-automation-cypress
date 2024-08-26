Feature: user authentication

Scenario: Successful user login
Given user is at landing page of X
And user clicks on signin button
When user enters <username/email> at email field
And user clicks Next button
Then another dialog shows up