import React from 'react';
import {
    Text,
    View,
    Modal,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { Gender } from '../common';
import { Register } from '../../helpers/http';

class RegisterForm extends React.Component {
    state = { fullName: '', schoolNumber: '', gender: 'Cinsiyet', email: '', password: '', showGender: false}
    doRegister() {
        var user = {
            fullName: this.state.fullName,
            schoolNumber: this.state.schoolNumber,
            gender: this.state.gender,
            email: this.state.email,
            password: this.state.password
        };
        Register(user)
        .then(res => {
            this.props.navigation.navigate('Login')
        }).catch(err => {
            alert(err.message)
        })
    }

    genderText() {
        if(this.state.gender != 'Cinsiyet'){
            return(
                <TouchableOpacity style={styles.modal} onPress={() => {this.setState({showGender: true})}}>
                    <Text style={styles.modalText}>{this.state.gender}</Text>
                </TouchableOpacity>      
            );     
        }else {
            return(
                <TouchableOpacity style={styles.modal} onPress={() => {this.setState({showGender: true})}}>
                    <Text style={styles.modalTextDefault}>{this.state.gender}</Text>
                </TouchableOpacity>      
            );
        }
    }

    render () {
        return (
            <View>

                    <TextInput 
                        placeholder="Ad Soyad" 
                        autoCorrect={false}
                        underlineColorAndroid={'transparent'}
                        style={styles.input}
                        onChangeText={(fullName, itemIndex) => this.setState({ fullName })}
                        value={this.state.fullName}
                    />

                    <TextInput 
                        placeholder="Okul Numarası"
                        autoCorrect={false}
                        underlineColorAndroid={'transparent'}
                        style={styles.input}
                        value= {this.state.schoolNumber}
                        onChangeText={schoolNumber => this.setState({ schoolNumber })} 
                    />
                
                    {this.genderText()}

                    <TextInput 
                        placeholder="Email" 
                        autoCorrect={false}
                        underlineColorAndroid={'transparent'}
                        style={styles.input}
                        value= {this.state.email}
                        onChangeText={email => this.setState({ email })} 
                    />
                    <TextInput 
                        placeholder="Şifre"
                        autoCorrect={false}
                        underlineColorAndroid={'transparent'}
                        style={styles.input}
                        secureTextEntry
                        value= {this.state.password}
                        onChangeText={password => this.setState({ password })} 
                    />

                    <TouchableOpacity style={styles.button} onPress={() => {this.doRegister()}}>
                        <Text style={styles.buttonText}>Kayıt Ol</Text>
                    </TouchableOpacity>

                    <Gender
                        visible={this.state.showGender} 
                        onErkek={() => {this.setState({showGender: false, gender:'Erkek'})}}
                        onKadin={() => {this.setState({showGender: false, gender:'Kadın'})}}>
                            Cinsiyetinizi seçiniz.
                    </Gender>

            </View>

        );
    }
  }

const styles = StyleSheet.create({
    container : {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    input: {
      fontSize: 16,
      height: 40,
      width: 300, 
      backgroundColor: '#fafafa',
      borderWidth: 1,
      borderColor: '#c7c7c7',
      borderRadius: 5,
      color: '#000000',
      marginVertical: 10,
      paddingHorizontal: 15
    },
    button: {
      height: 40,
      width:300,
      backgroundColor: '#66ccff',
      borderRadius: 5,
      marginVertical: 10,
      paddingVertical: 10,
    },
    buttonText: {
      fontSize: 16,
      textAlign: 'center'
    },
    modal: {
        height: 40,
        width:300,
        backgroundColor: '#fafafa',
        borderWidth: 1,
        borderColor: '#c7c7c7',
        borderRadius: 5,
        marginVertical: 10,
        paddingVertical: 10,
    },
    modalText: {
        fontSize: 16,
        paddingLeft: 12,
        color: '#000000'
    },
    modalTextDefault: {
        fontSize: 16,
        paddingLeft: 12,
        color: '#cacaca'
    }
  });

 export default RegisterForm;