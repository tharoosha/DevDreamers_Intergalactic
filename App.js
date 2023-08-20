import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from 'expo-font';

// import { View, Text, Pressable, TouchableOpacity } from "react-native";

import Home from "./screens/Home";
import Ticket from "./screens/Ticket";

import Search from "./screens/Search";

import Checkout from "./screens/Checkout";

import SearchResult from "./screens/SearchResults";



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

    // // <>
    //   <NavigationContainer>
    //     {hideSplashScreen ? (
    //       <Stack.Navigator 
    //         screenOptions={{ 
    //           headerShown: false 
    //         }}
    //         initialRouteName="Checkout"
    //       >

    //         <Stack.Screen
    //           name="Checkout"
    //           component={"Checkout"}
    //           options={{ headerShown: false }}
    //         />
    //         <Stack.Screen name="Home" component={Home} />
    //       </Stack.Navigator>
    //     ) : null}
    //   </NavigationContainer>
    // // </>

    <NavigationContainer >
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Ticket"
      >
        <Stack.Screen name="SearchResult" component={SearchResult} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

