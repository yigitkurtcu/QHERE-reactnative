import React from 'react'
import { Text, View } from 'react-native'
import { Card, CardSection } from '../common'

export default class Lesson extends React.Component {
    render () {
        const { className, managerName, quota, discontinuity } = this.props.lessonInstance;
        return (
            <Card>  
                <CardSection>
                    <View style={styles.headerContentStyle}>
                        <Text  style={ styles.lessonText }>Dersin Adı: { className }  </Text>   
                        <Text style={ styles.lessonText }>Ders Hocası: { managerName } </Text>
                        <Text style={ styles.lessonText }>Kontenjan: { quota } </Text>
                        <Text style={ styles.lessonText }>Devamsızlık: { discontinuity } Ders </Text>
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
    lessonText: {
        fontSize: 16
    }
}
