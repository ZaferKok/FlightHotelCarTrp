$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/FhcTrip/US202TC001SearchUser.feature");
formatter.feature({
  "name": "Add New User",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@SearchUser"
    }
  ]
});
formatter.scenario({
  "name": "As an user, I should be able to create a new user with entering valid data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SearchUser"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.Login.user_is_on_Home_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on Log in link",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.Login.click_on_Log_in_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on user name text box and type it \"manager2\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.Login.click_on_user_name_text_box_and_type_it(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on password name text box and type it \"Man1ager2!\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.Login.click_on_password_name_text_box_and_type_it(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.Login.click_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on NameSurname checkbox and type \"cihannuma\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Click on Search button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US205TC002SearchRoomInvalidData.click_on_Search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify that \"cihannuma\" user is displayed on the page",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "skipped"
});
});