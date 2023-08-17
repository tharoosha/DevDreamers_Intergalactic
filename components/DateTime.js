// import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native'
// import { useState, React } from 'react'
// import { Color, Border, FontFamily, FontSize } from "../constants/GlobalStyles";
// // import {Button, Input} from '../components'
// import DateTimePicker from '@react-native-community/datetimepicker';
// import { Feather } from '@expo/vector-icons'; // Import Feather icon library




// const DateTime = () => {

//     const [mydate, setDate] = useState(new Date());
//     const [displaymode, setMode] = useState('date');
//     const [isDisplayDate, setShow] = useState(false);

//     const changeSelectedDate = (event, selectedDate) => {
//         const currentDate = selectedDate || mydate;
//         setDate(currentDate);
//     }
//     const showMode = (currentMode) => {
//         setShow(true);
//         setMode(currentMode);
//     };
//     const displayDatepicker = () => {
//         showMode('date');
//     };

//     return (
//         <View>
//             <Text style={styles.input_text}>Date</Text>
//             <View style={styles.input}>
//                 <View style={styles.input_box}>
//                     {/* <View> */}
//                     {/* <TextInput
//                         style={styles.inputField}
//                         placeholder={"12/08/2157"}
//                         placeholderTextColor={Color.white}
//                         value={mydate} // Display the selected date
//                         onChangeText={(text) => setDate(new Date(text))}
//                     /> */}
//                     {/* <View>
//                         <Button onPress={displayDatepicker} title="12/08/2157" />
//                     </View> */}
//                     <TouchableOpacity onPress={displayDatepicker} style={styles.calendarIcon}>
//                         <Feather name="calendar" size={24} color="#fff" />
//                     </TouchableOpacity>
//                     {isDisplayDate && (
//                         <DateTimePicker
//                             testID="dateTimePicker"
//                             value={mydate}
//                             mode={displaymode}
//                             is24Hour={true}
//                             display="default"
//                             onChange={changeSelectedDate}
//                         />
//                     )}
//                     {/* </View> */}
//                     {/* <View>
//                         <Text>Hello</Text>
//                     </View> */}
//                 </View>
//             </View>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     input_text:{
//         fontSize: 12,
//         lineHeight: 18,
//         fontWeight: "700",
//         fontFamily: "Poppins-Bold",
//         color: "#fff",
//         textAlign: "left",
//         width: 80,
//         height: 13,
//         margin: 7,
//         paddingLeft: 10
//       },
//       input: {
//         borderRadius: 44,
//         backgroundColor: "#091522",
//         borderStyle: "solid",
//         borderColor: "#3a3a42",
//         borderWidth: 1,
//         height: 44,
//         fontFamily: FontSize.poppinsRegular,
//         color: "#fff",
//         paddingLeft: 17,
//         // marginBottom: 5,
//         // flex: 1,
//         // flexDirection: "row"  
//     },
//     input_box: {
//         flex: 1,
//         flexDirection: "row"
//     },
//     inputField: {
//         flex: 1,
//         fontFamily: FontSize.poppinsRegular,
//         paddingLeft: 17,
//         color: "#fff",
//     },
//     calendarIcon: {
//         paddingHorizontal: 10,
//     }
// })
// export default DateTime;

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Color, FontSize } from "../constants/GlobalStyles";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Feather } from '@expo/vector-icons';

const DateTime = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        if (date) {
            setSelectedDate(date);
        }
        hideDatePicker();
    };

    return (
        <View>
            <Text style={styles.input_text}>Date</Text>
            <View style={styles.input}>
                <TouchableOpacity onPress={showDatePicker} style={styles.inputField}>
                    <TextInput
                        style={styles.dateText}
                        placeholder="Select Date"
                        placeholderTextColor={Color.white}
                        value={selectedDate.toLocaleDateString('en-GB')}
                        editable={false} // Prevent manual input
                    />                   
                    <Feather name="calendar" size={24} color={Color.white} style={styles.calendarIcon} />

                </TouchableOpacity>
                {isDatePickerVisible && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={selectedDate}
                        mode="date"
                        is24Hour={true}
                        display="default"
                        onChange={(event, date) => handleConfirm(date)}
                    />
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
    input: {
        borderRadius: 44,
        backgroundColor: "#091522",
        borderStyle: "solid",
        borderColor: "#3a3a42",
        borderWidth: 1,
        height: 44,
        fontFamily: FontSize.poppinsRegular,
        color: "#fff",
        paddingLeft: 17,
    },
    inputField: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 5
    },
    calendarIcon: {
        marginRight: 17
    },
    dateText: {
        flex: 1,
        color: Color.white,
    }
});

export default DateTime;


