$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/FhcTrip/US207TC002ReservationNegative.feature");
formatter.feature({
  "name": "Room reservation negative",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@ReservationNegative"
    }
  ]
});
formatter.scenario({
  "name": "As a manager, I should not be able to save a room reservation",
  "description": "            with entering invalid data into all boxes",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ReservationNegative"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.Login.user_is_on_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Log in link",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.Login.click_on_Log_in_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on user name text box and type it \"manager2\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.Login.click_on_user_name_text_box_and_type_it(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on password name text box and type it \"Man1ager2!\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.Login.click_on_password_name_text_box_and_type_it(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.Login.click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on System Management dropdown button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SearchRoom.click_on_System_Management_dropdown_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the room reservation button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SearchRoom.click_on_the_room_reservation_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on add room reservation",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US207TC001Reservation.click_on_add_room_reservation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on idUser and select valid item \"cihannuma\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US207TC001Reservation.click_on_idUser_and_select_valid_item(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on selectHotelRoom and select valid item \"MARIA\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US207TC001Reservation.click_on_selectHotelRoom_and_select_valid_item(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on price and type valid number \"500\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US207TC001Reservation.click_on_price_and_type_valid_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on dateStart and select valid item \"08/29/2020\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US207TC001Reservation.click_on_dateStart_and_select_valid_item(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on dateEnd and select valid item  \"09/05/2020\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US207TC001Reservation.click_on_dateEnd_and_select_valid_item(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on AdultAmount and type valid number \"2\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US207TC001Reservation.click_on_AdultAmount_and_type_valid_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on ChildrenAmount and type valid number \"1\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US207TC001Reservation.click_on_ChildrenAmount_and_type_valid_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on ContactNameSurname and type valid surname \"gocer\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US207TC001Reservation.click_on_ContactNameSurname_and_type_valid_surname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on ContactPhone and type valid phone number \"0545 545 45 45\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US207TC001Reservation.click_on_ContactPhone_and_type_valid_phone_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Contact Email and type invalid email \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US207TC002ReservationNegative.click_on_Contact_Email_and_type_invalid_email(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Notes and type valid information \"thank you\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US207TC001Reservation.click_on_Notes_and_type_valid_information(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Approved button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US207TC001Reservation.click_on_Approved_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on is paid button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US207TC001Reservation.click_on_is_paid_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on save button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US207TC001Reservation.click_on_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the new message",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US207TC002ReservationNegative.verify_the_new_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});