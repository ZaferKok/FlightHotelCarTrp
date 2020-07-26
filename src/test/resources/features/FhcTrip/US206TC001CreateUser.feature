@CreateUser

Feature: Add New User

  Scenario: As an user, I should be able to create a new user with entering valid data
    Given User is on Home Page
    And Click on Log in link
    And Click on user name text box and type it "manager2"
    And Click on password name text box and type it "Man1ager2!"
    And Click login button
  And click on ADD USER
  And click on Username area and type valid Username
  And click on Password area and type valid Password
  And click on Email area and type valid email
  And click on Full Name area and type valid Full Name
  And click on Phone No area and type valid Phone No
  And click on Social Security Number area and type valid Social Security Number
  And click on Driving License area and type valid Driving License
  And click on Country area and select  valid Country
  And click on State area and do not type any information
  And click on Address area and type valid Address
  And click on Date of Birth area and type valid Date of Birth
  And click on WorkingSector area and type valid WorkingSector
  And click on Role area and select valid Role
  And click on Approved area and select Yes or No button
  And click save button
    Then verify the message