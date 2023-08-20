import { BlurView } from 'expo-blur';
import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native'
import Icon2 from 'react-native-vector-icons/Octicons';


const CustomHeader = ({destination1, destination2, title}) => {

    const navigation = useNavigation();

    return (
            <View style={{ flexDirection: 'row', gap:'155' , alignItems: 'center', width: '241%'}}>
                <TouchableOpacity onPress={() => navigation.navigate(destination1)}>

                {/* <TouchableOpacity onPress={() => navigation.goBack()}> */}
                    {/* <Text>Back</Text> */}
                    {/* <View style={{flex:1, flexDirection: "row"}}> */}
                    <Icon name="arrow-left" size={30} color="black" style={{ marginLeft: 10,}}/>
                        
                    {/* </View> */}
                    

                </TouchableOpacity>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{title}</Text>

                <TouchableOpacity style={{alignItems: 'flex-end'}} onPress={() => navigation.navigate(destination2)}>
                    <Icon2 name="person" size={30} color="black" style={{ marginRight: 10 , alignItems: 'flex-end' }}/>
                </TouchableOpacity>
                
            </View>
        
        
    );
};



export default CustomHeader;