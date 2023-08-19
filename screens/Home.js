import {Text} from 'react-native';
import { HomeHeader, Button, SearchForm, } from '../components';
// import { Button, HomeHeader } from "../components";
import { StyleSheet, SafeAreaView,  Image, View , useWindowDimensions} from 'react-native';
import bg from "../assets/images/Shadow_Realm_resize.png"
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';

import { Color, Border, FontFamily, FontSize } from "../constants/GlobalStyles";




const Home = () => {

    const {height} = useWindowDimensions();

    return (
        <SafeAreaView style={StyleSheet.container}>
            <Image style={[styles.backgroundImage, StyleSheet.absoluteFill]} source={bg} />
            <LinearGradient
                // Background Linear Gradient
                colors={['rgba(4, 8, 19, 0.89)','#000']}
                style={styles.rectangleLineargradient}
            />
            <Text style={[StyleSheet.text, {
                // flex: 1, 
                color:Color.white, 
                top: height * 0.1,
                marginLeft: "27%",
                fontSize: FontSize.size_9xl_1}]}>Welcome to Intergalactic</Text>
            
            <View style={[styles.bottom, {top: height * 0.2}]}>
                <View style={styles.login}>
                    <BlurView tint="default" intensity={15} >
                        <SearchForm /> 
                    </BlurView>
                </View>
            </View>

        </SafeAreaView>
    )
};

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        text: {
            fontSize: 50,
            fontWeight: '500',
        },
        rectangleLineargradient: {
            top: 519,
            width: 468,
            height: 468,
            backgroundColor: "transparent",
            position: "absolute"
          },
        login: {
            width: "82%",
            height: "78%",
            borderColor: 'rgba(0, 178, 255, 0.5)',
            borderWidth: 1,
            borderStyle: 'solid',
            borderRadius: 20,
            alignItems: 'center',
            overflow: "hidden", 
            marginLeft: "9%",
            // marginTop: "1%"
        },
    }
);

export default Home;