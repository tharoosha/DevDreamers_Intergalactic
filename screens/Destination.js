import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import TravelGuide from "./TravelGuide";
import { useNavigation } from '@react-navigation/native';
import { BlurView } from 'expo-blur';


// import img from "/Users/vihidun/Desktop/My_files/Developments/RootCode_competition/Intergalactic/assets/images/planet/image 4 (1).png"

const planetCardProps = [
  {
    image_path: require("/Users/vihidun/Desktop/My_files/Developments/RootCode_competition/Intergalactic/assets/images/planet/image_4_(1).png"),
    locationDescription: "Valora Crater",
    voyageDescription:
      "Embark on a daring voyage to Mars's mesmerizing Valora Crater...",
  },
  {
    image_path: require("/Users/vihidun/Desktop/My_files/Developments/RootCode_competition/Intergalactic/assets/images/planet/image_4_(3).png"),
    locationDescription: "Valora Crater",
    voyageDescription:
      "Embark on a daring voyage to Mars's mesmerizing Valora Crater...",
  },
  {
    image_path: require("/Users/vihidun/Desktop/My_files/Developments/RootCode_competition/Intergalactic/assets/images/planet/image_4_(2).png"),
    locationDescription: "Valora Crater",
    voyageDescription:
      "Embark on a daring voyage to Mars's mesmerizing Valora Crater...",
  },
  {
    image_path: require("/Users/vihidun/Desktop/My_files/Developments/RootCode_competition/Intergalactic/assets/images/planet/image_4_(4).png"),
    locationDescription: "Valora Crater",
    voyageDescription:
      "Embark on a daring voyage to Mars's mesmerizing Valora Crater...",
  },
  {
    image_path: require("/Users/vihidun/Desktop/My_files/Developments/RootCode_competition/Intergalactic/assets/images/planet/image_4_(5).png"),
    locationDescription: "Valora Crater",
    voyageDescription:
      "Embark on a daring voyage to Mars's mesmerizing Valora Crater...",
  },
  {
    image_path: require("/Users/vihidun/Desktop/My_files/Developments/RootCode_competition/Intergalactic/assets/images/planet/image_4.png"),
    locationDescription: "Valora Crater",
    voyageDescription:
      "Embark on a daring voyage to Mars's mesmerizing Valora Crater...",
  },
  {
    image_path: require("/Users/vihidun/Desktop/My_files/Developments/RootCode_competition/Intergalactic/assets/images/planet/image_4_(1).png"),
    locationDescription: "Valora Crater",
    voyageDescription:
      "Embark on a daring voyage to Mars's mesmerizing Valora Crater...",
  },
  {
    image_path: require("/Users/vihidun/Desktop/My_files/Developments/RootCode_competition/Intergalactic/assets/images/planet/image_4_(3).png"),
    locationDescription: "Valora Crater",
    voyageDescription:
      "Embark on a daring voyage to Mars's mesmerizing Valora Crater...",
  },
];



const PlanetContainer = ({
    image_path,
    locationDescription,
    voyageDescription,
  }) => {


    const navigation = useNavigation();
    const handler = () => {
      navigation.navigate('TravelGuide')
    }

    // console.log("PlanetContainer rendering:", locationDescription); // Debug log
    return (
    <View >
      
        <TouchableOpacity  style={styles.destinations} 
            onPress={handler}
        >
            {/* <View style={styles.destinations}> */}
            <Image source={image_path} style={[styles.image, {width:"25%", height:"80%", marginHorizontal:"4%", top: "2%"}]} />
            <View style={styles.textContainer}>
                <Text style={{ color: "white", fontSize: 20 }}>
                {locationDescription}
                </Text>
                <View style={{ alignContent: "center", width: "80%" }}>
                <Text style={{ color: "white", fontSize: 15 }}>
                    {voyageDescription}
                </Text>
                </View>
            </View>
            {/* </View> */}
        </TouchableOpacity>
       
    </View>
      
    );
  };
  
  const renderItem = ({ item }) => {
    console.log("renderItem:", item.locationDescription); // Debug log
    return <PlanetContainer {...item} />;
  };
  
const Destinations = () => {
    console.log("Destinations rendering"); // Debug log
    return (
      
          <ImageBackground
            source={require("/Users/vihidun/Desktop/My_files/Developments/RootCode_competition/Intergalactic/assets/images/Shadow_Realm_resize.png")}
            style={styles.backgroundImage}
            resizeMode="cover"
          >
            
            <View style={styles.login}>
              <BlurView tint="default" intensity={15} >

                <View style={{paddingTop: 50}}>
                  <FlatList
                    data={planetCardProps}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={renderItem}
                    ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
                  />
                </View>
              </BlurView>
            </View>

            {/* // <PlanetContainer {...planetCardProps[0]} />
            // <View style={{ height: 130 }} />
            // <PlanetContainer {...planetCardProps[1]} /> */}


          </ImageBackground>
        
    );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
  destinations: {
    // position: "absolute",
    width: "90%",
    height:"80%",
    borderWidth: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 30,
    flexDirection: "row",
    flex: 1,
    // top: 100,
    alignSelf: "center",
  },
  image: {
    width: 125,
    height: 125,
    borderRadius: 51,
  },
  textContainer: {
    flexDirection: "column",
    alignSelf: "center",
    margin: "4%"
  },
  login: {
    width: "92%",
    height: "80%",
    borderColor: 'rgba(0, 178, 255, 0.5)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 20,
    alignItems: 'center',
    overflow: "hidden", 
    top:"8%",
    left:"4%"
  },
});

export default Destinations;