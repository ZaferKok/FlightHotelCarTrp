package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import utilities.AllPage;
import utilities.Driver;

public class US204TC001SearchRoom {
    AllPage allPage = new AllPage();
    @Given("Click on Name text box on the room page and type valid name {string}")
    public void click_on_Name_text_box_on_the_room_page_and_type_valid_name(String string) {
        allPage.listOfHotelRoomPage().nameTextbox.sendKeys(string);
    }

    @Then("Verify that {string} room is displayed on the page")
    public void verify_that_room_is_displayed_on_the_page(String string) throws InterruptedException {
        Thread.sleep(3000);
        Assert.assertEquals(allPage.listOfHotelRoomPage().nameVerification.getText(), string);
    }
}
