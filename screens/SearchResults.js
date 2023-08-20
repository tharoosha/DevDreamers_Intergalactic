// SearchResult.js
import React, { useState } from 'react'
import { StyleSheet, Image, ImageBackground, View, Text, SafeAreaView, Dimensions, ScrollView } from "react-native"
import { SearchForm, Button, HomeHeader, Invoice, SearchForm3 } from "../components"
import { Color, Border, FontFamily, FontSize } from "../constants/GlobalStyles"
import { LinearGradient } from 'expo-linear-gradient'
import { BlurView } from 'expo-blur'
import resultData from '../data/result_data.json'
import HorizontalLine from '../components/HorizontalLine'
// import SearchForm2 from '../components/SearchForm2'



const screenHeight = Dimensions.get('window').height

const uri = require('..//assets/images/Shadow_Realm_resize.png')


const SearchResults = () => {

  // const [resultData, setResultData] = useState()

  return (
    <View style={styles.container}>
      <Image style={[styles.backgroundImage, StyleSheet.absoluteFill]} source={(uri)} />
      <View style={styles.login}>
        <View style={styles.containerx}>
          <BlurView>
            <View style={styles.container3}>
              <SearchForm />
            </View>

            <View>
              <Text style={styles.text2}>Showing {resultData.flights.length} search results </Text>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContainer}>
              {resultData.flights.map((flights, index) => (
                <View key={index} style={styles.container2}>
                  <Text style={styles.text}>{flights.airlineName}</Text>
                  <View style={styles.rowContainer}>
                    <Text style={styles.rowText1}>{flights.date}</Text>
                    <Text style={styles.rowText1}>{flights.departureTime}</Text>
                  </View>
                  <View style={styles.rowContainer}>
                    <Text style={styles.rowText1}>{flights.from}</Text>
                    <Text style={styles.rowText1}>{flights.to}</Text>
                  </View>
                  <View style={styles.rowContainer}>
                    <Text style={styles.rowText2}>Classes Available: {flights.classesAvailable.join(' • ')}</Text>
                  </View>
                  <View style={styles.button}>
                    <Button
                      title="Reserve Seats"
                      text={"Reserve Seats"}
                      textcolor={'white'}
                      bgcolor={'deepskyblue'}
                      width={155}
                      height={40}
                    />

                    <HorizontalLine color="white" height={2} opacity={0.5} bottommargin={5} />
                  </View>
                </View>
              ))}
            </ScrollView>
          </BlurView>
        </View>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({


  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 20,
    // marginTop:400,
    height: 2000,

  },

  login: {
    width: "99%",
    height: "75%",
    borderColor: 'rgba(0, 178, 255, 0.5)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 20,
    alignItems: 'center',
    overflow: "hidden",
    top: "1%",

  },

  container: {
    flex: 1,
    // backgroundColor: 'rgba(0, 178, 255, 0.8)',
    justifyContent: 'center',
    marginTop: 0,
    paddingVertical: 10,
    paddingHorizontal: 15,
    gap: 15
  },
  container2: {
    justifyContent: 'center',
    padding: 10,
    marginBottom: 10,
    width: 350,
    borderRadius: 7
  },

  container3: {
    justifyContent: 'center',
    padding: 15,
    marginBottom: -8,
    width: 350,
    height: 340,
    borderRadius: 7,
    marginTop: 0
  },

  containerx: {
    justifyContent: 'center',
    marginTop: 185,
    width: 360,
    borderRadius: 8
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  button: {
    alignItems: 'flex-end',
    marginTop: 5
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 3,
    marginBottom: 3,
  },
  rowText: {
    fontSize: 10,
    borderColor: 'rgba(173, 216, 230, 0.3)',
    fontFamily: FontFamily.poppinsRegular,
    marginVertical: 0,
    color: 'white',
  },

  rowText1: {
    fontSize: 13,
    borderColor: 'rgba(173, 216, 230, 0.3)',
    fontFamily: FontFamily.poppinsRegular,
    marginVertical: 0,
    color: 'white',
  },
  rowText2: {
    fontSize: 11,
    borderColor: 'rgba(173, 216, 230, 0.3)',
    fontFamily: FontFamily.poppinsRegular,
    marginVertical: 0,
    color: 'white',
    marginBottom: 10,
  },
  text: {
    fontSize: 17,
    fontFamily: FontFamily.poppinsSemiBold,
    marginBottom: 10,
    marginTop: 10,
    marginBottom: 10,
    color: 'white',
  },
  text2: {
    fontSize: 12,
    fontFamily: FontFamily.poppinsRegular,
    marginBottom: 10,
    marginTop: 10,
    marginBottom: 10,
    color: 'white',
    textAlign: 'center'
  },

  rectangleLineargradient: {
    top: 600,
    width: 468,
    height: 300,
    backgroundColor: "transparent",
    position: "absolute"
  },
  blurOverlay: {
    ...StyleSheet.absoluteFillObject, // Cover the entire container
    borderRadius: 7,
    overflow: 'hidden', // Ensure that the blur effect stays within the defined border
  }

})



export default SearchResults