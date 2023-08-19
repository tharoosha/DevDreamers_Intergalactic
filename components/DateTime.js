import { View, Text, TouchableOpacity,Image , StyleSheet} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from 'react'
import Button from './Button'


export default function DateTime() {

    const IconButton = ({ iconSource, label, onPress }) => {
        return (
          <TouchableOpacity style={styles.button} onPress={onPress}>
            <Image source={iconSource} style={styles.icon} />
            <Text style={styles.label}>{label}</Text>
          </TouchableOpacity>
        );
      };

    const [mydate, setDate] = useState(new Date());
    const [displaymode, setMode] = useState('date');
    const [isDisplayDate, setShow] = useState(false);
    const changeSelectedDate = (event, selectedDate) => {
    const currentDate = selectedDate || mydate;
    setDate(currentDate);
    }

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
      };
    
      const displayDatepicker = () => {
          showMode('date');
      };


  return (
    <View>
      <View>
         <Button onPress={displayDatepicker} title="Show date picker!" />
         <IconButton
            iconSource={require('../assets/icons/calendar.png')}
            onPress={displayDatepicker}
        />
            </View>
               {isDisplayDate && (
                  <DateTimePicker
                     testID="dateTimePicker"
                     value={mydate}
                     mode={displaymode}
                     is24Hour={true}
                     display="default"
                     onChange={changeSelectedDate}
            />
         )}
    </View>
  )
}