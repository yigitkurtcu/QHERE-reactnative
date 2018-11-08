import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Card, CardSection } from '../common'
import Confirm from '../Confirm';
import { joinClass }  from '../../helpers/http'

export default class Request extends React.Component {
    state = {showConfirmation: false} 

    doConfirmation = () => {
        joinClass(this.props.requestInstance._id)
        .then(res => {
            console.log('Res:', res)
        })
        .catch(err => {
            console.log('Err:', err)
        })
        this.setState({showConfirmation: false})
    }

    render () {

        const { className, managerName, quota, discontinuity } = this.props.requestInstance;
        return (
            <Card>  
                <TouchableOpacity onPress={() => {this.setState({showConfirmation: true})}}>
                    <CardSection>
                            <View style={styles.headerContentStyle}>
                                <Text style={styles.requestHeader}>Dersin Adı: <Text  style={ styles.requestText }>{ className } </Text></Text>
        
                                <Text style={styles.requestHeader}>Ders Hocası: <Text style={ styles.requestText }>{ managerName } </Text></Text>
                                
                                <Text style={styles.requestHeader}>Kontenjan: <Text style={ styles.requestText }> { quota } </Text></Text>
                                
                                <Text style={styles.requestHeader}>Devamsızlık:  <Text style={ styles.requestText }>{ discontinuity } Ders </Text></Text>
                            </View>
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
    requestHeader: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    requestText: {
        fontWeight: 'normal'
    }
}
