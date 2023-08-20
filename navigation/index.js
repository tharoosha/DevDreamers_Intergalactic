import * as React from 'react';
import { Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { NavigationContainer , useNavigation} from '@react-navigation/native';
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

const Stack = createStackNavigator()

function Main() {
    const Tab = createBottomTabNavigator()

    return (<Tab.Navigator
        initialRouteName="home"
        tabBar={props => <TabBar {...props} />}
        // sceneContainerStyle={{ backgroundColor: Color.deepskyblue }}
        screenOptions={{ headerShown: false }}
    >
        <Tab.Screen name="home" component={Home} />
        <Tab.Screen name="places" component={Destinations} />
        <Tab.Screen name="bookings" component={MyBookings} />
        <Tab.Screen name="Search" component={SeatBooking} />
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
        <Stack.Screen name="main" component={Main} options={{
            headerShown: true,
            title: "",
            headerRight: () => (
                <Button
                    onPress={() => {
                        // Define the action you want to perform when the button is pressed.
                        // For example, you can navigate to another screen.
                        // navigation.navigate('AnotherScreen');
                    }}
                    color="black" // Set the button text color
                    icon={
                        <Icon name="rocket" size={30} color="white" /> // Icon component from react-native-vector-icons
                    }
                    title=''
                />
            ),
            headerLeft: () => (
                <Button 
                    title=''
                />
            )
        }}/> 
        <Stack.Screen name="SignUp" component={Register} />
        <Stack.Screen name="TravelGuide" component={TravelGuide} />
        <Stack.Screen name="Seatbookings" component={SeatBooking} options={({ navigation }) => ({ // Use a function to access the navigation object
            headerShown: true,
            headerLeft: () => (
                <Button
                    title='Back'
                    onPress={() => {
                        navigation.navigate('Search');
                    }}
                />
            ),
        })}/>
        <Stack.Screen name="Checkout" component={Checkout} />
    </Stack.Navigator>
</NavigationContainer>