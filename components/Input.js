import { View, Text,TouchableOpacity, TextInput,StyleSheet } from 'react-native'
import { Color, Border, FontFamily, FontSize } from "../constants/GlobalStyles";
import React from 'react'

// const Button = ({ minWidth, fontSize, handlePress, ...props }) => {
const Input = ({placeholder, value, onChangeText, width, ...props }) => {

  return (
    <View>
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
    });

export default Input;