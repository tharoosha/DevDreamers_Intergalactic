import { View, Text,TouchableOpacity, TextInput,StyleSheet } from 'react-native'
import { Color, Border, FontFamily, FontSize } from "../constants/GlobalStyles";
import React from 'react'

// const Button = ({ minWidth, fontSize, handlePress, ...props }) => {
const Input = ({placeholder, value, onChangeText, width, label, ...props }) => {

  return (
    <View>
        <Text style={styles.input_text}>{label}</Text>
        <TextInput
          style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#fff"
        width= {width}
    />
    </View>
   
    
  );
};

const styles = StyleSheet.create({
    input: {
        borderRadius: 44,
        backgroundColor: "#091522",
        borderStyle: "solid",
        borderColor: "#3a3a42",
        borderWidth: 1,
        height: 44,
        fontFamily: FontSize.poppinsRegular,
        color: "#fff",
        paddingLeft: 17,
        marginBottom: 5,
       
    },
    input_text:{
        fontSize: 12,
        lineHeight: 18,
        fontWeight: "700",
        fontFamily: "Poppins-Bold",
        color: "#fff",
        textAlign: "left",
        width: 80,
        height: 13,
        margin: 7,
        paddingLeft:5,
        marginBottom: 8
      },
    });

export default Input;