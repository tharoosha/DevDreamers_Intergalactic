import React from 'react';
import {Font ,  View, Text, StyleSheet } from 'react-native';
import { Color, Border, FontFamily, FontSize } from "../constants/GlobalStyles";
import Svg, { Circle } from 'react-native-svg';
import { Image } from "expo-image";
import CustomButton from './CustomButton';
import Button from './Button';
import CardBoxButton from './CardBoxButton';


const CardBox = ({ dateofp, price, airlines, dateoftravel,from,time,to,numberofSeats,buttonname }) => {

  const uri = '../assets/icons/Spaceships/SpaceX.svg'

  return (
    <View>
      <View style={styles.container}>
      {/* First column */}
      <View style={[styles.column0, styles.spaceBetweenColumn]}>

        <View style={[styles.column0, styles.spaceBetweenColumn]}>
        <View style={styles.row0}>
          <View style={styles.cell1}>
            <Text style={styles.cellText1}>{dateofp}</Text>
          </View>

          <View style={styles.cell2}>
            <Text style={styles.cellText1}>{price}</Text>
          </View>
          </View>
        </View>
        <View style={styles.row0}>
          <View style={styles.cell1}>
            <Text style={styles.cellText2}>{airlines}</Text>
          </View>

          <View style={styles.cell2}>
            <Text style={styles.cellText2}>       </Text>
          </View>
        </View>

        <View style={styles.row0}>
          <View style={styles.cell1}>
            <Text style={styles.cellText2}>{dateoftravel}</Text>
          </View>

          <View style={styles.cell2}>
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.cellText3}>from {from}</Text>
          </View>
        </View>

        <View style={styles.row0}>
          <View style={styles.cell1}>
            <Text style={styles.cellText2}>{time}</Text>
          </View>

          <View style={styles.cell2}>
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.cellText3}>to {to}</Text>
          </View>
        </View>



        <View style={styles.row0}>

        <View style={styles.cell1}>
            <Text style={styles.cellText2}>{numberofSeats} Seats</Text>
          </View>

          <View style={styles.cellb}>
          <CardBoxButton title="Submit" 
            text={buttonname}
            bgcolor={Color.deepskyblue}
            textcolor={Color.white}
            alignItems="flex-end"
            width="40%"
          />
          </View>
        </View>

        </View>

      </View>

      <View style={styles.horizontalLine}></View>
      
    </View>

      

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 320,
    flexDirection: 'row', // To align columns side by side
    marginLeft: 2,
    marginBottom: -30,
    
    
  },
  column0: {
    flex: 1,
    flexDirection: 'column',
    marginBottom: 0,

  },
  column1: {
    width: 90,
    flexDirection: 'column',
    marginBottom: 5,
    marginTop: 0, // Align to the bottom
    marginLeft: 3,

    alignItems: 'center',
    justifyContent: 'center',

  },
  spaceBetweenColumn: {
    justifyContent: 'space-between',
  },
  row0: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginLeft: 6,
  },
  cell0: {
    width: 250,
    height: 60,
    // borderWidth: 1,
    // borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 10,
    
  },
  cell1: {
    width: 140,
    height: 35,
    //  borderWidth: 1,
    //  borderColor: 'white',
     alignItems: 'flex-start',
     justifyContent: 'center',

  },


  cell2: {
    width: 140,
    height: 35,
    alignItems: 'flex-end',
    justifyContent: 'center',
    // borderWidth: 1,
    // borderColor: 'white',

  
  },


  cell3: {
    width: 80,
    height: 35,
    // borderWidth: 1,
    // borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cell4: {
    width: 80,
    height: 98,
    // borderWidth: 1,
    // borderColor: 'white',

    justifyContent: 'center',
    alignItems: 'center',
  },
  cellb: {
    width: 120,
    height: 98,
    // borderWidth: 1,
    // borderColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',

  },
  cellText0: {
    fontSize: 25,
    color: 'white' ,
    fontFamily : 'Poppins-Bold' ,
  },
  cellText1: {
    fontSize: 16,
    color: 'white' ,
    fontFamily : 'Poppins-Regular' , 

  },
  cellText2: {
    fontSize: 16,
    color: 'white' ,
    fontFamily : 'Poppins-Regular' , 
  },

  cellText3: {
    fontSize: 13,
    color: 'white' ,
    fontFamily : 'Poppins-Regular' , 
  },

  horizontalLine: {
    width: '70%',
    borderBottomColor: 'white', // Color of the line
    borderBottomWidth: 1, // Thickness of the line
    opacity: 0.5, // Change to set visibility
    alignSelf: 'center',
    marginBottom: 18,
  },

});

export default CardBox;
