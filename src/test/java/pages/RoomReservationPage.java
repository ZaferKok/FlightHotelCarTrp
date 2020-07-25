package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class RoomReservationPage {
    public RoomReservationPage(){
        PageFactory.initElements(Driver.getDriver(),this);

    }
    @FindBy(name = "ContactNameSurname")
    public WebElement contactNameSname;
    @FindBy (name = "ContactPhone")
    public WebElement contactPhone;
    @FindBy (xpath = "//button[@class='btn btn-sm yellow filter-submit margin-bottom']")
    public WebElement searchButton;
    @FindBy (className = "dataTables_empty")
    public WebElement noRecordMessage;
    @FindBy(xpath = "//div//tbody//tr//td[11]")
    public WebElement email;
}

