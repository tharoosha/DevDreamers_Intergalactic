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
import Booking from '../screens/SeatBooking';
// import Account from '../screens/demos/Account';
import Location from '../screens/Destination';
import Bookmarks from '../screens/TravelGuide';
// import Settings from '../screens/demo';
import Register from "../screens/SignUp"
import Search from '../screens/Search';

const Stack = createStackNavigator();

function Main(){
    const Tab = createBottomTabNavigator();

    return <Tab.Navigator
        initialRouteName="home" 
        tabBar={props => <TabBar {...props} />}
        sceneContainerStyle={{ backgroundColor: Color.deepskyblue }}
    >
        <Tab.Screen name="home" component={Home2} />
        <Tab.Screen name="places" component={Location} />
        <Tab.Screen name="bookings" component={Booking} />
        <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>;
}

export default () => <NavigationContainer ref={navigationRef}>
    <Stack.Navigator initialRouteName="login">
        <Stack.Screen name="SignIn" component={Login} options={{ headerShown: false }}  />
        <Stack.Screen name="main" component={Main} options={{ headerShown: false }} /> 
        <Stack.Screen name="SignUp" component={Register} options={{ headerShown: false }}  />
        {/* <Stack.Screen name="Home" component={Home} options={{headerShown: false}} /> */}
    </Stack.Navigator>
</NavigationContainer>;