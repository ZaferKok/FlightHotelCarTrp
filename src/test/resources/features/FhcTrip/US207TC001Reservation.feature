@Reservation
Feature: Room reservation

  Scenario: As a manager, I should be able to save a room reservation with entering valid data into all boxes
    Given User is on Home Page
    And Click on Log in link
    And Click on user name text box and type it "manager2"
    And Click on password name text box and type it "Man1ager2!"
    And Click login button
    And Click on System Management dropdown button
    And Click on the room reservation button
    And Click on add room reservation
  And Click on idUser and select valid item "cihannuma"
  And click on selectHotelRoom and select valid item "MARIA"
  And click on price and type valid number "500"
  And click on dateStart and select valid item "08/29/2020"
  And click on dateEnd and select valid item  "09/05/2020"
  And click on AdultAmount and type valid number "2"
  And click on ChildrenAmount and type valid number "1"
  And click on ContactNameSurname and type valid surname "gocer"
    And click on ContactPhone and type valid phone number "0545 545 45 45"
  And click on Contact Email and type valid email "cihannuma@gmail.com"
  And click on Notes and type valid information "thank you"
  And click on Approved button
  And click on is paid button
  And click on save button
  Then verify the succesfully message
