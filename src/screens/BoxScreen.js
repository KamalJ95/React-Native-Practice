import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const BoxScreen = () => {
    return <View style={styles.viewStyle}>
        <Text style={styles.textOneStyle}>  Child #1</Text>
        <Text style={styles.textTwoStyle}>  Child #2</Text>
        <Text style={styles.textThreeStyle}>  Child #3</Text>
        <View style={styles.viewStyle} />
    </View>
  
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 1,
        borderColor: 'black',
        height: 102,
        backgroundColor: '#ffd9a4'
    },
    textOneStyle: {
        borderWidth: 3,
        borderColor: 'red',
        height: 50,
        width: 100,
        backgroundColor: 'red'
        
    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor: 'cyan',
        height: 50,
        width: 100,
        alignSelf: "center",
        backgroundColor: 'cyan'
  
    },
    textThreeStyle: {
        borderWidth: 3,
        borderColor: 'limegreen',
        height: 50,
        width: 100,
        alignSelf: "flex-end",
        bottom: 100,
        backgroundColor: 'limegreen'
    }
});

export default BoxScreen; 