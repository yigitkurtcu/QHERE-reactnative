import React from 'react'
import { Text, View } from 'react-native'
import { Card, CardSection } from '../common'

export default class Requested extends React.Component {

    render () {
        const { className, managerName, quota, requestDate } = this.props.requestInstance;
        return (
            <Card>  
              <CardSection>
                  <View style={styles.headerContentStyle}>
                      <Text style={styles.lessonHeader}>Dersin Adı: <Text  style={ styles.lessonText }>{ className } </Text></Text>

                      <Text style={styles.lessonHeader}>Ders Hocası: <Text style={ styles.lessonText }>{ managerName } </Text></Text>

                      <Text style={styles.lessonHeader}>Başvurduğunuz tarih: <Text style={ styles.lessonText }> {requestDate.slice(0, 10)} </Text></Text>
                  </View>
              </CardSection>
            </Card>
        );
    }
   
}

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    lessonHeader: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    lessonText: {
        fontWeight: 'normal'
    }
}
