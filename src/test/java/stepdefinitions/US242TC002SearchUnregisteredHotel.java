package stepdefinitions;

import io.cucumber.java.en.Then;
import org.junit.Assert;
import utilities.AllPage;

public class US242TC002SearchUnregisteredHotel {

    AllPage allPage = new AllPage();

    @Then("Verify the hotel the list is empty {string}")
    public void verify_the_hotel_the_list_is_empty(String string) {
        Assert.assertEquals(allPage.listOfHotelsPage().noDataMessage.getText(), string);
    }

}
