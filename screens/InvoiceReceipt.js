import React from "react";
import { StyleSheet, Image, ImageBackground, View } from "react-native";

const uri = require('../assets/images/Shadow_Realm_resize.png');

const InvoiceReceipt = () => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.backgroundImage} source={uri}>
        {/* Single image in the middle */}
        <Image source={require('../assets/images/InvoiceReceipt.png')} style={styles.centeredImage} />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredImage: {
    width: 350, // Adjust width as needed
    height: 604, // Adjust height as needed
    resizeMode: 'contain',
  },
});

export default InvoiceReceipt;