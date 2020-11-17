import React from 'react';
import {
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight
} from 'react-native';


const style = StyleSheet.create({
    button: {
        fontSize: 30,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888'
    },
    operationButtons: {
        color: '#fff',
        backgroundColor: '#fa8231'
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 4) * 2,
    },
    buttonTripple: {
        width: (Dimensions.get('window').width / 4) * 3,
    }
});

export default props => {
    const stylesButton = [style.button];
    if (props.double) stylesButton.push(style.buttonDouble);
    if (props.tripple) stylesButton.push(style.buttonTripple);

    return (
        <TouchableHighlight onPress={ props.onClick }>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}