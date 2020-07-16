package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import utilities.AllPage;

public class SearchRoom {
    AllPage allPage = new AllPage();

    @Given("Click on System Management dropdown button")
    public void click_on_System_Management_dropdown_button() {
    allPage.userPage().hotelManagementButton.click();

    }

    @Given("Click on the room reservation button")
    public void click_on_the_room_reservation_button() {
    allPage.userPage().roomReservat.click();
    }

    @Given("Click on ContactNameSurname textbox and type valid name	{string}")
    public void click_on_ContactNameSurname_textbox_and_type_valid_name(String string) {
    allPage.roomReservationPage().contactNameSname.sendKeys(string);
    }

    @Given("Click on ContactPhone textbox and type valid phone number	{string}")
    public void click_on_ContactPhone_textbox_and_type_valid_phone_number(String string) {
    allPage.roomReservationPage().contactPhone.sendKeys(string);
    }

    @Given("Click on Search button")
    public void click_on_Search_button() {
    allPage.roomReservationPage().searchButton.click();
    }

    @Then("Verify the message {string}")
    public void verify_the_message(String string) {
        Assert.assertEquals(allPage.roomReservationPage().noRecordMessage.getText(), "No data available in table");
    }

}
