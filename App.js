import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from 'expo-font';

// import { View, Text, Pressable, TouchableOpacity } from "react-native";

import Home from "./screens/Home";
// import Ticket from "./screens/Ticket";
import Search from "./screens/Search";

import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn"


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const Stack = createStackNavigator();

export default function App() {

  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);


  const [fontsLoaded, error] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("./assets/fonts/Poppins-ExtraBold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (

    // <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator 
            screenOptions={{ 
              headerShown: false 
            }}
            initialRouteName="SignUp"
          >

            <Stack.Screen
              name="Seat Booking"
              component={SeatBooking}
              options={{ headerShown: true }}
            />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="SignIn" component={SignIn} />

          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    // </>

    // <NavigationContainer >
    //   <Stack.Navigator
    //     screenOptions={{
    //       headerShown: false,
    //     }}
    //     initialRouteName="Home"
    //   >
    //     <Stack.Screen name="Home" component={Home} />
    //     <Stack.Screen name="Ticket" component={Ticket} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

