import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Color, Border, FontFamily, FontSize } from "../constants/GlobalStyles";

import { navigationRef } from './RootNavigation';

import TabBar from '../navigation/tabBar';

import Home from '../screens/Home';
import Home2 from '../screens/Home2'
import Login from '../screens/SignIn';
import SeatBooking from '../screens/SeatBooking';
// import Account from '../screens/demos/Account';
import Location from '../screens/Destination';
import Bookmarks from '../screens/TravelGuide';
// import Settings from '../screens/demo';
import Register from "../screens/SignUp"
import Search from '../screens/Search';
import TravelGuide from '../screens/TravelGuide';
import Destinations from '../screens/Destination';
import MyBookings from '../screens/MyBooking';

const Stack = createStackNavigator();

function Main(){
    const Tab = createBottomTabNavigator();

    return (<Tab.Navigator
        initialRouteName="home" 
        tabBar={props => <TabBar {...props} />}
        // sceneContainerStyle={{ backgroundColor: Color.deepskyblue }}
        screenOptions={{headerShown: false}}
    >
        <Tab.Screen name="home" component={Home} />
        <Tab.Screen name="places" component={Destinations} />
        <Tab.Screen name="bookings" component={MyBookings} />
        {/* <Tab.Screen name="bookings" component={TravelGuide} /> */}
        <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>);
};

export default () => <NavigationContainer ref={navigationRef}>
    <Stack.Navigator 
        initialRouteName="SignIn"
        screenOptions={{
            headerShown: false, // Hide the header bar for all screens
        }}
    >
        <Stack.Screen name="SignIn" component={Login}  />
        <Stack.Screen name="main" component={Main} /> 
        <Stack.Screen name="SignUp" component={Register} />
        <Stack.Screen name="TravelGuide" component={TravelGuide} />
        <Stack.Screen name="Seatbookings" component={SeatBooking} />
        {/* <Stack.Screen name="" */}
    </Stack.Navigator>
</NavigationContainer>;