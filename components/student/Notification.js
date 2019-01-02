import React from 'react'
import { Text, View } from 'react-native'
import { Card, CardSection } from '../common'

export default class Notification extends React.Component {

    render () {
        const { className, title, content, sendDate } = this.props.notificationInstance;
        return (
            <Card>  
              <CardSection>
                  <View style={styles.headerContentStyle}>
                      <Text style={styles.lessonHeader}>Dersin Adı: <Text  style={ styles.lessonText }>{ className } </Text></Text>

                      <Text style={styles.lessonHeader}>Başlık: <Text style={ styles.lessonText }>{ title } </Text></Text>

                      <Text style={styles.lessonHeader}>İçerik: <Text style={ styles.lessonText }> { content } </Text></Text>

                      <Text style={styles.lessonHeader}>Gönderildiği tarih: <Text style={ styles.lessonText }> { sendDate } </Text></Text>
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
