import React, { useState } from "react";
import { useNavigation, KeyboardAvoidingView, Platform } from "@react-navigation/native";
import { StyleSheet, Image, ImageBackground, View, Text, SafeAreaView, Dimensions, ScrollView } from "react-native";
import { SearchForm, Button, HomeHeader, Invoice } from "../components";
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { Color, Border, FontFamily, FontSize } from "../constants/GlobalStyles";

const screenHeight = Dimensions.get('window').height;

const uri = '..//assets/images/Shadow_Realm_resize.png'


const Checkout = () => {
  const [promoCode, setPromoCode] = useState('');

  const handleButtonPress = () => {
    console.log('Promo Code:', promoCode);
  };

  return (
    <View style={styles.container}>
          <Image style={[styles.backgroundImage, StyleSheet.absoluteFill]} source={require(uri)} />
          <LinearGradient style={styles.rectangleLineargradient} locations={[0, 1]} colors={['rgba(4, 8, 19, 0.89)', '#000']} useAngle={true} angle={180} />
          <LinearGradient
              // Background Linear Gradient
              colors={['rgba(4, 8, 19, 0.89)','#000']}
              style={styles.rectangleLineargradient}
            />
      <BlurView tint="default" intensity={15} >
      <Invoice style={styles.invoice} promoCode={promoCode} setPromoCode={setPromoCode} />

      <View style={styles.button}>
        <Button
          title="proceed"
          text={"Proceed"}
          textcolor={'rgba(255, 216, 230, 0.8)'}
          bgcolor={'rgba(144, 213, 236,0.9)'}
          width={120}
          height={44}
          onPress={handleButtonPress}
        />
      </View>
      </BlurView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    padding: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  invoice: {
    // ...
  },

  buttonText: {
    fontSize: 12,
    color: 'white',
  },
  button: {
    top: 30,
    alignItems: 'flex-end',
  },
});

export default Checkout;
