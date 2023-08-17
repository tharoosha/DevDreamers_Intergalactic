import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const PhotoGrid = () => {
  const photos = [
    { title: 'Photo 1', source: require('/Users/vihidun/Desktop/My_files/Developments/RootCode_competition/Intergalactic/assets/images/avatar.jpeg') },
    { title: 'Photo 2', source: require('/Users/vihidun/Desktop/My_files/Developments/RootCode_competition/Intergalactic/assets/images/avatar.jpeg') },
    { title: 'Photo 3', source: require('/Users/vihidun/Desktop/My_files/Developments/RootCode_competition/Intergalactic/assets/images/avatar.jpeg') },
    { title: 'Photo 4', source: require('/Users/vihidun/Desktop/My_files/Developments/RootCode_competition/Intergalactic/assets/images/avatar.jpeg') },
    { title: 'Photo 5', source: require('/Users/vihidun/Desktop/My_files/Developments/RootCode_competition/Intergalactic/assets/images/avatar.jpeg') },
    { title: 'Photo 6', source: require('/Users/vihidun/Desktop/My_files/Developments/RootCode_competition/Intergalactic/assets/images/avatar.jpeg') },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {photos.map((photo, index) => (
        <View key={index} style={styles.photoContainer}>
          <Image source={photo.source} style={styles.photo} />
          <Text style={styles.title}>{photo.title}</Text>
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
    padding: 16,
  },
  photoContainer: {
    width: '48%',
    marginBottom: 16,
  },
  photo: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  title: {
    marginTop: 8,
    fontSize: 16,
    textAlign: 'center',
  },
})

export default PhotoGrid;
