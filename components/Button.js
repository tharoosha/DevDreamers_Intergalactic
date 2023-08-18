import { View, Text,TouchableOpacity } from 'react-native'
import { Color, Border, FontFamily, FontSize } from "../constants/GlobalStyles";
import React from 'react'

// const Button = ({ minWidth, fontSize, handlePress, ...props }) => {
const Button = ({text, onPress, bgcolor, textcolor, ...props }) => {

  return (
    <TouchableOpacity
      style={{
        backgroundColor: bgcolor,
        // padding: 13,
        borderRadius: 44,
        height: 44,
        width: 312,
        marginBottom: 14}}
      onPress={onPress}
    >
      <Text
        style={{
          fontFamily: FontFamily.poppinsBold,
          top: 15,
          left: 95,
          position: "absolute",
          fontSize: FontSize.size_base, 
          lineHeight: 18,
          color: textcolor,
          textAlign: "left"
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;