import React from 'react'
import { Text, View } from 'react-native'

const Header = (props) => {
    const {viewStyle} = styles;
    const textStyle = {
        fontSize: parseInt(props.fontSize)
      };

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
}

const styles = {
    viewStyle : {
        backgroundColor : '#F8F8F8',
        justifyContent : 'center',
        alignItems : 'center',
        height : 60,
        paddingTop : 15,
        shadowColor: '#000',
        shadowOffset: {width : 0, height : 2},
        shadowOpacity: 0.2,
        position : 'relative'
    },
}

export { Header };