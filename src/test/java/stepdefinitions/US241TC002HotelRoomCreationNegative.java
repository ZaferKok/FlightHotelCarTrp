package stepdefinitions;

import io.cucumber.java.en.Given;
import org.junit.Assert;
import utilities.AllPage;

public class US241TC002HotelRoomCreationNegative {
    AllPage allpage = new AllPage();
    @Given("Empty Mandatory box is red with warning message {string} and It does not save new Hotel Room")
    public void empty_Mandatory_box_is_red_with_warning_message_and_It_does_not_save_new_Hotel_Room(String string) throws InterruptedException {
        Thread.sleep(3000);
        Assert.assertEquals(allpage.createHotelRoomPage().successMessage.getText(),string);

    }
}
