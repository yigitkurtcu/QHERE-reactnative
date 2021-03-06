import React from 'react'
import { Text, View } from 'react-native'

const Card = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
}

const styles = {
    containerStyle : {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width : 0, height : 2},
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 8,
        marginRight: 8,
        marginTop: 12,
    }
}

export { Card };