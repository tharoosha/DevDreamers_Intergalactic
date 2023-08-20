
import Navigation from '../Intergalactic/navigation';
import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer, DefaultTheme } from "@react-navigation/native"
import { useFonts } from 'expo-font'
import { Image } from "expo-image"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


// import { View, Text, Pressable, TouchableOpacity } from "react-native";


import Home from "./screens/Home"
import Search from "./screens/Search"
import SeatBooking from "./screens/SeatBooking"
import SignUp from "./screens/SignUp"
import SignIn from "./screens/SignIn"
import TravelGuide from "./screens/TravelGuide"
import Destinations from "./screens/Destination";
import MyBookings from "./screens/MyBooking";


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
}
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Places" component={Destinations} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Booking" component={SeatBooking} />
    </Tab.Navigator>
  );
};

export default function App() {

  const [hideSplashScreen, setHideSplashScreen] = React.useState(true)


  const [fontsLoaded, error] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("./assets/fonts/Poppins-ExtraBold.ttf"),
  })

  if (!fontsLoaded && !error) {
    return null
  }

  return (



    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="SignIn" screenOptions={{
    //             headerShown: false, // Hide the header bar for all screens
    //         }}>
    //     <Stack.Screen name="SignIn" component={SignIn} />
    //     <Stack.Screen name="Home" component={MainTabNavigator} screenOptions={{headerShown: false}}/>
    //     <Stack.Screen name="SignUp" component={SignUp} />
    //   </Stack.Navigator>
    //   {/* <MainTabNavigator /> */}
    // </NavigationContainer>
    <Navigation />
  );

}

