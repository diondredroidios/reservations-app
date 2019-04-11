
import NewReservationScreen from "../Screens/NewReservationScreen";
import { createStackNavigator } from 'react-navigation';
import ReservationsScreen from "../Screens/ReservationsScreen";

export const mainScreens = {
    Reservations: "Reservations",
    NewReservation: "NewReservation"
}

export const mainNavigator = createStackNavigator({
    [mainScreens.Reservations]: { screen: ReservationsScreen },
    [mainScreens.NewReservation]: { screen: NewReservationScreen }
}) 