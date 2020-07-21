$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/FhcTrip/SearchRegisteredHotel.feature");
formatter.feature({
  "name": "Hotel Search",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@SearchRegisteredHotel"
    }
  ]
});
formatter.scenario({
  "name": "As a manager, I search the hotel with registered data.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SearchRegisteredHotel"
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
  "name": "Click on Hotel Management Management button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SearchRoom.click_on_Hotel_Management_Management_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Click on Hotel List button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.HotelCreation.click_on_Click_on_Hotel_List_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Name text box and type hotel name \"Bugshooter Hotel\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SearchRegisteredHotel.click_on_Name_text_box_and_type_hotel_name(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SearchRegisteredHotel.click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the hotel name is correct \"Bugshooter Hotel\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.SearchRegisteredHotel.verify_the_hotel_name_is_correct(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});