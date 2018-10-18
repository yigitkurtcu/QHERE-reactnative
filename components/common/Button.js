import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children, color }) => {
    const { buttonStyle, textStyle } = styles
    const buttonColor = color ? color : '#007aff'
    return (
        <TouchableOpacity onPress={ onPress } style={ [buttonStyle, { borderColor: buttonColor }] }>
            <Text style={ [textStyle, {color: buttonColor}] }>
                {children}
            </Text>
        </TouchableOpacity>
        
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        marginLeft: 5,
        marginRight: 5,
    }
};

export { Button };