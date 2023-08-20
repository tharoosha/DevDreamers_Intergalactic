import { View, Text,TouchableOpacity } from 'react-native'
import { Color, Border, FontFamily, FontSize } from "../constants/GlobalStyles";
import React from 'react'

// const Button = ({ minWidth, fontSize, handlePress, ...props }) => {
const Button = ({text, onPress, bgcolor, textcolor,height,width,fontSize, ...props }) => {

  return (
    <TouchableOpacity
      style={{
        backgroundColor: bgcolor,
        padding: 13,
        borderRadius: 44,
        height: height || 44,
        width: width || 312,
        justifyContent: 'center',  // Center content vertically
        alignItems: 'center',      // Center content horizontally
        marginBottom: 14}}
      onPress={onPress}
    >
      <Text
        style={{
          fontFamily: FontFamily.poppinsSemiBold,
          fontSize: FontSize.size_base || fontSize,
          lineHeight: 18,
          color: textcolor, 
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;