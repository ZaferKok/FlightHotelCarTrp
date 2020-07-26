package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import utilities.AllPage;

public class US207TC001Reservation {
    AllPage allPage = new AllPage();


    @Given("Click on add room reservation")
    public void click_on_add_room_reservation() {
        allPage.reservationPage().addRoomPage.click();

    }

    @Given("Click on idUser and select valid item {string}")
    public void click_on_idUser_and_select_valid_item(String string) {
        allPage.reservationPage().idUserSelectUser.sendKeys(string);

    }

    @Given("click on selectHotelRoom and select valid item {string}")
    public void click_on_selectHotelRoom_and_select_valid_item(String string) {
        allPage.reservationPage().idUserSelectRoom.sendKeys(string);
    }

    @Given("click on price and type valid number {string}")
    public void click_on_price_and_type_valid_number(String string) {
         allPage.reservationPage().price.sendKeys(string);
    }

    @Given("click on dateStart and select valid item {string}")
    public void click_on_dateStart_and_select_valid_item(String string) {
        allPage.reservationPage().dateStart.sendKeys(string);
    }

    @Given("click on dateEnd and select valid item  {string}")
    public void click_on_dateEnd_and_select_valid_item(String string) {
        allPage.reservationPage().dateEnd.sendKeys(string);
    }

    @Given("click on AdultAmount and type valid number {string}")
    public void click_on_AdultAmount_and_type_valid_number(String string) {
        allPage.reservationPage().adultAmount.sendKeys(string);
    }

    @Given("click on ChildrenAmount and type valid number {string}")
    public void click_on_ChildrenAmount_and_type_valid_number(String string) {
        allPage.reservationPage().childrenAmount.sendKeys(string);
    }

    @Given("click on ContactNameSurname and type valid surname {string}")
    public void click_on_ContactNameSurname_and_type_valid_surname(String string) {
        allPage.reservationPage().surname.sendKeys(string);
    }

    @Given("click on ContactPhone and type valid phone number {string}")
    public void click_on_ContactPhone_and_type_valid_phone_number(String string) {
       allPage.reservationPage().phone.sendKeys(string);
    }

    @Given("click on Contact Email and type valid email {string}")
    public void click_on_Contact_Email_and_type_valid_email(String string) {
      allPage.reservationPage().email.sendKeys(string);
    }

    @Given("click on Notes and type valid information {string}")
    public void click_on_Notes_and_type_valid_information(String string) {
       allPage.reservationPage().notes.sendKeys(string);
    }

    @Given("click on Approved button")
    public void click_on_Approved_button() {
      allPage.reservationPage().isApproved.click();
    }

    @Given("click on is paid button")
    public void click_on_is_paid_button() {
      allPage.reservationPage().isPaid.click();
    }

    @Given("click on save button")
    public void click_on_save_button() {
      allPage.reservationPage().submitButton.click();
    }
    @Then("verify the succesfully message")
    public void verify_the_succesfully_message() {
        Assert.assertEquals(allPage.reservationPage().okButton.getText(),"");
    }

}
