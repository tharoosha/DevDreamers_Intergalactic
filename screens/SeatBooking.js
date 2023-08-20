import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { Image,StyleSheet, ImageBackground, View, Text, SafeAreaView, Dimensions, ScrollView } from "react-native";
import { SearchForm } from "../components";
import { BlurView } from 'expo-blur';
import { Color, Border, FontFamily, FontSize } from "../constants/GlobalStyles";
// import LinearGradient from "react-native-linear-gradient";
import { LinearGradient } from 'expo-linear-gradient';
import Button from "../components/Button";


import SeatSetup from "../components/SeatSetup";
import Flexbox from "../components/Layout";


//const uri = "https://drive.google.com/file/d/18HintxbTmj9eBv5pLQezpN-b4ru3G--X/view?usp=drive_link" ;
const uri = '..//assets/images/Shadow_Realm_resize.png'
// import { LinearGradient } from "expo-linear-gradient";



const SeatBooking = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image style={[styles.backgroundImage, StyleSheet.absoluteFill]} source={require(uri)} />
      {/* <LinearGradient style={styles.rectangleLineargradient} locations={[0,1]} colors={['rgba(4, 8, 19, 0.89)','#000']} useAngle={true} angle={180} />; */}
      <LinearGradient
        // Background Linear Gradient
        colors={['rgba(4, 8, 19, 0.89)','#000']}
        style={styles.rectangleLineargradient}
      />

      <View contentContainerStyle= {{
          // flex: 1,
          // width: '100%',
          // height: '100%',
          // alignItems: 'center',
          // justifyContent: 'center',
      }}> 
        <View style={styles.flightDetails}>
          <BlurView tint="default" intensity={15} >
            <Flexbox />
          </BlurView>
        </View>

      </View>

      <View contentContainerStyle= {{
          flex: 1,
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}> 
        <View style={styles.login }>
          <BlurView tint="default" intensity={15} >
            <SeatSetup />
          </BlurView>


        </View>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',

  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  flightDetails: {
    width: 352,
    height: 150,
    borderColor: 'rgba(0, 178, 255, 0.5)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 20,
    alignItems: 'center',
    overflow: "hidden", 
    marginBottom: 10,
    marginTop: 60,
  },
  login: {
    width: 352,
    height: 367,
    borderColor: 'rgba(0, 178, 255, 0.5)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 20,
    alignItems: 'start',
    overflow: "hidden", 
  },
  rectangleLineargradient: {
    top: 519,
    width: 468,
    height: 468,
    backgroundColor: "transparent",
    position: "absolute"
  }

}) 

export default SeatBooking;
