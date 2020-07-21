@SearchRegisteredHotel
Feature:Hotel Search
  Scenario: As a manager, I search the hotel with registered data.
    Given User is on Home Page
    And Click on Log in link
    And Click on user name text box and type it "manager2"
    And Click on password name text box and type it "Man1ager2!"
    And Click login button
    And Click on Hotel Management Management button
    And Click on Click on Hotel List button
    And Click on Name text box and type hotel name "Bugshooter Hotel"
    And Click on search button
    Then Verify the hotel name is correct "Bugshooter Hotel"