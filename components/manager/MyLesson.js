import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Card, CardSection } from '../common'

export default class Lesson extends React.Component {

    render () {
        const { className, discontinuity } = this.props.lessonInstance;
        return (
            <Card>  
                <TouchableOpacity onPress={() => {this.props.navigation.navigate('ManagerLessonInfo', {lesson: this.props.lessonInstance})}}>
                    <CardSection>
                            <View style={styles.headerContentStyle}>
                                <Text style={styles.lessonHeader}>Dersin Adı: <Text  style={ styles.lessonText }>{ className } </Text></Text>
                                
                                <Text style={styles.lessonHeader}>Devamsızlık:  <Text style={ styles.lessonText }>{ discontinuity } Ders </Text></Text>
                                
                                <Text style={styles.lessonHeader}>İşlenen Ders:  <Text style={ styles.lessonText }> 3 Hafta </Text></Text>
                            </View>
                    </CardSection>
                </TouchableOpacity>   
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
