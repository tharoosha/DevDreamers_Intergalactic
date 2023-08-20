import React, { useState } from "react";
import { useNavigation, KeyboardAvoidingView, Platform } from "@react-navigation/native";
import { StyleSheet, Image, ImageBackground, View, Text, SafeAreaView, Dimensions, ScrollView } from "react-native";
import { SearchForm, Button, HomeHeader, Invoice } from "../components";
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { Color, Border, FontFamily, FontSize } from "../constants/GlobalStyles";

const screenHeight = Dimensions.get('window').height;

const uri = require('..//assets/images/Shadow_Realm_resize.png');


const Checkout = () => {
  const [promoCode, setPromoCode] = useState('');

  const handleButtonPress = () => {
    console.log('Promo Code:', promoCode);
  };

  return (
    <View style={styles.container}>
      <Image style={[styles.backgroundImage, StyleSheet.absoluteFill]} source={(uri)} />
      <Invoice style={styles.invoice} promoCode={promoCode} setPromoCode={setPromoCode} />

      <View style={styles.button}>
        <Button
          title="proceed"
          text={"Proceed"}
          textcolor={'white'}
          bgcolor={'deepskyblue'}
          width={120}
          height={40}
          onPress={handleButtonPress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    padding: 20,
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
