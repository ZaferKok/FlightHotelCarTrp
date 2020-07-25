package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import utilities.AllPage;

public class US205TC001SearchRoomValidData {
        AllPage allPage= new AllPage();
        @Given("Click on ContactNameSurname textbox and type valid name	{string}")
        public void click_on_ContactNameSurname_textbox_and_type_valid_name(String string) {
                allPage.roomReservationPage().contactNameSname.sendKeys(string);
        }

        @Given("Click on ContactPhone textbox and type valid phone number	{string}")
        public void click_on_ContactPhone_textbox_and_type_valid_phone_number(String string) {
                allPage.roomReservationPage().contactPhone.sendKeys(string);
        }

        @Then("Verify the message of mail  {string}")
        public void verify_the_message_of_mail(String string) {
                System.out.println(allPage.roomReservationPage().email.getText());
                System.out.println(string);

        }

}
