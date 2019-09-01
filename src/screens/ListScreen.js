import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';


const ListScreen = () => {
    const friends = [
        { name: 'Friend #1', Age: '20'},
        { name: 'Friend #2', Age: '45'},
        { name: 'Friend #3', Age: '43'},
        { name: 'Friend #4', Age: '32'},
        { name: 'Friend #5', Age: '27'},
        { name: 'Friend #6', Age: '53'},
        { name: 'Friend #7', Age: '19'},
        { name: 'Friend #8', Age: '29'},

    ];
    return (
    <FlatList
        keyExtractor={(friend) => friend.name}
        data={friends} 
        renderItem={({item}) => {
            return <Text style={styles.textStyle}>{item.name} +is {item.Age} years old</Text>
        }}/>
    );
};


const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;