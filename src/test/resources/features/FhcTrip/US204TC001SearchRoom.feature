@SearchRoomHotel
Feature:Hotel Search
  Scenario: As a manager, I search the room with registered data.
    Given User is on Home Page
    And Click on Log in link
    And Click on user name text box and type it "manager2"
    And Click on password name text box and type it "Man1ager2!"
    And Click login button
    And Click on Hotel Management Management button
    And Click on Hotel Rooms
    And Click on Name text box on the room page and type valid name "Ozcan"
    And Click on search button
    Then Verify that "Ozcan" room is displayed on the page