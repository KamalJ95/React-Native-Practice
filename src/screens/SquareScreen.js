import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColourCounter from '../components/ColourCounter'

const COLOUR_INCREMENT = 20;

const reducer = (state, action) => {

    switch (action.colourToChange){
        case 'red':
            if (state.red + action.amount > 255 || state.red + action.amount < 0) {
                return state;
            }
            return {...state, red: state.red + action.amount};
        case 'green':
                if (state.green + action.amount > 255 || state.green + action.amount < 0) {
                    return state;
                }
            return {...state, green: state.green + action.amount};
        case 'blue':
             return state.blue + action.amount > 255 || state.blue + action.amount < 0 ? state :  {...state, blue: state.blue + action.amount};
        default:
            return state;
    }
};

const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0});
    const { red, green, blue } = state;

    return ( 
        <View>
            <ColourCounter
                onIncrease={() => dispatch({ colourToChange: 'red', amount: COLOUR_INCREMENT })}
                onDecrease={() => dispatch({ colourToChange: 'red', amount: -1 * COLOUR_INCREMENT })}
                colour="red"
            />
            <ColourCounter 
                onIncrease={() => dispatch({ colourToChange: 'green', amount: COLOUR_INCREMENT})}
                onDecrease={() => dispatch({ colourToChange: 'green', amount: -1 * COLOUR_INCREMENT})}
                colour="green"
            />  
            <ColourCounter 
                onIncrease={() => dispatch({ colourToChange: 'blue', amount: COLOUR_INCREMENT})}
                onDecrease={() => dispatch({ colourToChange: 'blue', amount: -1 * COLOUR_INCREMENT})}
                colour="blue"
            />
            <View 
                style={{
                        height: 100, 
                        width: 100, 
                        backgroundColor: `rgb(${red},${green},${blue})`
                        }}
            />
    </View>
    );
};

        

const styles = StyleSheet.create({

});

export default SquareScreen;