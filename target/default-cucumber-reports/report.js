$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/FhcTrip/RoomSearch.feature");
formatter.feature({
  "name": "",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@SearchRoom"
    }
  ]
});
formatter.scenario({
  "name": "As a manager, I should be able to search room with invalid room data.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SearchRoom"
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
  "name": "Click on ContactNameSurname textbox and type valid name\t\"ELENI ILIAD\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SearchRoom.click_on_ContactNameSurname_textbox_and_type_valid_name(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on ContactPhone textbox and type valid phone number\t\"(306) 987-712\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SearchRoom.click_on_ContactPhone_textbox_and_type_valid_phone_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SearchRoom.click_on_Search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the message \"No data available in table\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.SearchRoom.verify_the_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});