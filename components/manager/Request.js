import React from 'react'
import { Text, View, TouchableOpacity, Platform } from 'react-native'
import { Card, CardSection, CardSectionColumn } from '../common'
import Confirm from '../Confirm';
import Icon from '../Icon';
import { approveStudent, rejectStudent }  from '../../helpers/http'

export default class Request extends React.Component {
    state = {showApprove: false, showReject: false} 

    doApprove = () => {
        approveStudent(this.props.requestInstance._id)
        .then(res => {
            console.log('Res:', res)
        })
        .catch(err => {
            console.log('Err:', err)
        })
        this.setState({showApprove: false})
        //TODO MAKEREFRESH
    }

    doReject = () => {
        rejectStudent(this.props.requestInstance._id)
        .then(res => {
            console.log('Res:', res)
        })
        .catch(err => {
            console.log('Err:', err)
        })
        this.setState({showReject: false})
    }

    render () {

        const { className, studentName, studentNumber } = this.props.requestInstance;
        return (
            <Card>  
                <CardSectionColumn>
                    <Text style={styles.requestHeader}>Başvurulan Ders: <Text  style={ styles.requestText }>{ className } </Text></Text>
                    <Text style={styles.requestHeader}>Öğrenci Adı: <Text style={ styles.requestText }>{ studentName } </Text></Text>
                    <Text style={styles.requestHeader}>Öğrenci Numarası: <Text style={ styles.requestText }> { studentNumber } </Text></Text>                        
                </CardSectionColumn>

                <CardSection>
                    <TouchableOpacity style={styles.buttonStyle} onPress={() => {this.setState({showApprove: true})}}>
                        <Icon name={Platform.OS === 'ios' ? 'ios-checkmark' : 'md-checkmark'} />
                        <Text style={styles.textStyle}>Onayla</Text>
                    </TouchableOpacity>   

                    <TouchableOpacity style={styles.buttonStyle} onPress={() => {this.setState({showReject: true})}}>
                        <Icon name={Platform.OS === 'ios' ? 'ios-close' : 'md-close'} color={'#ff0000'} />
                        <Text style={styles.textStyle}>Reddet</Text>
                    </TouchableOpacity>   
                </CardSection>
                
                <Confirm
                    visible={this.state.showApprove} 
                    accept={this.doApprove.bind(this)}
                    decline={() => {this.setState({showApprove: false})}}>
                        { studentName } adlı öğrencinin { className } dersine katılmasını onaylıyor musunuz ?
                </Confirm>  

                <Confirm
                    visible={this.state.showReject} 
                    accept={this.doReject.bind(this)}
                    decline={() => {this.setState({showReject: false})}}>
                        { studentName } adlı öğrencinin { className } dersine katılmasını reddetmek istediğinize emin misiniz?
                </Confirm>  
            </Card>
        );
    }
   
}

const styles = {
    requestHeader: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    requestText: {
        fontWeight: 'normal'
    },
    textStyle: {
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        color: "#000"
    },
    buttonStyle: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'stretch',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        marginLeft: 5,
        marginRight: 5,
        paddingLeft: 10,
        borderColor: "#000"
    }
}
