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
import PaidCard from "../components/PaidCard";
import CardBox from "../components/CardBox";
import CustomButton from "../components/CustomButton";
import cardBoxData from "../DummyData/cardBoxData";


//const uri = "https://drive.google.com/file/d/18HintxbTmj9eBv5pLQezpN-b4ru3G--X/view?usp=drive_link" ;
const uri = '..//assets/images/Shadow_Realm_resize.png'
// import { LinearGradient } from "expo-linear-gradient";

const Tab1Rows = (
    <View>

     {cardBoxData[0].map((data, index) => (
        <CardBox
          dateofp={data.dateofp}
          price={data.price}
          airlines={data.airlines}
          dateoftravel={data.dateoftravel}
          from={data.from}
          time={data.time}
          to={data.to}
          numberofSeats={data.numberofSeats}
          buttonname={data.buttonname}
        />
      ))}

      {/* Add more rows here */}
    </View>
  );
  
  const Tab2Rows = (
    <View>
     {cardBoxData[1].map((data, index) => (
        <CardBox
          dateofp={data.dateofp}
          price={data.price}
          airlines={data.airlines}
          dateoftravel={data.dateoftravel}
          from={data.from}
          time={data.time}
          to={data.to}
          numberofSeats={data.numberofSeats}
          buttonname={data.buttonname}
        />
      ))}



      {/* Add more rows here */}
    </View>
  );

const MyBookings = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image style={[styles.backgroundImage, StyleSheet.absoluteFill]} source={require(uri)} />
      {/* <LinearGradient style={styles.rectangleLineargradient} locations={[0,1]} colors={['rgba(4, 8, 19, 0.89)','#000']} useAngle={true} angle={180} />; */}
      <LinearGradient
          colors={['rgba(4, 8, 19, 0.5)','#000']}
          style={styles.rectangleLineargradient}
        />

      <View contentContainerStyle= {{
          // flex: 1,
          // width: '100%',
          // height: '100%',
          // alignItems: 'center',
          // justifyContent: 'center',
      }}> 

      </View>

      <View contentContainerStyle= {{
          flex: 1,
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}> 
     <View style={styles.login }>
     <BlurView tint="default" intensity={15} style={styles.blurView2}> 
     <ScrollView>
        <PaidCard tab1Rows={Tab1Rows} tab2Rows={Tab2Rows} />
      </ScrollView>
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
    width: '100%',
    height: '100%',

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
    width: 342,
    height: 667,
    borderColor: 'rgba(0, 178, 255, 0.5)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 20,
    alignItems: 'center',
    overflow: "hidden",
    marginTop: 60, 

  },
  rectangleLineargradient: {
    top: 519,
    width: 468,
    height: 468,
    backgroundColor: "transparent",
    position: "absolute"
  },

  login2: {
    flex: 1,
    width: '100%', // Make the login2 container fit the screen width
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  blurView2: {
    flex: 1,
    width: '100%', // Make BlurView fit the screen width
    justifyContent: 'center',
    alignItems: 'center',

  },

}) 

export default MyBookings;
