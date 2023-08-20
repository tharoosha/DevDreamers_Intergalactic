import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Color, FontFamily } from '../constants/GlobalStyles';
import invoiceData from '../data/invoice_data.json';
import promoCodesFile from '../data/promo_code.json';
import { BlurView } from 'expo-blur';


const MaxVisibleRows = 3;

const Invoice = ({ promoCode, setPromoCode }) => {
  const handlePromoCodeChange = (value) => {
    setPromoCode(value);
  };

  const calculateTotal = () => {
    const totalPrice = invoiceData.seats.reduce((total, seat) => {
      const price = parseFloat(seat.price); 
      return total + price;
    }, 0);
    return totalPrice.toFixed(2); 
  };

  const totalAmount = calculateTotal();

  const discountObj = promoCodesFile.promoCodes.find(
    (promo) => promo.code === promoCode
  );
  
  const discountPercentage = discountObj ? discountObj.discountPercentage : 0;

  // Calculate the discounted total
  const discount=(totalAmount * (discountPercentage / 100)).toFixed(2);
  const discountedTotal = (totalAmount -discount).toFixed(2);

  return (
    
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={120}
    >
      <BlurView tint="default" intensity={50} style={styles.blurOverlay} />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.text}>{invoiceData.airlineName}</Text>
        <View style={styles.horizontalLine} />
        <View style={styles.rowContainer}>
          <Text style={styles.rowText1}>{invoiceData.date}</Text>
          <Text style={styles.rowText1}>{invoiceData.from}</Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.rowText1}>{invoiceData.departureTime}</Text>
          <Text style={styles.rowText1}>{invoiceData.to}</Text>
        </View>
        <Text style={[styles.text, { textAlign: 'center' }]}> Booking Rates </Text>
        <View
          style={[
            styles.table.tableRow,
            { backgroundColor: 'rgba(255, 216, 230, 0.2)', borderRadius: 10 },
          ]}
        >
          <Text style={styles.table.cell}>Flight No.</Text>
          <Text style={styles.table.cell}>Seat ID</Text>
          <Text style={styles.table.cell}>Class</Text>
          <Text style={styles.table.cell}>Price</Text>
        </View>

        <ScrollView style={styles.tableContainer}>
          {invoiceData.seats.map((seat, index) => (
            <React.Fragment key={index}>
              <View style={styles.table.tableRow}>
                <Text style={styles.table.subcell}>{seat.flightNo}</Text>
                <Text style={styles.table.subcell}>{seat.seatID}</Text>
                <Text style={styles.table.subcell}>{seat.class}</Text>
                <Text style={styles.table.subcell}>{'$'+seat.price}</Text>
              </View>
              <View style={styles.horizontalLine} />
            </React.Fragment>
          ))}
        </ScrollView>

        <View style={[styles.rowContainer, { marginTop: 20 }]}>
          <Text style={styles.rowText}>Total</Text>
          <Text style={styles.rowText}>$ {totalAmount}</Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.rowText}>Discount</Text>
          <Text style={styles.rowText}>- $ {discount}</Text>
        </View>
        {discountPercentage > 0 && (
          <View style={[styles.rowContainer, { marginTop: 5 }]}>
            <Text style={styles.rowText}></Text>
            <Text style={styles.rowText}>({discountPercentage}% off)</Text>
          </View>
        )}
        <View style={styles.rowContainer}>
          <Text style={styles.rowText}>Grand Total</Text>
          <Text style={styles.rowText}>$ {discountedTotal}</Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.rowText}>Promo Code</Text>
          <TextInput
            style={styles.inputCell}
            placeholder="Enter Code"
            onChangeText={handlePromoCodeChange}
            value={promoCode}
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
          />
        </View>
      </ScrollView>
      
    </KeyboardAvoidingView>
    
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    marginTop: 10,
    maxHeight:100
  },
  blurContainer: {
    borderRadius: 7,
    overflow: 'hidden', // Ensure that the blur effect stays within the defined border
  },

  tableContainer: {
    maxHeight: MaxVisibleRows * 40,
    marginTop: 5,
  },

  container: {
    width: 350,
    borderColor: 'rgba(173, 216, 230, 0.3)',
    borderWidth: 0.75,
    borderRadius: 7,
    padding: 10,
    marginTop: 40,
    overflow: 'hidden'
  },

  horizontalLine: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 216, 230, 0.3)',
    marginVertical: 5,
  },

  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
    marginBottom: 10,
  },
  rowText: {
    fontSize: 12,
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

  table: {
    tableRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    cell: {
      flex: 1,
      fontSize: 10,
      fontFamily: 'Poppins-SemiBold',
      textAlign: 'center',
      padding: 10,
      color: 'white',
    },
    subcell: {
      flex: 1,
      fontSize: 10,
      fontFamily: FontFamily.poppinsRegular,
      textAlign: 'center',
      borderRadius: 10,
      padding: 10,
      marginRight: 5,
      color: 'white',
    },
  },

  text: {
    fontSize: 22,
    fontFamily: FontFamily.poppinsSemiBold,
    marginBottom: 10,
    marginTop: 10,
    marginBottom: 10,
    color: 'rgba(255, 255, 255, 0.7)',
  },

  inputCell: {
    fontSize: 12,
    textAlign: 'center',
    padding: 10,
    color: 'white',
    backgroundColor: 'rgba(255, 216, 230, 0.15)',
    borderRadius: 10,
    padding: 5,
    textAlign: 'center',
    width: 100,
    height: 25,
  },
  blurOverlay: {
    ...StyleSheet.absoluteFillObject, // Cover the entire container
    borderRadius: 7,
    overflow: 'hidden', // Ensure that the blur effect stays within the defined border
  }
});

export default Invoice;
