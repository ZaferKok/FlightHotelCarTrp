package pages;


import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class UserPage {
    public UserPage(){
        PageFactory.initElements(Driver.getDriver(),this);
    }
    @FindBy (xpath = "//span[contains(text(),'ListOfUsers')]")
    public WebElement userListText;
    @FindBy(xpath = "(//span[@class='title'])[3]")
    public WebElement  hotelManagementButton;
    @FindBy(xpath = "(//span[@class='title'])[3] ']")
    public WebElement roomReservat;
    @FindBy(xpath = "(//a[@href='/admin/HotelAdmin'])[1]")
    public WebElement hotelList;

}
