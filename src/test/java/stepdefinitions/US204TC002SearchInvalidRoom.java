package stepdefinitions;

import io.cucumber.java.en.Then;
import org.junit.Assert;
import utilities.AllPage;

public class US204TC002SearchInvalidRoom {
    AllPage allPage = new AllPage();
    @Then("Verify that {string} message is displayed on the page")
    public void verify_that_message_is_displayed_on_the_page(String string) {
        Assert.assertEquals("No data available in table", allPage.listOfHotelRoomPage().errorMessage.getText());
    }
}
