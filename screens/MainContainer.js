import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Color, Border, FontFamily, FontSize } from "../constants/GlobalStyles";
import TabBar from '../navigation/tabBar';


// Screens
import HomeScreen from './Home';
import Places from './TravelGuide';
import Search from './Search';
import Bookings from "./SeatBooking"

//Screen names
const homeName = "Home";
const detailsName = "Places";
const settingsName = "Search";
const bookingsName = "Bookings"

const Tab = createBottomTabNavigator();



function MainContainer() {
  return (
      // <Tab.Navigator
      //   initialRouteName={homeName}
      //   screenOptions={({ route }) => ({
      //     tabBarIcon: ({ focused, color, size }) => {
      //       let iconName;
      //       let rn = route.name;

      //       if (rn === homeName) {
      //         iconName = focused ? 'home' : 'home-outline';

      //       } else if (rn === detailsName) {
      //         iconName = focused ? 'location' : 'location';

      //       } else if (rn === settingsName) {
      //         iconName = focused ? 'search' : 'search-outline';
      //       }
      //       else if (rn === bookingsName) {
      //           iconName = focused ? 'book' : 'book-outline';
      //       }

      //       // You can return any component that you like here!
      //       return <Ionicons name={iconName} size={size} color={color} />;
      //     },
      //   })}
      //   tabBarOptions={{
      //     activeTintColor: Color.deepskyblue,
      //     inactiveTintColor: 'grey',
      //     labelStyle: { paddingBottom: 1, fontSize: 10, },
      //     style: { padding:3, height: 20}
      //   }}>

      //   <Tab.Screen name={homeName} component={HomeScreen} />
      //   <Tab.Screen name={detailsName} component={Places} />
      //   <Tab.Screen name={settingsName} component={Search} />
      //   <Tab.Screen name={bookingsName} component={Bookings} />

      // </Tab.Navigator>
      <Tab.Navigator
        initialRouteName="login" 
        tabBar={props => <TabBar {...props} />}
        sceneContainerStyle={{ backgroundColor: '#fff' }}
    >
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={detailsName} component={Places} />
        <Tab.Screen name={settingsName} component={Search} />
        <Tab.Screen name={bookingsName} component={Bookings} />
      </Tab.Navigator>
  );
}

export default MainContainer;