@US241TC002
Feature:
  Scenario:
    Given User is on Home Page
    And Click on Log in link
    And Click on user name text box and type it "manager2"
    And Click on password name text box and type it "Man1ager2!"
    And Click login button
    And Click on System Management dropdown button
    And Click on Hotel Rooms
    And Click on Add Hotel Room button
    And Choose "HILTON HOTEL" from IDHotel dropdown menu
    And Click on Code checkbox and enter the code number
    And Click on the Location checkbox and enter the location
    And Drag and drop to the Price checkbox
    And Choose the room type from Room Type Dropdown Menu
    And Click on the Max Adult Count and enter the number of person
    And Click on the Max Children Count and enter the number of person
    And Click on the checkbox of Approved
    And Click on save button
    And Empty Mandatory box is red with warning message "Required field must be filled" and It does not save new Hotel Room