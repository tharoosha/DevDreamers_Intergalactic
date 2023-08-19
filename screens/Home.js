import {Text} from 'react-native';
import { HomeHeader, Button } from '../components';
// import { Button, HomeHeader } from "../components";
import { StyleSheet, SafeAreaView } from 'react-native';

const uri = '..//assets/images/Shadow_Realm_resize.png'

const Home = () => {
    return (
        <SafeAreaView style={StyleSheet.container}>
            {/* <Button /> */}
            {/* <HomeHeader /> */}
            <Text style={StyleSheet.text}>Hello</Text>

        </SafeAreaView>
    )
};

const style = StyleSheet.create(
    {
        container: {
            flex: 1,
        },
        text: {
            fontSize: 25,
            fontWeight: '500',
        },
    }
);

export default Home;