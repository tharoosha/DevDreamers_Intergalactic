import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Color, Border, FontFamily, FontSize } from "../constants/GlobalStyles";

import PhotoGrid from './PhotoGrid';

const ScrollingParagraphs = () => {
  const deccription = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac odio non justo ultrices euismod.",] ;
  const paragraphs = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac odio non justo ultrices euismod.",
    "Fusce a metus sit amet massa luctus laoreet a nec nisi. Aenean vel metus et justo facilisis dignissim a id metus.",
    "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    "Maecenas hendrerit erat in ligula feugiat, nec congue ex suscipit. Fusce volutpat tortor in elit vehicula, vel auctor lectus facilisis.",
    "Nunc fringilla quam ut nunc bibendum, eu feugiat eros congue. Nulla facilisi. Sed at pharetra orci.",
    "Donec non nulla quis metus bibendum aliquet. Curabitur mollis velit eu nulla faucibus, nec consequat urna iaculis.",
    "Vivamus in ex eu nunc laoreet ullamcorper vel eget purus. Vivamus ullamcorper nisl id nisi blandit, in elementum nunc volutpat.",
  ];

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
    marginRight: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color:Color.ashhh

  },

  indexContainer: {
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
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
    flexDirection: 'row',
    alignItems: 'center',
  },
  paragraphText: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
    color:Color.ashhh

  },
});

export default ScrollingParagraphs;
