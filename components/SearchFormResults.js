import { View, Text, StyleSheet,TextInput, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { Color, Border, FontFamily, FontSize } from "../constants/GlobalStyles";
import {Button, Input, DateTime} from '.'

const SearchFormResults = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [mode, setMode] = useState('');

  const handleSubmit = () => {
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Date:', date);
    console.log('Mode',mode)  };

  return (

      <View style={styles.container}>
        <Input
          placeholder={"Earth Station 21"}
          value={name}
          onChangeText={(text) => setName(text)}
          width={314}
          label={"From"}
        />
        <Input
          placeholder={"Email"}
          value={email}
          onChangeText={(text) => setEmail(text)}
          width={314}
          label={"To"}
        />
        <View style={styles.row}>
          <View style={styles.inputWrap}>
            
            <DateTime />
          </View>
          <View style={styles.inputWrap}>
            <Input
              placeholder={"Teleporter"}
              value={mode}
              onChangeText={(text) => setMode(text)}
              width={145}
              label={"Mode"}
            />
          </View>
          
        </View>
        
        <View style={styles.lineView} />

        <Button title="Submit" 
          onPress={handleSubmit}
          text={"Search"}
          bgcolor={Color.deepskyblue}
          textcolor={Color.white}
        />
        {/* <Text styles={styles.plain}>Showing  Search Results</Text> */}
        
      </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 21,
    justifyContent: 'center',
  },
  lineView: {
    borderStyle: "solid",
    borderColor: "rgba(236, 228, 242, 0.16)",
    borderTopWidth: 2,
    flex: 1,
    width: "100%",
    height: 2,
    marginTop: 70,
  },
  row: {
    flex: 1,
    flexDirection: "row",
    alignContent: 'center',
  },
  inputWrap: {
    flex: 1,
    alignContent: 'center',
    marginLeft: 5
  },
  
  plain:{
    color:'white'
  }
});

export default SearchFormResults;