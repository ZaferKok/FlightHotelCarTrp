@HotelCreate
Feature:Hotel Creation
  Scenario: As a manager, I should save a hotel with entering valid data into all boxes.
    Given User is on Home Page
    And Click on Log in link
    And Click on user name text box and type it "manager2"
    And Click on password name text box and type it "Man1ager2!"
    And Click login button
    And Click on Hotel Management Management button
    And Click on Click on Hotel List button
    And Click on Add Hotel button
    And Click on Code text box and type valid code "3006"
    And Click on Name text box and type valid name "Bugshooter Hotel"
    And Click on Address text box and type valid address "3 Vasileos Georgiou A, Syntagma Square Str, Athina"
    And Click on Phone text box and type valid phone "21 0636 0000"
    And Click on Email text box and type valid email "bugshooterhotel@gmail.com"
    And Click on IDGroup text box and select group Hotel Type1
    And Click on Save button
    Then Verify the message is correct "Hotel was inserted successfully"
