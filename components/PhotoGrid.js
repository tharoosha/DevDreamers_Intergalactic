import React from 'react'
import { View, Image, StyleSheet, ScrollView } from 'react-native'

const PhotoGrid = () => {
  const photos = [
    { title: 'Photo 1', source: require('../assets/images/image_4_(1).png') },
    { title: 'Photo 2', source: require('../assets/images/image_4_(2).png') },
    { title: 'Photo 3', source: require('../assets/images/image_4_(3).png') },
    { title: 'Photo 4', source: require('../assets/images/image_4_(4).png') },
    { title: 'Photo 5', source: require('../assets/images/image_4_(5).png') },
    { title: 'Photo 6', source: require('../assets/images/image_4.png') },
  ]


  return (
    <ScrollView contentContainerStyle={styles.container}>
      {photos.map((photo, index) => (
        <View key={index} style={styles.photoContainer}>
          <Image source={photo.source} style={styles.photo} />
          {/* <Text style={styles.title}>{photo.title}</Text> */}
        </View>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 16,
  },
  photoContainer: {
    width: '32%',
    marginBottom: 16,
  },
  photo: {
    width: '100%',
    height: 90,
    borderRadius: 8,
  },
  title: {
    marginTop: 8,
    fontSize: 16,
    textAlign: 'center',
  },
})

export default PhotoGrid
