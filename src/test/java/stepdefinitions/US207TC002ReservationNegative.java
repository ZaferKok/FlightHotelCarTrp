package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import utilities.AllPage;

public class US207TC002ReservationNegative {
    AllPage allPage = new AllPage();

    @Given("click on Contact Email and type invalid email {string}")
    public void click_on_Contact_Email_and_type_invalid_email(String string) {
       allPage.reservationPage().email.sendKeys(string);
    }
    @Then("verify the new message")
    public void verify_the_new_message() throws InterruptedException {
        Thread.sleep(3000);
        String test = allPage.reservationPage().negativeTest.getText();
        Assert.assertEquals(test,"Please provide correct email address");
        //Assert.assertEquals(allPage.reservationPage().negativeTest.getText(),"ContactEmail");

    }

}
