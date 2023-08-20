import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CustomButton from './CustomButton';
import { BlurView } from 'expo-blur';

const PaidCard = ({ tab1Rows, tab2Rows }) => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 1 && styles.activeTabButton]}
          onPress={() => setActiveTab(1)}
        >
          <Text style={[styles.tabButtonText, activeTab === 1 && styles.activeTabButtonText]}>Paid</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tabButton, activeTab === 2 && styles.activeTabButton]}
          onPress={() => setActiveTab(2)}
        >

          <Text style={[styles.tabButtonText, activeTab === 2 && styles.activeTabButtonText]}>Cart</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.horizontalLine}></View>

      <View style={styles.rowsContainer}>
        {activeTab === 1 && tab1Rows}
        {activeTab === 2 && tab2Rows}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,


  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
  },
  tabButton: {
    paddingHorizontal: 65,
    paddingVertical: 10,
  },
  activeTabButton: {
    backgroundColor: 'rgba(0, 178, 255, 0.5)',
    BlurView: 'default',
    borderRadius: 10,
    paddingHorizontal: 60,
  },
  tabButtonText: {
    fontWeight: 'bold',
    color: 'white',
  },
  activeTabButtonText: {
    color: 'white',
  },
  rowsContainer: {
    flex: 1,
    padding: 8,

  },


  horizontalLine: {
    width: '90%',
    borderBottomColor: 'white', // Color of the line
    borderBottomWidth: 1, // Thickness of the line
    marginVertical: 2, // Adjust as needed
    opacity: 0.5, // Change to set visibility
    alignSelf: 'center',
  },

});

export default PaidCard;