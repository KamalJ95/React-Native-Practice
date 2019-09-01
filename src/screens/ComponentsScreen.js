import React from 'react';
import { Text, StyleSheet, View } from 'react-native';


//Function that returns some JSX
const ComponentsScreen = () => {
    const name = <Text style={styles.smallerTextStyle}>My name is Kamal</Text>;
    return (
    <View>
        <Text style={styles.textStyle}>Getting started with React Native!</Text>
        {name}
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    smallerTextStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;