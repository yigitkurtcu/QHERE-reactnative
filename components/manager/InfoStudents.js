import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { CardSectionColumn } from '../common'

export default class Lesson extends React.Component {

  render () {
    const { fullName, schoolNumber } = this.props.student;
    
    return (
        <CardSectionColumn>
            <Text style={styles.boldText}>Öğrenci Adı: <Text style={ styles.normalText }>{ fullName }</Text></Text>
            <Text style={styles.boldText}>Öğrenci Numarası: <Text style={ styles.normalText }>{ schoolNumber }</Text></Text>
            <Text style={styles.boldText}>Yoklama Durumu: <Text style={ styles.normalText }>0 / 0</Text></Text>
        </CardSectionColumn>  
    );
  }
}

const styles = {
    normalText: {
        fontWeight: 'normal',
    },
    boldText: {
        fontSize: 16,
        fontWeight: 'bold',
    }
}
