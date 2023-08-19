import { View, Text, TextInput, StyleSheet} from 'react-native'
import React from 'react'
import Input from './Input'

const customInput = () => {
  

  return (
    <View style={styles.container}>
      <Input placeholder={"Email"}
          value={email}
          onChangeText={(text) => setEmail(text)}
          width={314}
          label={"To"}
          />
      {/* <TextInput placeholder='name' style={styles.Input}/> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    
  },
  // Input:{
  //   borderRadius: 44,
  //   Color: "gba(97, 181, 255, 0.12)",
  //   borderStyle: "solid",
  //   borderColor: "#3a3a42", 
  //   borderWidth: 1,
  //   flex: 1,
  //   width: "100%",
  //   height: 4
  // }
})

export default customInput;