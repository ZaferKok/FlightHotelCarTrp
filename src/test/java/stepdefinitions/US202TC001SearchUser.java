package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import utilities.AllPage;

public class US202TC001SearchUser {
    AllPage allPage = new AllPage();
    @Given("Click on NameSurname checkbox and type {string}")
    public void click_on_NameSurname_checkbox_and_type(String string) {
        allPage.userPage().nameSurnameTextBox.sendKeys(string);
    }

    @Then("Verify that {string} user is displayed on the page")
    public void verify_that_user_is_displayed_on_the_page(String string) {
        Assert.assertEquals(string, allPage.userPage().nameVerification.getText());

    }
}
