$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features.Api/Get01.feature");
formatter.feature({
  "name": "ApiCheck",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@get01"
    }
  ]
});
formatter.scenario({
  "name": "Positive",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@get01"
    }
  ]
});
formatter.step({
  "name": "User is on Api uri",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Accept type is \"application/JSON\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "HTTP Status Code should be 200",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Response format should be \"application/JSON\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});