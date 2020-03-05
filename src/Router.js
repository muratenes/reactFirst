import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
// screens
import Home from "./screens/Home";
import Contacts from "./screens/Contacts";
import Settings from "./screens/Settings";
import Icon from 'react-native-vector-icons/Ionicons';

const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (<Icon name="ios-home" size={22} color={tintColor} />)
        }
    },
    Contacts: {
        screen: Contacts,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (<Icon name="ios-contacts" size={22} color={tintColor} />)
        }
    },
    Settings: {
        screen: Settings,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (<Icon name="ios-settings" size={22} color={tintColor} />)
        }
    }
}, {
    tabBarOptions: {
        activeTintColor: 'black'
    }
});

export default createAppContainer(TabNavigator);


