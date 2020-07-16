package utilities;


import pages.HomePage;
import pages.LoginPage;
import pages.RoomReservationPage;
import pages.UserPage;

public class AllPage {

    protected HomePage homePage;
    protected LoginPage loginPage;
    protected UserPage userPage;
    protected RoomReservationPage roomReservationPage;

    public RoomReservationPage roomReservationPage(){
        if(roomReservationPage == null){
            roomReservationPage = new RoomReservationPage();
        }return roomReservationPage;
    }

    public HomePage homePage(){
        if(homePage == null){
            homePage = new HomePage();
        }return homePage;
    }
    public LoginPage loginPage(){
        if(loginPage == null){
            loginPage = new LoginPage();
        }return loginPage;
    }
    public UserPage userPage(){
        if(userPage == null){
            userPage = new UserPage();
        }return userPage;
    }
}
