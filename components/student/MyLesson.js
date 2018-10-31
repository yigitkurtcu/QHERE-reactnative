import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Card, CardSection } from '../common'

export default class Lesson extends React.Component {

    render () {
        const { className, managerName, quota, discontinuity } = this.props.lessonInstance;
        return (
            <Card>  
                <TouchableOpacity onPress={() => {this.setState({showConfirmation: true})}}>
                    <CardSection>
                            <View style={styles.headerContentStyle}>
                                <Text style={styles.lessonHeader}>Dersin Adı: <Text  style={ styles.lessonText }>{ className } </Text></Text>
        
                                <Text style={styles.lessonHeader}>Ders Hocası: <Text style={ styles.lessonText }>{ managerName } </Text></Text>
                                
                                <Text style={styles.lessonHeader}>Devamsızlık:  <Text style={ styles.lessonText }>{ discontinuity } Ders </Text></Text>
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
