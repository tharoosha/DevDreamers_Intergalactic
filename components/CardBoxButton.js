import { View, Text,TouchableOpacity } from 'react-native'
import { Color, Border, FontFamily, FontSize } from "../constants/GlobalStyles";
import React from 'react'

// const Button = ({ minWidth, fontSize, handlePress, ...props }) => {
const CardBoxButton = ({text, onPress, bgcolor, textcolor, ...props }) => {

  return (
    <TouchableOpacity
      style={{
        backgroundColor: bgcolor,
        padding: 10,
        borderRadius: 44,
        height: 42,
        width: "100%",
        alignItems: "center",
        marginTop: "5%"}}
      onPress={onPress}
    >
      <Text
        style={{
          fontFamily: FontFamily.poppinsBold,
          fontSize: FontSize.size_base, 
          color: textcolor,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default CardBoxButton;