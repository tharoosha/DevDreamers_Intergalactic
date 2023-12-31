import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import CustomButton from './CustomButton';
import { BlurView } from 'expo-blur';
import { useNavigation } from '@react-navigation/native'


const PaidCard = ({ tab1Rows, tab2Rows }) => {
  const [activeTab, setActiveTab] = useState(1);
  const navigation = useNavigation();

  const handleSubmit1 = () => {
    navigation.navigate('bookings')
  }

  const handleSubmit2 = () => {
    navigation.navigate('InvoiceReceipt')
  }
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

      <ScrollView style={styles.rowsContainer}>
        {activeTab === 1 && tab1Rows}
        {activeTab === 2 && tab2Rows}
      </ScrollView>
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
    backgroundColor: 'white',
    BlurView: 'default',
    borderRadius: 10,
    paddingHorizontal: 60,
  },
  tabButtonText: {
    fontWeight: 'bold',
    color: 'white',
  },
  activeTabButtonText: {
    color: 'deepskyblue',
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
