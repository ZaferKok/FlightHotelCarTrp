package stepdefinitionsApi;

import static io.restassured.RestAssured.*;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

public class Get01 {
    @Given("User is on Api uri")
    public void user_is_on_Api_uri() {
        System.out.println("222");
    }

    @Given("Accept type is {string}")
    public void accept_type_is(String string) {

    }

    @Then("HTTP Status Code should be {int}")
    public void http_Status_Code_should_be(Integer int1) {

    }

    @Then("Response format should be {string}")
    public void response_format_should_be(String string) {

    }
}
