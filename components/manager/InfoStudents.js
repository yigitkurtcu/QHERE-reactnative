import React from 'react'
import { Text, Dimensions } from 'react-native'
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import { CardSectionColumn } from '../common'

export default class Lesson extends React.Component {

    progressBarValue() {
        if(this.props.qhereCount === 0)
            return 0
        return (this.props.student.studentDiscontinuity / this.props.qhereCount) * 100
    }

    render () {
        const { fullName, schoolNumber, studentDiscontinuity } = this.props.student;
        const qhereCount  = this.props.qhereCount;
    
        return (
            <CardSectionColumn>
                <Text style={styles.boldText}>Öğrenci Adı: <Text style={ styles.normalText }>{ fullName }</Text></Text>
                <Text style={styles.boldText}>Öğrenci Numarası: <Text style={ styles.normalText }>{ schoolNumber }</Text></Text>
                <Text style={styles.boldText}>Yoklama Durumu: <Text style={ styles.normalText }>{ studentDiscontinuity } / { qhereCount }</Text></Text>
                <ProgressBarAnimated
                    width={Dimensions.get('screen').width - 30}
                    height={16}
                    value={this.progressBarValue()}
                />
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
