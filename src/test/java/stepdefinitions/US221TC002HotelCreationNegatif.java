package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import utilities.AllPage;

public class US221TC002HotelCreationNegatif {

    AllPage allPage = new AllPage();

    @Given("Click on Email text box and type valid email")
    public void click_on_Email_text_box_and_type_valid_email() {
        // intensionally kept blank
    }

    @Then("Verify the email error message is correct {string}")
    public void verify_the_email_error_message_is_correct(String string) {
        Assert.assertEquals(allPage.listOfHotelsPage().invalidEmailHotel.getText(), string);
    }
}
