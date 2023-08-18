import { View, Text, StyleSheet,TextInput, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { Color, Border, FontFamily, FontSize } from "../constants/GlobalStyles";
import {Button, Input, DateTime} from '../components'
// import moment from 'moment';


// import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePicker from "react-native-modal-datetime-picker";

import { Feather } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';

const SearchForm = () => {
  // const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [mode, setMode] = useState('');

  const handleSubmit = () => {
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Date:', date);
    console.log('Mode',mode)  
  };

  const [selectedDate, setSelectedDate] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {

    const CDateString = date.toString();
    const months = [
      "01", "02", "03", "04", "05", "06",
      "07", "08", "09", "10", "11", "12"
    ];

    const year = date.getFullYear();
    const month = months[date.getMonth()];
    const day = (date.getDate() < 10) ? `0${date.getDate()}` : date.getDate();
 
    const formattedDate = `${day}/${month}/${year}`;
    console.log('Date:', formattedDate);

    if (date) {
      setDate(formattedDate);
    }
    hideDatePicker();
  };

  return (
    // <SafeAreaView style={styles.container}>

      <View style={styles.container}>
        <Input
          placeholder={"Earth Station 21"}
          value={name}
          onChangeText={(text) => setName(text)}
          width={314}
          label={"From"}
        />
        <Input
          placeholder={"Email"}
          value={email}
          onChangeText={(text) => setEmail(text)}
          width={314}
          label={"To"}
        />
        <View style={styles.row}>
          <View style={styles.DateTimeContainer}>
            <Text style={styles.input_text}>Date</Text>
            {/* <Input
              placeholder={"12/08/2157"}
              value={date}
              onChangeText={(text) => setDate(text)}
              width={145}
              label={"Date"}
            /> */}
            {/* <DateTime /> */}
            <View style={styles.searchWrapper}>
              <TextInput
                style={styles.searchInput}
                value={date}
                onChangeText={(text) => setDate(text)}
                placeholder={'DD/MM/YYYY'}
                placeholderTextColor={Color.white}
                
              />
              <TouchableOpacity style={styles.searchBtn} onPress={showDatePicker}>
                {/* <Image
                  source={icons.search}
                  resizeMode='contain'
                  style={styles.searchBtnImage}
                /> */}
                <Feather name="calendar" size={24} color={Color.white} style={styles.calendarIcon} />
              </TouchableOpacity> 
            </View>

            
            
            <DateTimePicker
                isVisible = {isDatePickerVisible}
                mode="date"
                // is24Hour={true}
                // display="default"
                // onChange={(event, date) => handleConfirm(date)}
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
            
              
          </View>
          <View style={styles.inputWrap}>
            <Input
              placeholder={"Teleporter"}
              value={mode}
              onChangeText={(text) => setMode(text)}
              width={145}
              label={"Mode"}
            />
          </View>
          
        </View>
        
        <View style={styles.lineView} />

        <Button title="Submit" 
          onPress={handleSubmit}
          text={"Search Flight"}
          bgcolor={Color.deepskyblue}
          textcolor={Color.white}
        />
        <Button title="Submit" 
          onPress={handleSubmit}
          text={"Compair Places"}
          bgcolor={Color.white}
          textcolor={Color.deepskyblue}
        />
      </View>
    // </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 21,
    justifyContent: 'center',
  },
  lineView: {
    borderStyle: "solid",
    borderColor: "rgba(236, 228, 242, 0.16)",
    borderTopWidth: 2,
    flex: 1,
    width: "100%",
    height: 2,
    marginTop: 70,
  },
  row: {
    flex: 1,
    flexDirection: "row",
    alignContent: 'center',
  },
  inputWrap: {
    flex: 1,
    alignContent: 'center',
    marginLeft: 5
  },
  DateTimeContainer:{
    flex: 1,
    alignContent: 'center'
  },
  input_text: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: "700",
    fontFamily: "Poppins-Bold",
    color: "#fff",
    textAlign: "left",
    width: 80,
    height: 13,
    margin: 7,
    paddingLeft: 10
  },
  searchWrapper:{
    flexDirection: "row",
    justifyContent: 'space-between', 
    borderRadius: 44,
    backgroundColor: "#091522",
    borderStyle: "solid",
    borderColor: "#3a3a42",
    borderWidth: 1,
    height: 44,
    fontFamily: FontSize.poppinsRegular,
    color: "#fff",
    paddingLeft: 17,
    marginBottom: 5,
    alignItems: "center", 
  },
  searchInput:{
    color: Color.white,
    width: 88
  },
  searchBtn:{
    // marginTop:8,
    // marginLeft: 1.2
    width: 40
  }
});

export default SearchForm;