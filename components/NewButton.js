import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const NewButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    button: {
      backgroundColor: 'white', // Switched to white background color
      width: '40%',
      borderRadius: 60,
      paddingHorizontal: 10,
      paddingVertical: 10,
      marginBottom: 20,
      marginRight: 10,
      marginTop: 15,
      alignSelf: 'flex-end', // Align to the right
    },
    buttonText: {
      color: 'deepskyblue', // Switched to deepskyblue font color
      textAlign: 'center',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
  

export default NewButton;
