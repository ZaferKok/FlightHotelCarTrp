package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.support.ui.Select;
import utilities.AllPage;

public class HotelCreation {


    AllPage allPage = new AllPage();

    @Given("Click on Click on Hotel List button")
    public void click_on_Click_on_Hotel_List_button() {
        allPage.userPage().hotelList.click();
    }

    @Given("Click on Add Hotel button")
    public void click_on_Add_Hotel_button() {
        allPage.listOfHotelsPage().addHotel.click();
    }

    @Given("Click on Code text box and type valid code {string}")
    public void click_on_Code_text_box_and_type_valid_code(String code) {
        allPage.listOfHotelsPage().codeHotel.sendKeys(code);
    }

    @Given("Click on Name text box and type valid name {string}")
    public void click_on_Name_text_box_and_type_valid_name(String name) {
        allPage.listOfHotelsPage().nameHotel.sendKeys(name);
    }

    @Given("Click on Address text box and type valid address {string}")
    public void click_on_Address_text_box_and_type_valid_address(String address) {
        allPage.listOfHotelsPage().addressHotel.sendKeys(address);
    }

    @Given("Click on Phone text box and type valid phone {string}")
    public void click_on_Phone_text_box_and_type_valid_phone(String phone) {
        allPage.listOfHotelsPage().phoneHotel.sendKeys(phone);
    }

    @Given("Click on Email text box and type valid email {string}")
    public void click_on_Email_text_box_and_type_valid_email(String email) {
        allPage.listOfHotelsPage().emailHotel.sendKeys(email);
    }

    @Given("Click on IDGroup text box and select group Hotel Type1")
    public void click_on_IDGroup_text_box_and_select_group_Hotel_Type1(String email) throws InterruptedException {
        Select select = new Select(allPage.listOfHotelsPage().groupOfHotelDropdown);
        select.selectByVisibleText("Hotel Type1");
        Thread.sleep(3000);
    }

    @Given("Click on Save button")
    public void click_on_Save_button() {
        allPage.listOfHotelsPage().saveHotel.click();
    }

    @Then("Verify the message is correct {string}")
    public void verify_the_message_is_correct(String message) {
        Assert.assertEquals(allPage.listOfHotelsPage().messageHotel.getText(), message);
    }
}


