import { View, Text,TouchableOpacity, TextInput,StyleSheet } from 'react-native'
import { Color, Border, FontFamily, FontSize } from "../constants/GlobalStyles";
import React, {useState} from 'react'

// const Button = ({ minWidth, fontSize, handlePress, ...props }) => {
const Input = ({placeholder, value, onChangeText, width, label, secureTextEntry, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  const placeholderTextColor = isFocused ? 'rgba(236, 228, 242, 1)' : 'rgba(141, 142, 153, 0.7)';

  return (
    <View>
        <Text style={styles.input_text}>{label}</Text>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor= {placeholderTextColor}
          width= {width}
          secureTextEntry= {secureTextEntry}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          borderColor = {placeholderTextColor}
      />
    </View>
   
    
  );
};

const styles = StyleSheet.create({
    input: {
        borderRadius: 44,
        backgroundColor: "#091522",
        borderStyle: "solid",
        // borderColor: {placeholderTextColor},
        borderWidth: 1,
        height: 44,
        fontFamily: FontSize.poppinsRegular,
        color: "#fff",
        paddingLeft: 17,
        marginTop:1,
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
        marginLeft: 7,
        marginVertical: "2%",
        paddingLeft: 10
      },
    });

export default Input;