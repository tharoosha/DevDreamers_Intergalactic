import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomButton = ({ title, onPress, bgcolor , textcolor }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: bgcolor }]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { color: textcolor }]}>{title}</Text>
    </TouchableOpacity>

  );
};

const styles = StyleSheet.create({
  button: {
    width: '40%',
    borderRadius: 60,
    paddingHorizontal: 1,
    paddingVertical: 10,
    marginBottom: 20,
    marginRight: 10,
    marginTop: 15,
    alignSelf: 'Center', // Align to the right
  },
  buttonText: {

    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomButton;
