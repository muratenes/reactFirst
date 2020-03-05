import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class SettingsModal extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.modalText}>Settings Modal</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red'
    },
    modalText: {
        fontSize: 24,
        color: 'white'
    }
});
