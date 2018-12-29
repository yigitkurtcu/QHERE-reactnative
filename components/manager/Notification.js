import React from 'react'
import { Text } from 'react-native'
import { Card, CardSectionColumn } from '../common'

export default class Notification extends React.Component {
    render () {

        const { title, content, sendDate } = this.props.notificationInstance;
        return (
            <Card>  
                <CardSectionColumn>
                    <Text style={styles.requestHeader}>Duyuru Adı: <Text  style={ styles.requestText }>{ title } </Text></Text>
                    <Text style={styles.requestHeader}>İçerik: <Text style={ styles.requestText }>{ content } </Text></Text>
                    <Text style={styles.requestHeader}>Tarih: <Text style={ styles.requestText }> { sendDate } </Text></Text>                        
                </CardSectionColumn>
            </Card>
        );
    }
   
}

const styles = {
    requestHeader: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    requestText: {
        fontWeight: 'normal'
    }
}
