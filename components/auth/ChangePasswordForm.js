import React from 'react';
import {
  TextInput,
  View,
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';

import { resetPassword }  from '../../helpers/http'

class ChangePasswordForm extends React.Component {
    state = { code: '', password: '', verifypassword: '' }

    doResetPassword() {
        if(this.state.code != '' && this.state.password != '' && this.state.verifypassword != ''){
            if(this.state.password === this.state.verifypassword){
                var instance = {
                    code: this.state.code,
                    newPassword: this.state.password
                }
                resetPassword(instance)
                .then(res => {
                  console.log(res)
                  this.props.navigation.navigate('Login')
                })
                .catch(err => {
                  alert(err)
                  console.log(err)
                })
            }else {
              alert('Şifreler birbirleriyle uyuşmuyor.')
            }
        } else {
          alert('Hepsini doldurmalısın.')
          }  
  }

  render () {
    return (
      <View style={styles.container}>,
        <TextInput 
          placeholder="Kod"
          autoCorrect={false}
          underlineColorAndroid={'transparent'}
          style={styles.input}
          onChangeText={(code) => this.setState({code})}
          value={this.state.code}
        />

         <TextInput 
          placeholder="Şifre"
          autoCorrect={false}
          secureTextEntry={true}
          underlineColorAndroid={'transparent'}
          style={styles.input}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />

         <TextInput 
          placeholder="Şifre Doğrulama"
          autoCorrect={false}
          secureTextEntry={true}
          underlineColorAndroid={'transparent'}
          style={styles.input}
          onChangeText={(verifypassword) => this.setState({verifypassword})}
          value={this.state.verifypassword}
        />
          <TouchableOpacity style={styles.button} onPress={() => {this.doResetPassword()}}>
                <Text style={styles.buttonText}>Yeni Şifre Oluştur</Text>
          </TouchableOpacity>
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
      height: 50,
      width:300,
      backgroundColor: '#66ccff',
      borderRadius: 5,
      marginVertical: 10,
      paddingVertical: 10,
    },
    buttonText: {
      fontSize: 18,
      fontWeight:'500',
      textAlign: 'center'
    }
  });

export default ChangePasswordForm;