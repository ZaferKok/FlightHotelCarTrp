@get01
Feature: ApiCheck
  Scenario: Positive
    Given User is on Api uri
    And Accept type is "application/JSON"
    Then HTTP Status Code should be 200
    And Response format should be "application/JSON"