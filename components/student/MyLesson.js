import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Card, CardSection } from '../common';
import { getDiscontinuity }  from '../../helpers/http';

export default class Lesson extends React.Component {
    state = {qhereCount: 0, rollCall: 0} 

    componentWillMount() {
        getDiscontinuity(this.props.lessonInstance._id)
        .then(res => {
            this.setState({qhereCount: res.data.qhereCount, rollCall: res.data.rollCall})
        })
        .catch(err => {
            console.log('Err:', err)
        })
    }

    render () {
        const { className, managerName, discontinuity } = this.props.lessonInstance;
        const { qhereCount, rollCall } = this.state;
        return (
            <Card>  
                <CardSection>
                        <View style={styles.headerContentStyle}>
                            <Text style={styles.lessonHeader}>Dersin Adı: <Text  style={ styles.lessonText }>{ className } </Text></Text>
    
                            <Text style={styles.lessonHeader}>Ders Hocası: <Text style={ styles.lessonText }>{ managerName } </Text></Text>
                            
                            <Text style={styles.lessonHeader}>Devamsızlık:  <Text style={ styles.lessonText }>{ discontinuity } Ders </Text></Text>

                            <Text style={styles.lessonHeader}>Yoklama:  <Text style={ styles.lessonText }>{ rollCall } / { qhereCount } Ders </Text></Text>
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
