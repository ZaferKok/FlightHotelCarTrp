package utilities;


import pages.*;

public class AllPage {


    protected HomePage homePage;
    protected LoginPage loginPage;
    protected UserPage userPage;
    protected RoomReservationPage roomReservationPage;
    protected CreateUserPage createUserPage;
    protected ReservationPage reservationPage;

    public ReservationPage reservationPage(){
        if(reservationPage == null){
            reservationPage = new ReservationPage();
        }return reservationPage;
    }

    public CreateUserPage createUserPage(){
        if(createUserPage == null){
            createUserPage = new CreateUserPage();
        }return createUserPage;
    }

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
    public UserPage userPage() {
            if (userPage == null) {
                userPage = new UserPage();
            }
            return userPage;
        }
    }

