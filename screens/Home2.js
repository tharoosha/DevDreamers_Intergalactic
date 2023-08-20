import * as React from 'react';
import  {View,StyleSheet,Image,Text,TouchableOpacity,TextInput,FlatList} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import {CustomCard} from '../components/CustomCard';
import bg from "../assets/images/bgImage.jpeg";
import { Color, Border, FontFamily, FontSize } from "../constants/GlobalStyles";
import { LinearGradient } from 'expo-linear-gradient';

import spacecraft_2 from "../assets/images/spacecraft_2.png";
import spacecraft_3 from "../assets/images/spacecraft_3.png";


export const HomeScreen = () => {
  const nav = useNavigation();
  const DATA = [
    {
      id: 1,
      name: "AstroClipper",
      backgroundColor:"#6BC5E8",
      imagesrc:spacecraft_2,
      onPressHandler:()=>{
        nav.navigate("schedule",{title:"AstroClipper",imagesrc:bus,backgroundColor:"#6BC5E8"});
      }
    },
    {
      id: 2,
      name: "Skylon",
      backgroundColor:"#3A9EC2",
      imagesrc:spacecraft_3,
      onPressHandler:()=>{
        nav.navigate("schedule",{title:"Skylon",imagesrc:mrt,backgroundColor:"#3A9EC2"});
      }
    }
  ];
  const transportItem = ({item}) => {
    return (<CustomCard >
              <View style={{flexDirection:"row",overflow:"hidden",justifyContent:"space-between",padding:15,backgroundColor:item.backgroundColor,marginHorizontal:26,marginBottom:10,borderRadius:10}}>
                <View style={{justifyContent:"space-between"}}>
                  <Text style={{color:"#fff",fontWeight:"bold",fontSize:20}}>{item.name}</Text>
                  <TouchableOpacity style={{backgroundColor:"#fff",width:70,padding:5,borderRadius:6,marginTop:50}} onPress={item.onPressHandler}>
                    <Text style={{textAlign:"center",fontWeight:"bold"}}>Select</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <Image
                      style={{position:"absolute",right:-15,bottom:1, }}
                      source={item.imagesrc}>
                  </Image>
                </View>
              </View>
           </CustomCard>);
  };
  return (
        <View style={styles.container}>
            <Image style={[styles.backgroundImage, StyleSheet.absoluteFill]} source={bg} />
            <LinearGradient
                // Background Linear Gradient
                colors={['rgba(4, 8, 19, 0.89)','#000']}
                style={styles.rectangleLineargradient}
            />
            <View style={styles.topview}>
                <View style={styles.welcomecontainer}>
                    <Text style={styles.welcomemessage}>{"Hello,<br/>John Doe".split("<br/>").join("\n")}</Text>
                    <View style={styles.circle}>
                        <Image
                            source={require('../assets/images/avatar.jpeg')} // Replace with the path to your profile image
                            style={styles.profileImage}
                        />
                    </View>
                </View>
                <Text style={{color:"#fff"}}> Where will you go</Text>
                <View style={styles.searchbar}>
                    <Ionicons name="search-outline" size={25} style={{width:40,transform: [{rotateY: '180deg'}]}} />
                    <TextInput placeholder="Search" style={{marginLeft:15,opacity:1,fontSize:20}}></TextInput>
                </View>
            </View>
            <View style={styles.bottomview}>
                <View>
                    <CustomCard elevated={true} style={{backgroundColor:"#fff",marginHorizontal:24,marginTop:-40,padding:30,borderRadius:10,flexDirection:"row",justifyContent:"space-between"}}>
                        <View style={{alignItems:"center"}}>
                            <Text style={{fontWeight:"bold", marginBottom:10}}>Balance</Text>
                            <Text style={{fontWeight:"bold",fontSize:18}}>$ 18</Text>
                        </View>
                        <View style={{alignItems:"center"}}>
                            <Text style={{fontWeight:"bold", marginBottom:10}}>Rewards</Text>
                            <Text style={{fontWeight:"bold",fontSize:18}}>$ 10.25</Text>
                        </View>
                        <View style={{alignItems:"center"}}>
                            <Text style={{fontWeight:"bold", marginBottom:10}}>Total Trips</Text>
                            <Text style={{fontWeight:"bold",fontSize:18}}>189</Text>
                        </View>
                    </CustomCard>
                    <Text style={{marginHorizontal:26,marginVertical:20,fontWeight:"bold",fontSize:20, color:Color.white}}>Choose your Transport</Text>
                    <View>
                        <FlatList
                        data={DATA}
                        renderItem={transportItem}
                        keyExtractor={(item) => item.id}
                        />
                    </View>
                </View>
            </View>
        </View>
        )
};

const styles = StyleSheet.create({
  topview:{
    marginTop:60,
    marginHorizontal:24,
    // backgroundColor:"#6BC5E8",
    flex:1,
    justifyContent:"space-between"
  },
  welcomemessage:{
    color:"#fff",
    fontSize:35,
    fontWeight:"bold"
  },
  searchbar:{
    flexDirection:"row",
    backgroundColor:"#fff",
    alignItems:"center",
    width:"100%",
    height:40,
    borderRadius:10,
    marginBottom:65
  },
  circle:{
    borderRadius:25,
    height:50,
    width:50,
    backgroundColor:"#fff"
  },
  welcomecontainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },
  bottomview:{
    flex:2,
    // backgroundColor:"#011526",
    borderTopLeftRadius:50,
    borderTopRightRadius:50,
    // borderColor: Color.ashhh,
    borderWidth: 1,
    top: 2
  },
  container: {
    flex:1,
    // backgroundColor:Color.deepskyblue,
  },
  backgroundImage:{
    width: "120%",
    height: "45%",
    // left: "80%"
  },
  circle: {
    width: 100, // Adjust the size as needed
    height: 100, // Adjust the size as needed
    borderRadius: 50, // Make it a circle by setting half of width/height as borderRadius
    backgroundColor: 'lightgray', // Background color of the circle
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 85, // Adjust the size of the profile image
    height: 90, // Adjust the size of the profile image
    borderRadius: 40, // Make it a circle by setting half of width/height as borderRadius
  },
  rectangleLineargradient: {
    top: "20%",
    width: 468,
    height: "80%",
    backgroundColor: "transparent",
    position: "absolute"
  },
});

export default HomeScreen;