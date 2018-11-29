import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Card, CardSection, Button } from '../common'
import Confirm from '../Confirm';
import { joinClass }  from '../../helpers/http'

export default class Lesson extends React.Component {
    state = {showConfirmation: false} 

    doConfirmation = () => {
        joinClass(this.props.lessonInstance._id)
        .then(res => {
            console.log('Res:', res)
        })
        .catch(err => {
            console.log('Err:', err)
        })
        this.setState({showConfirmation: false})
    }

    render () {

        const { className, managerName, quota, discontinuity, lastJoinTime } = this.props.lessonInstance;
        return (
            <Card>  
                <TouchableOpacity onPress={() => {this.setState({showConfirmation: true})}}>
                    <CardSection>
                            <View style={styles.headerContentStyle}>
                                <Text style={styles.lessonHeader}>Dersin Adı: <Text  style={ styles.lessonText }>{ className } </Text></Text>
        
                                <Text style={styles.lessonHeader}>Ders Hocası: <Text style={ styles.lessonText }>{ managerName } </Text></Text>
                                
                                <Text style={styles.lessonHeader}>Kontenjan: <Text style={ styles.lessonText }> { quota } </Text></Text>
                                
                                <Text style={styles.lessonHeader}>Devamsızlık:  <Text style={ styles.lessonText }>{ discontinuity } Ders </Text></Text>

                                <Text style={styles.lessonHeader}>Son katılım tarihi: <Text style={ styles.lessonText }> {lastJoinTime.slice(0, 10)} </Text></Text>
                            </View>
                    </CardSection>
                    <CardSection>
                        <Button color={"#000"}>Derse Katıl</Button>
                    </CardSection>
                </TouchableOpacity>   
                <Confirm
                    visible={this.state.showConfirmation} 
                    accept={this.doConfirmation.bind(this)}
                    decline={() => {this.setState({showConfirmation: false})}}>
                        { className } dersine katılmak istediğinizden emin misiniz ?
                </Confirm>  
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
