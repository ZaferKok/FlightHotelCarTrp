package stepdefinitions;

import io.cucumber.java.en.Given;
import org.junit.Assert;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;
import utilities.AllPage;
import utilities.Driver;

public class US241TC001HotelRoomCreation {
    AllPage allPage=new AllPage();
    @Given("Click on Hotel Management")
    public void click_on_Hotel_Management() {
        allPage.userPage().hotelManagementButton.click();

    }

    @Given("Click on Hotel Rooms")
    public void click_on_Hotel_Rooms() {
        allPage.userPage().hotelRoom.click();
    }

    @Given("Click on Add Hotel Room button")
    public void click_on_Add_Hotel_Room_button() {

        allPage.listOfHotelRoomPage().addHotelRoom.click();
    }

    @Given("Choose {string} from IDHotel dropdown menu")
    public void choose_from_IDHotel_dropdown_menu(String string) {
        Select select=new Select(allPage.createHotelRoomPage().IDHotel);
        select.selectByIndex(1);

    }

    @Given("Click on Code checkbox and enter the code number")
    public void click_on_Code_checkbox_and_enter_the_code_number() {
        allPage.createHotelRoomPage().Code.sendKeys("315");
    }

    @Given("Click on the Name checkbox and enter the name")
    public void click_on_the_Name_checkbox_and_enter_the_name() {
        allPage.createHotelRoomPage().Name.sendKeys("Ozcan");

    }

    @Given("Click on the Location checkbox and enter the location")
    public void click_on_the_Location_checkbox_and_enter_the_location() {
        allPage.createHotelRoomPage().Location.sendKeys("Texas");

    }

    @Given("Drag and drop to the Price checkbox")
    public void drag_and_drop_to_the_Price_checkbox() {
        Actions actions=new Actions(Driver.getDriver());
        actions.dragAndDrop(allPage.createHotelRoomPage().threehundredPrice,allPage.createHotelRoomPage().Price).perform();
    }

    @Given("Choose the room type from Room Type Dropdown Menu")
    public void choose_the_room_type_from_Room_Type_Dropdown_Menu() {
        Select select =new Select(allPage.createHotelRoomPage().RoomType);
        select.selectByIndex(6);
    }

    @Given("Click on the Max Adult Count and enter the number of person")
    public void click_on_the_Max_Adult_Count_and_enter_the_number_of_person() {
        allPage.createHotelRoomPage().MaxAdultCount.sendKeys("2");
    }

    @Given("Click on the Max Children Count and enter the number of person")
    public void click_on_the_Max_Children_Count_and_enter_the_number_of_person() {
        allPage.createHotelRoomPage().MaxChildCount.sendKeys("2");
    }

    @Given("Click on the checkbox of Approved")
    public void click_on_the_checkbox_of_Approved() {
        allPage.createHotelRoomPage().IsAvailable.click();

    }

    @Given("Click on save button")
    public void click_on_save_button() {
    allPage.createHotelRoomPage().btnSubmit.click();
    }

    @Given("{string} text is on the display")
    public void text_is_on_the_display(String string) throws InterruptedException {
        Thread.sleep(3000);
   Assert.assertEquals(string,allPage.createHotelRoomPage().successMessage.getText());
    }

}
