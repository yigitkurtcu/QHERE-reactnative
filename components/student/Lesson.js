import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Card, CardSection } from '../common'
import Confirm from '../Confirm';
export default class Lesson extends React.Component {
    state = {showConfirmation: false} 

    doConfirmation = () => {
        console.log('...', this.props.lessonInstance)
        this.setState({showConfirmation: false})
        //TO-DO: Post JoinRequest
    }

    render () {

        const { className, managerName, quota, discontinuity } = this.props.lessonInstance;
        return (
            <Card>  
                <TouchableOpacity onPress={() => {this.setState({showConfirmation: true})}}>
                    <CardSection>
                            <View style={styles.headerContentStyle}>
                                <Text style={styles.lessonHeader}>Dersin Adı: <Text  style={ styles.lessonText }>{ className } </Text></Text>
        
                                <Text style={styles.lessonHeader}>Ders Hocası: <Text style={ styles.lessonText }>{ managerName } </Text></Text>
                                
                                <Text style={styles.lessonHeader}>Kontenjan: <Text style={ styles.lessonText }> { quota } </Text></Text>
                                
                                <Text style={styles.lessonHeader}>Devamsızlık:  <Text style={ styles.lessonText }>{ discontinuity } Ders </Text></Text>
                            </View>
                    </CardSection>
                </TouchableOpacity>   
                <Confirm
                    visible={this.state.showConfirmation} 
                    accept={this.doConfirmation.bind(this)}
                    decline={() => {this.setState({showConfirmation: false})}}>
                        Derse katılmak istediğinizden emin misiniz ?
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
