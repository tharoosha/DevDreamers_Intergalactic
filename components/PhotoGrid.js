import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const PhotoGrid = () => {
  const photos = [
    { title: 'Photo 1', source: require('../assets/images/avatar.jpeg') },
    { title: 'Photo 2', source: require('../assets/images/avatar.jpeg') },
    { title: 'Photo 3', source: require('../assets/images/avatar.jpeg') },
    { title: 'Photo 4', source: require('../assets/images/avatar.jpeg') },
    { title: 'Photo 5', source: require('../assets/images/avatar.jpeg') },
    { title: 'Photo 6', source: require('../assets/images/avatar.jpeg') },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {photos.map((photo, index) => (
        <View key={index} style={styles.photoContainer}>
          <Image source={photo.source} style={styles.photo} />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 1,
  },
  photoContainer: {
    width: '30%',
    height: 200,
    marginBottom: -68,

  },
  photo: {
    width: '100%',
    height: 100,
    borderRadius: 8,

  },

})

export default PhotoGrid;
