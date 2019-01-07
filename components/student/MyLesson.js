import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import { Card, CardSection } from '../common';
import { getDiscontinuity }  from '../../helpers/http';

export default class Lesson extends React.Component {
    state = { rollCall: 0, qhereCount: 0 } 

    componentWillMount() {
        getDiscontinuity(this.props.lessonInstance._id)
        .then(res => {
            this.setState({qhereCount: res.data.qhereCount, rollCall: res.data.rollCall})
        })
        .catch(err => {
            console.log(err)
        })
    }

    progressBarValue() {
        if(this.state.qhereCount === 0)
            return 0
        return (this.state.rollCall / this.state.qhereCount) * 100
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
                            
                            <ProgressBarAnimated
                                width={Dimensions.get('screen').width - 30}
                                height={16}
                                value={this.progressBarValue()}
                            />
                        
                        </View>
                </CardSection>  
            </Card>
        );
    }
   
}

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    lessonHeader: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    lessonText: {
        fontWeight: 'normal'
    }
}
