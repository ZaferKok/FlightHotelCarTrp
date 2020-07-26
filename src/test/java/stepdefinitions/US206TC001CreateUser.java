package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import utilities.AllPage;

public class US206TC001CreateUser {

    AllPage allPage = new AllPage();

    @Given("click on ADD USER")
    public void click_on_ADD_USER() {
        allPage.createUserPage().addUser.click();


    }

    @Given("click on Username area and type valid Username")
    public void click_on_Username_area_and_type_valid_Username() {
        allPage.createUserPage().userName.sendKeys("cihannuma");


    }

    @Given("click on Password area and type valid Password")
    public void click_on_Password_area_and_type_valid_Password() {
         allPage.createUserPage().password.sendKeys("cihanNUMA.1");

    }

    @Given("click on Email area and type valid email")
    public void click_on_Email_area_and_type_valid_email() {
        allPage.createUserPage().email.sendKeys("cihannuma@gmail.com");

    }

    @Given("click on Full Name area and type valid Full Name")
    public void click_on_Full_Name_area_and_type_valid_Full_Name() {
          allPage.createUserPage().fullName.sendKeys("cihan gocer");

    }

    @Given("click on Phone No area and type valid Phone No")
    public void click_on_Phone_No_area_and_type_valid_Phone_No() {
          allPage.createUserPage().phoneNo.sendKeys("0545 545 45 45");

    }

    @Given("click on Social Security Number area and type valid Social Security Number")
    public void click_on_Social_Security_Number_area_and_type_valid_Social_Security_Number() {
          allPage.createUserPage().SSNnumber.sendKeys("123456789");

    }

    @Given("click on Driving License area and type valid Driving License")
    public void click_on_Driving_License_area_and_type_valid_Driving_License() {
          allPage.createUserPage().drivingLicense.sendKeys("987654321");

    }

    @Given("click on Country area and select  valid Country")
    public void click_on_Country_area_and_select_valid_Country() {

           allPage.createUserPage().country.sendKeys("Greece");
    }

    @Given("click on State area and do not type any information")
    public void click_on_State_area_and_do_not_type_any_information() {
        allPage.createUserPage().state.click();

    }

    @Given("click on Address area and type valid Address")
    public void click_on_Address_area_and_type_valid_Address() {
         allPage.createUserPage().address.sendKeys("Valtinon 36");

    }

    @Given("click on Date of Birth area and type valid Date of Birth")
    public void click_on_Date_of_Birth_area_and_type_valid_Date_of_Birth() {

         allPage.createUserPage().birthDate.sendKeys("15/03/1983");
    }

    @Given("click on WorkingSector area and type valid WorkingSector")
    public void click_on_WorkingSector_area_and_type_valid_WorkingSector() {
         allPage.createUserPage().workingSector.sendKeys("special");

    }

    @Given("click on Role area and select valid Role")
    public void click_on_Role_area_and_select_valid_Role() {

          allPage.createUserPage().role.sendKeys("CustomerService");
    }

    @Given("click on Approved area and select Yes or No button")
    public void click_on_Approved_area_and_select_Yes_or_No_button() {
          allPage.createUserPage().approved.click();

    }

    @Given("click save button")
    public void click_save_button() {
         allPage.createUserPage().save.click();

    }

    @Then("verify the message")
    public void verify_the_message() throws InterruptedException {
        //Assert.assertEquals(allPage.createUserPage().successfullyWritten.getText(), "User was inserted successfully");
        //Assert.assertEquals(allPage.createUserPage().successfullyWritten.getText(),"User was inserted successfully");
        Thread.sleep(3000);
        String messagetext = allPage.createUserPage().successfullyWritten.getText();
        Assert.assertTrue(messagetext.equals("User was inserted successfully"));
    }
}
