import { View, Text, SafeAreaView, StyleSheet,ScrollView, Image, useWindowDimensions, TouchableOpacity } from 'react-native';
import React , {useState} from 'react';
import logo from '../assets/images/Logo.png';
import rectangle from '../assets/images/rec.png';
import rectangle_left from '../assets/images/rec_left.png';
import facial_recongition from "../assets/images/facial-recognition.png";
import finger_print from "../assets/images/FingerPrint.png";
import hand from "../assets/images/robotic-hand_1.png";
import bg from "../assets/images/Shadow_Realm_resize.png"
import { LinearGradient } from 'expo-linear-gradient';

import { useNavigation } from '@react-navigation/native';


import { Color, Border, FontFamily, FontSize } from "../constants/GlobalStyles";
import { CustomInput, Input, Button} from '../components';

const SignIn = () => {
  const {height} = useWindowDimensions();
  const [name, setName] = useState('');
  const [email, setEmail] =  useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation();

  const handleSubmit = () => {
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password); 
    //validate the use 

    navigation.navigate("Home")
  };

  const handleSignup = () => {
    navigation.navigate("SignIn")
  }


  return (
      <View style={styles.root}>
        <Image style={[styles.backgroundImage, StyleSheet.absoluteFill]} source={bg} />
        <LinearGradient
          colors={['rgba(4, 8, 19, 0.5)','#000']}
          style={styles.rectangleLineargradient}
        />
        <Image source={logo} style={[styles.logo, {height: height * 0.3,}]} resizeMode='contain'/>
        <Input placeholder={"name"}
          value={name}
          onChangeText={(text) => setName(text)}
          width={314}
          label={"Name"}
          secureTextEntry={false}/>
        <Input placeholder={"email"}
          value={email}
          onChangeText={(text) => setEmail(text)}
          width={314}
          label={"Email"}
          secureTextEntry={false}/>
        <Input placeholder={"password"}
          value={password}
          onChangeText={(text) => setPassword(text)}
          width={314}
          label={"Password"}
          secureTextEntry={true}/>
        <Button title="Submit" 
          onPress={handleSubmit}
          text={"Register"}
          bgcolor={Color.white}
          textcolor={Color.deepskyblue}
        />
        <View style={styles.redirect}>
          <Image source={rectangle_left} style={{width: "15%", height:"8%", marginHorizontal:"2%"}}/>
          <Text style={{ color: Color.white}}>or register with</Text>
          <Image source={rectangle} style={{width: "15%", height:"8%", marginHorizontal:"2%"}}/>
        </View>
        <View style={styles.redirect}>
          <TouchableOpacity style={{marginHorizontal:"2%"}}>
            <Image source={facial_recongition}/>
          </TouchableOpacity>
          <TouchableOpacity style={{top: "1%", marginHorizontal:"2%"}}>
            <Image source={finger_print}/>
          </TouchableOpacity>
          <TouchableOpacity style={{marginHorizontal:"2%"}}>
            <Image source={hand} />
          </TouchableOpacity>
        </View>
        <View style={styles.redirectButton}>
          <Text style={{ color: Color.white}}>Have an account ?</Text>
          <TouchableOpacity
            onPress={handleSignup}
          > 
            <Text style={styles.buttontext}> Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  root:{
    flex: 1,
    alignItems:"center",
    padding: "2%",
    backgroundColor: "rgba(58, 58, 66, 1)"
  },
  logo:{
    width:"70%",
    maxHeight: 130,
    maxWidth: 300,
    marginTop: 130,
    marginBottom: 50
  },
  redirectButton:{
    flexDirection: "row"
  },
  redirect:{
    flexDirection: "row",
    alignItems: "center",
    marginVertical: "3%"
  },
  buttontext:{
    color: Color.deepskyblue 
  },
  rectangleLineargradient: {
    top: 519,
    width: 468,
    height: 468,
    backgroundColor: "transparent",
    position: "absolute"
  }
})

export default SignIn;