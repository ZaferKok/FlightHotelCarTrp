$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/FhcTrip/US206TC002CreateUserNegative.feature");
formatter.feature({
  "name": "Add New User Negative",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@CreateUserNegative"
    }
  ]
});
formatter.scenario({
  "name": "As an user, I should be able to create a new user with entering valid data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@CreateUserNegative"
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
  "name": "click on ADD USER",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US206TC001CreateUser.click_on_ADD_USER()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Username area and type invalid Username",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US206TC002CreateUserNegative.click_on_Username_area_and_type_invalid_Username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Password area and type valid Password",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US206TC001CreateUser.click_on_Password_area_and_type_valid_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Email area and type valid email",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US206TC001CreateUser.click_on_Email_area_and_type_valid_email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Full Name area and type valid Full Name",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US206TC001CreateUser.click_on_Full_Name_area_and_type_valid_Full_Name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Phone No area and type valid Phone No",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US206TC001CreateUser.click_on_Phone_No_area_and_type_valid_Phone_No()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Social Security Number area and type valid Social Security Number",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US206TC001CreateUser.click_on_Social_Security_Number_area_and_type_valid_Social_Security_Number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Driving License area and type valid Driving License",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US206TC001CreateUser.click_on_Driving_License_area_and_type_valid_Driving_License()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Country area and select  valid Country",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US206TC001CreateUser.click_on_Country_area_and_select_valid_Country()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on State area and do not type any information",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US206TC001CreateUser.click_on_State_area_and_do_not_type_any_information()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Address area and type valid Address",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US206TC001CreateUser.click_on_Address_area_and_type_valid_Address()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Date of Birth area and type valid Date of Birth",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US206TC001CreateUser.click_on_Date_of_Birth_area_and_type_valid_Date_of_Birth()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on WorkingSector area and type valid WorkingSector",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US206TC001CreateUser.click_on_WorkingSector_area_and_type_valid_WorkingSector()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Role area and select valid Role",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US206TC001CreateUser.click_on_Role_area_and_select_valid_Role()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Approved area and select Yes or No button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US206TC001CreateUser.click_on_Approved_area_and_select_Yes_or_No_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click save button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US206TC001CreateUser.click_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the message \"You have some form errors. Please check below.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US206TC002CreateUserNegative.verify_the_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});