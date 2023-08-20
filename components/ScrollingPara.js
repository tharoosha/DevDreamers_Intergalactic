import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Color, Border, FontFamily, FontSize } from "../constants/GlobalStyles";
import { useNavigation } from '@react-navigation/native';

import PhotoGrid from './PhotoGrid';

import Button from './Button';

const ScrollingParagraphs = () => {
  const deccription = ["alora Crater stands as an enigmatic wonder in the Martian landscape, offering intrepid travelers an unparalleled journey into the heart of a celestial marvel. This ethereal destination promises an adventure beyond imagination, drawing explorers with its unique geological formations, ancient history, and the sheer awe of its grandeur",] ;
  const paragraphs = [
    "Rust-Colored Majesty: The crater's rust-red terrain creates a striking contrast against the pitch-black Martian sky. Towering rock formations, sculpted by eons of wind and erosion, present an otherworldly beauty that begs for discovery.",
    "Ancient Riverbeds: As you traverse the crater's expanse, you'll encounter the remnants of ancient riverbeds, carved by long-vanished Martian waters. These",
    "Valora Lookout: Ascend to the Valora Lookout for panoramic views that stretch across the entire crater. Gaze in wonder at the surreal landscape and witness the brilliance of the Martian sunsets as they cast their warm glow over the rocky terrain.",
    "Echoing Caverns: Venture into the depths of the crater to explore echoing caverns and tunnels, a testament to the geological activity that shaped this incredible landscape. Feel the whispers of time as you navigate through these ancient passageways.",
    "Nunc fringilla quam ut nunc bibendum, eu feugiat eros congue. Nulla facilisi. Sed at pharetra orci.",
    "Donec non nulla quis metus bibendum aliquet. Curabitur mollis velit eu nulla faucibus, nec consequat urna iaculis.",
    "Vivamus in ex eu nunc laoreet ullamcorper vel eget purus. Vivamus ullamcorper nisl id nisi blandit, in elementum nunc volutpat.",
  ];

  const climatepara = [
    "Valora Crater's climate is as distinct as its landscape. Temperatures can vary dramatically between daytime and"
  ];

  const navigation = useNavigation();

  const handleSubmit = () => {
    navigation.navigate('Search')
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <PhotoGrid/>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Valora Crater</Text>
      </View>

      {deccription.map((paragraph, index) => (
        <View key={index} style={styles.paragraphContainer}>
          <Text style={styles.paragraph}>{paragraph}</Text>
        </View>
      ))}

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Attractions</Text>
      </View>

      {paragraphs.map((paragraph, index) => (
        <View key={index} style={styles.paragraphContainer}>
        <View style={styles.indexContainer}>
            <Text style={styles.index}>{index + 1}</Text>
          </View>
          <Text style={styles.paragraphText}>{paragraph}</Text>
        </View>
      ))}

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Climate</Text>
      </View>

      {climatepara.map((paragraph, index) => (
        <View key={index} style={styles.paragraphContainer}>
        {/* <View style={styles.indexContainer}>
            <Text style={styles.index}>{index + 1}</Text>
          </View> */}
          <Text style={styles.paragraphText}>{paragraph}</Text>
        </View>
      ))}

      <Button title="Submit" 
            onPress={handleSubmit}
            text={"BOOK NOW"}
            bgcolor={Color.deepskyblue}
            textcolor={Color.white}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  paragraphContainer: {
    marginBottom: 16,
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color:Color.white
  },
  index: {
    marginRight: 2,
    marginTop: 4,
    fontSize: 16,
    fontWeight: 'bold',
    color:Color.ashhh,
    verticalAlign:"top"
  },

  indexContainer: {
    marginRight: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: 30,
    height: 30,
  },
  

  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color:Color.ashhh
  },
  paragraphContainer: {
    marginBottom: 16,
    marginTop: 2,
    flexDirection: 'row',
    // alignItems: 'flex-start',
  },
  paragraphText: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
    color:Color.ashhh

  },
});

export default ScrollingParagraphs;
