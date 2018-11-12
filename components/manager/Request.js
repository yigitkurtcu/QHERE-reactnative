import React from 'react'
import { Text, View, TouchableOpacity, Platform } from 'react-native'
import { Card, CardSection } from '../common'
import Confirm from '../Confirm';
import Icon from '../Icon';
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

        const { className, studentName, studentNumber } = this.props.requestInstance;
        return (
            <Card>  

                    <CardSection>
                            <View style={styles.headerContentStyle}>
                                <Text style={styles.requestHeader}>Başvurulan Ders: <Text  style={ styles.requestText }>{ className } </Text></Text>
        
                                <Text style={styles.requestHeader}>Öğrenci Adı: <Text style={ styles.requestText }>{ studentName } </Text></Text>
                                
                                <Text style={styles.requestHeader}>Öğrenci Numarası: <Text style={ styles.requestText }> { studentNumber } </Text></Text>
                                <View style={styles.iconView}>
                                    <View style={{alignSelf: 'flex-start'}}>
                                        <TouchableOpacity onPress={() => {this.setState({showConfirmation: true})}}>
                                            <Icon name={Platform.OS === 'ios' ? 'ios-checkmark' : 'md-checkmark'} />
                                        </TouchableOpacity>   
                                    </View>
                                    <View style={{alignSelf: 'flex-end'}}>
                                        <TouchableOpacity onPress={() => {this.setState({showConfirmation: true})}}>
                                            <Icon name={Platform.OS === 'ios' ? 'ios-close' : 'md-close'} color={'#ff0000'} />
                                        </TouchableOpacity>   
                                    </View>
                                </View>
                            </View>
                    </CardSection>


                <Confirm
                    visible={this.state.showConfirmation} 
                    accept={this.doConfirmation.bind(this)}
                    decline={() => {this.setState({showConfirmation: false})}}>
                        { studentName } adlı öğrencinin { className } dersine katılmasını onaylıyor musunuz ?
                </Confirm>  
            </Card>
        );
    }
   
}

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    iconView: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginStart: 50,
        marginEnd: 50,
    },
    requestHeader: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    requestText: {
        fontWeight: 'normal'
    }
}
