import { StyleSheet,Image, ImageBackground, View, Text, SafeAreaView, Dimensions, ScrollView } from "react-native";
import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { SearchForm } from "../components";



const uri = '/Users/vihidun/Desktop/My_files/Developments/RootCode_competition/Intergalactic/assets/images/Shadow_Realm_resize.png'


const Invoice_recipt = ()  => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image style={[styles.backgroundImage, StyleSheet.absoluteFill]} source={{uri}} />
            <LinearGradient
                colors={['rgba(4, 8, 19, 0.89)','#000']}
                style={styles.rectangleLineargradient}
            />
            <ScrollView contentContainerStyle= {{
                flex: 1,
                width: '100%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                }}> 
                <View style={styles.ticketbg}>
                    <BlurView tint="default" intensity={15} >
                        
                    </BlurView>
                </View>
            
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    ticketbg: {
      width: 352,
      height: 397,
      borderColor: 'rgba(0, 178, 255, 0.5)',
      borderWidth: 1,
      borderStyle: 'solid',
      borderRadius: 20,
      alignItems: 'center',
      overflow: "hidden", 
    },
    rectangleLineargradient: {
      top: 519,
      width: 468,
      height: 468,
      backgroundColor: "transparent",
      position: "absolute"
    }
});

export default Invoice_recipt