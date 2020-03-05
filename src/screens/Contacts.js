import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import ContactList from "../components/ContactList";

export default class Contacts extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ContactList navigation={this.props.navigation}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
