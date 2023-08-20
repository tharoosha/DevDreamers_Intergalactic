import * as React from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Animated,
} from 'react-native'

import { Color } from "../constants/GlobalStyles"

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const TabBar = ({ state, descriptors, navigation }) => {
    const focusedOptions = descriptors[state.routes[state.index].key].options

    if (focusedOptions.tabBarVisible === false) {
        return null
    }

    const onPress = (isFocused, route) => {
        const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
        })

        if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name)
        }
    }

    const _navIcon = (screen, isFocused) => {
        let _name
        let _size = isFocused ? 17 : 29
        let _color = isFocused ? '#fff' : '#1a303d'
        let _outlineName = !isFocused ? '-outline' : ''

        switch (screen) {
            case 'home':
                _name = 'home' + _outlineName
                break
            case 'places':
                _name = 'map-marker' + _outlineName
                break
            case 'bookings':
                _name = 'book-marker' + _outlineName
                break
            case 'Search':
                _name = 'clipboard-text-search' + _outlineName
            //     break;
            // case 'settings':
            //     _name = 'tune';
            // break;
            // // default:
            //     break;
        }

        return <MaterialCommunityIcons name={_name} color={_color} size={_size} />
    }

    const _renderBtn = (isFocused, options, route) => {
        let _label = options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
                ? options.title
                : route.name
        const _icon = _navIcon(route.name, isFocused)

        if (_label) {
            _label = _label[0].toUpperCase() + _label.slice(1)
        }

        if (isFocused) {
            return <Animated.View style={[styles.navActionBtnFocused]}>
                <Animated.Text style={[styles.navActionText]} ellipsizeMode="clip">
                    {_icon} {_label}
                </Animated.Text>
            </Animated.View>
        } else {
            return <Animated.View style={[styles.navActionBtn]}>
                {_icon}
            </Animated.View>
        }
    }

    return <View style={styles.container}>
        {state.routes.map((route, index) => {
            const { options } = descriptors[route.key]

            const isFocused = state.index === index

            return <TouchableWithoutFeedback
                key={index}
                style={styles.navAction}
                onPress={() => onPress(isFocused, route)}
                accessibilityRole="button"
                testID={options.tabBarTestID}
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
            >
                {_renderBtn(isFocused, options, route)}
            </TouchableWithoutFeedback>
        })}
    </View>
}


const styles = StyleSheet.create({
    container: {
        // borderWidth: 1,
        flexDirection: 'row',
        width: '80%',
        alignSelf: 'center',
        position: 'absolute',
        bottom: 25,
        // backgroundColor: 'red',
        backgroundColor: Color.white,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 44,
    },
    navAction: {
        flex: 1,
        height: 40,
        color: Color.deepskyblue
    },
    navActionBtn: {
        // borderWidth: 1,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignContent: 'center',
        paddingLeft: '7%',
        color: Color.white
    },
    navActionBtnFocused: {
        paddingVertical: 10,
        width: '38%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: Color.deepskyblue,
        borderRadius: 30,
    },
    navActionText: {
        color: '#fff',
        fontSize: 16,
    },
})

export default TabBar
