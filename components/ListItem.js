import { View, Text, StyleSheet,TextInput, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { Color, Border, FontFamily, FontSize } from "../constants/GlobalStyles";
import {Button, Input, DateTime} from '../components'

const ListItem = () => {

  const handleSubmit = () => {
    console.log("clicked")
  };

  return (
    // <SafeAreaView style={styles.container}>

      <View style={styles.container}>
        <Input
          placeholder={"Earth Station 21"}
          value="text hehe"
          onChangeText={(text) => setName(text)}
          width={314}
          label={"From"}
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
});

export default ListItem;