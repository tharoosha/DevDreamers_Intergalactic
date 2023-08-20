import * as React from 'react';
import { Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Color, Border, FontFamily, FontSize } from "../constants/GlobalStyles";

import { navigationRef } from './RootNavigation';

import TabBar from '../navigation/tabBar'

import Home from '../screens/Home'
// import Home2 from '../screens/Home2'
import Login from '../screens/SignIn'
import SeatBooking from '../screens/SeatBooking'
// import Account from '../screens/demos/Account';
// import Location from '../screens/Destination';
// import Bookmarks from '../screens/TravelGuide';
// import Settings from '../screens/demo';
import Register from "../screens/SignUp"
import Search from '../screens/Search';
import TravelGuide from '../screens/TravelGuide';
import Destinations from '../screens/Destination';
import MyBookings from '../screens/MyBooking';
import Checkout from "../screens/Checkout";
import CustomHeader from '../components/header';
import { useNavigation } from '@react-navigation/native'

const Stack = createStackNavigator()

function Main() {
    // const navigation = useNavigation();

    const Tab = createBottomTabNavigator()

    return (<Tab.Navigator
        initialRouteName="home"
        tabBar={props => <TabBar {...props} />}
        // sceneContainerStyle={{ backgroundColor: Color.deepskyblue }}
        screenOptions={{ headerShown: false }}
    >
        <Tab.Screen name="home" component={Home} 
            options={{
                headerShown: true,
                title: "Home",
                headerLeft: () => <CustomHeader destination1={"places"} destination2={"bookings"} title={""} />,
                headerStyle: {
                    backgroundColor: 'rgba(0, 178, 255, 0.1)', // Change the header color to #00B2FF
                },
                // headerTransparent: true, 
            }}
        />
        <Tab.Screen name="places" component={Destinations} 
            options={{
                headerShown: true,
                title: "Places",
                headerLeft: () => <CustomHeader destination1={"places"} destination2={"bookings"} title={""} />,
                headerStyle: {
                    backgroundColor: 'rgba(0, 178, 255, 0.1)', // Change the header color to #00B2FF
                },
                // headerTransparent: true, 
            }}
        />
        <Tab.Screen name="bookings" component={MyBookings} 
            options={{
                headerShown: true,
                title: "Bookings",
                headerLeft: () => <CustomHeader destination1={"places"} destination2={"bookings"} title={""} />,
                headerStyle: {
                    backgroundColor: 'rgba(0, 178, 255, 0.1)', // Change the header color to #00B2FF
                },
                // headerTransparent: true, 
            }}
        />
        <Tab.Screen name="Search" component={SeatBooking} 
            options={{
                headerShown: true,
                title: "SeatBooking",
                headerLeft: () => <CustomHeader destination1={"places"} destination2={"bookings"} title={""} />,
                headerStyle: {
                    backgroundColor: 'rgba(0, 178, 255, 0.1)', // Change the header color to #00B2FF
                },
                // headerTransparent: true, 
        }}/>
    </Tab.Navigator>)
};

export default () => <NavigationContainer ref={navigationRef}>
    <Stack.Navigator 
        initialRouteName="SignIn"
        screenOptions={{
            headerShown: false, // Hide the header bar for all screens
        }}
    >
        <Stack.Screen name="SignIn" component={Login} />
        <Stack.Screen name="main" component={Main} /> 
        <Stack.Screen name="SignUp" component={Register} />
        <Stack.Screen name="TravelGuide" component={TravelGuide} />
        <Stack.Screen name="Seatbookings" component={SeatBooking} />
        <Stack.Screen name="Checkout" component={Checkout} />
    </Stack.Navigator>
</NavigationContainer>