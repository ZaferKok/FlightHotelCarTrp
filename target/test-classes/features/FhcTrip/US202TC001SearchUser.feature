@SearchUser

Feature: Add New User

  Scenario: As an user, I should be able to create a new user with entering valid data
    Given User is on Home Page
    And Click on Log in link
    And Click on user name text box and type it "manager2"
    And Click on password name text box and type it "Man1ager2!"
    And Click login button
    And Click on NameSurname checkbox and type "cihannuma"
    And Click on Search button
    Then Verify that "cihannuma" user is displayed on the page

