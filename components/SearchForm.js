import { View, Text, StyleSheet,TextInput, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { Color, Border, FontFamily, FontSize } from "../constants/GlobalStyles";
import Button from './Button'
import Input from './Input'

const SearchForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);  };

  return (
    // <SafeAreaView style={styles.container}>

      <View style={styles.container}>
        <Text style={styles.input_text}>From</Text>
        {/* <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={(text) => setName(text)}
        /> */}
        <Input
          placeholder={"Earth Station 21"}
          value={name}
          onChangeText={(text) => setName(text)}
          width={314}
        />
        <Text style={styles.input_text}>To</Text>
        <Input
          placeholder={"Email"}
          value={email}
          onChangeText={(text) => setEmail(text)}
          width={314}
        />
        <View style={styles.row}>
          <View style={styles.inputWrap}>
            <Text style={styles.input_text}>Date</Text>
            <Input
              placeholder={"12/08/2157"}
              value={message}
              onChangeText={(text) => setMessage(text)}
              width={145}
            />
          </View>
          <View style={styles.inputWrap}>
            <Text style={styles.input_text}>Mode</Text>
            <Input
              placeholder={"Teleporter"}
              value={message}
              onChangeText={(text) => setMessage(text)}
              width={145}
            />
          </View>
          
        </View>
        
        <View style={styles.lineView} />

        <Button title="Submit" 
          onPress={handleSubmit}
          text={"Search Flight"}
          bgcolor={Color.deepskyblue}
          textcolor={Color.white}
        />
        <Button title="Submit" 
          onPress={handleSubmit}
          text={"Compair Places"}
          bgcolor={Color.white}
          textcolor={Color.deepskyblue}
        />
      </View>
    // </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
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
    paddingLeft: 10
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  textarea: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    height: 100,
    textAlignVertical: 'top',
  },
  lineView: {
    borderStyle: "solid",
    borderColor: "rgba(236, 228, 242, 0.16)",
    borderTopWidth: 2,
    flex: 1,
    width: "100%",
    height: 2,
    marginTop: 70,
    // marginBottom: 18
  },
  row: {
    flex: 1,
    flexDirection: "row",
    alignContent: 'center',
  },
  inputWrap: {
    flex: 1,
    alignContent: 'center',
    
    // borderColor: "#cccccc",
    // borderBottomWidth: 1,
    // marginBottom: 5
  },
});

export default SearchForm;