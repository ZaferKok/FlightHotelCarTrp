$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/FhcTrip/US205TC001SearchRoomValidData.feature");
formatter.feature({
  "name": "",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US205TC001"
    }
  ]
});
formatter.scenario({
  "name": "As a manager, I should be able to search room with valid room data.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US205TC001"
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
  "location": "stepdefinitions.US205TC002SearchRoomInvalidData.click_on_System_Management_dropdown_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the room reservation button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US205TC002SearchRoomInvalidData.click_on_the_room_reservation_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: Unable to locate an element with the xpath expression (//span[@class\u003d\u0027title\u0027])[3] \u0027] because of the following error:\nSyntaxError: Failed to execute \u0027evaluate\u0027 on \u0027Document\u0027: The string \u0027(//span[@class\u003d\u0027title\u0027])[3] \u0027]\u0027 is not a valid XPath expression.\n  (Session info: chrome\u003d84.0.4147.89)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027CIMBOM-PC\u0027, ip: \u0027192.168.42.14\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.89, chrome: {chromedriverVersion: 84.0.4147.30 (48b3e868b4cc0..., userDataDir: C:\\Users\\CIMBOM\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:50316}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: fea1be8ea12388df327777d833720e8b\n*** Element info: {Using\u003dxpath, value\u003d(//span[@class\u003d\u0027title\u0027])[3] \u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat stepdefinitions.US205TC002SearchRoomInvalidData.click_on_the_room_reservation_button(US205TC002SearchRoomInvalidData.java:19)\r\n\tat ✽.Click on the room reservation button(file:///C:/Users/CIMBOM/IdeaProjects/FHCTRP/src/test/resources/features/FhcTrip/US205TC001SearchRoomValidData.feature:10)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click on ContactNameSurname textbox and type valid name\t\"ELENI ILIADA\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US205TC001SearchRoomValidData.click_on_ContactNameSurname_textbox_and_type_valid_name(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on ContactPhone textbox and type valid phone number\t\"(306) 987-7121\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US205TC001SearchRoomValidData.click_on_ContactPhone_textbox_and_type_valid_phone_number(java.lang.String)"
});
formatter.result({
  "status": "skipped"
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
  "name": "Verify the message of mail  \"eleniiliada@gmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US205TC001SearchRoomValidData.verify_the_message_of_mail(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
});