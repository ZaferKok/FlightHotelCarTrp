package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.apache.http.util.Asserts;
import org.junit.Assert;
import utilities.AllPage;

public class US206TC002CreateUserNegative {
    AllPage allPage = new AllPage();

    @Given("click on Username area and type invalid Username")
    public void click_on_Username_area_and_type_invalid_Username() {
        allPage.createUserPage().userName.sendKeys("");

    }
    @Then("verify the message {string}")
        public void verify_the_message(String string) throws InterruptedException {
        Thread.sleep(3000);
        Assert.assertEquals(allPage.createUserPage().NegativeTest.getText(),
                "You have some form errors. Please check below.");


        }

    }

