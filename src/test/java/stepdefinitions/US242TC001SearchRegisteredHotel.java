package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import utilities.AllPage;

public class US242TC001SearchRegisteredHotel {

    AllPage allPage = new AllPage();

    @Given("Click on Name text box and type hotel name {string}")
    public void click_on_Name_text_box_and_type_hotel_name(String string) {
        allPage.listOfHotelsPage().nameBoxForSearch.sendKeys(string);
    }

    @Given("Click on search button")
    public void click_on_search_button() {
        allPage.listOfHotelsPage().searchButtonHotel.click();
    }

    @Then("Verify the hotel name is correct {string}")
    public void verify_the_hotel_name_is_correct(String string) throws InterruptedException {
        Thread.sleep(3000);
        Assert.assertEquals(string, allPage.listOfHotelsPage().printData(1,3));
    }
}
