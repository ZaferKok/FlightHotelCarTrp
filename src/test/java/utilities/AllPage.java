package utilities;


import pages.*;

public class AllPage {

    protected HomePage homePage;
    protected LoginPage loginPage;
    protected UserPage userPage;
    protected RoomReservationPage roomReservationPage;
    protected ListOfHotelsPage listOfHotelsPage;
    protected CreateUserPage createUserPage;
    protected ReservationPage reservationPage;

    protected ListOfHotelRoomPage listOfHotelRoomPage;
    protected CreateHotelRoomPage createHotelRoomPage;

    public CreateHotelRoomPage createHotelRoomPage(){
        if (createHotelRoomPage==null){
            createHotelRoomPage=new CreateHotelRoomPage();
        }return createHotelRoomPage;
    }

    public ListOfHotelRoomPage listOfHotelRoomPage(){
        if(listOfHotelRoomPage==null){
            listOfHotelRoomPage=new ListOfHotelRoomPage();
        }return listOfHotelRoomPage;
    }

    public CreateUserPage createUserPage(){
        if(createUserPage == null){
            createUserPage = new CreateUserPage();
        }
        return createUserPage;
    }

    public ReservationPage reservationPage(){
        if(reservationPage == null){
            reservationPage = new ReservationPage();
        }
        return reservationPage;
    }

    public ListOfHotelsPage listOfHotelsPage(){
        if(listOfHotelsPage == null){
            listOfHotelsPage = new ListOfHotelsPage();
        }return listOfHotelsPage;
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
    public UserPage userPage(){
        if(userPage == null){
            userPage = new UserPage();
        }return userPage;
    }
}
