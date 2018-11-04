import React from 'react';
import {
  TextInput,
  View,
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';
import axios from 'axios';

import { setKey } from '../../helpers/localStore';
import { Login }  from '../../helpers/http'

class LoginForm extends React.Component {
  state = { email: '', password: ''}

  
  doLogin() {    
    var user = {
        email: this.state.email,
        password: this.state.password
    };
    Login(user)
    .then(res => {
      setKey('accessToken', res.data.token.accessToken)
      .then(() => {
        setKey('userType', res.data.userType)
        .then(() => {
          axios.defaults.headers.common['Authorization'] = res.data.token.accessToken;
            this.props.navigation.navigate(res.data.userType)

        }).catch(err => {
          console.log(err);
        })
      }).catch(err => {
        console.log(err);
      })
    }).catch(err => {
      console.log(err);
    })
  }

  doForgot() {
    this.props.navigation.navigate('Forgot')
  }
  
  render () {
    return (
      <View style={styles.container}>
        <TextInput 
          placeholder="Email"
          autoCorrect={false}
          underlineColorAndroid={'transparent'}
          style={styles.input}
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
        />
        <TextInput 
          placeholder="Şifre"
          autoCorrect={false}
          underlineColorAndroid={'transparent'}
          secureTextEntry={true}
          style={styles.input}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />
        <TouchableOpacity style={styles.forgotButton} onPress={() => {this.doForgot()}}>
              <Text style={styles.forgotText}>Şifreni mi Unuttun?</Text>
        </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {this.doLogin()}}>
                <Text style={styles.buttonText} >Giriş Yap</Text>
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
    },
    forgotButton: {
      marginVertical: 5,
      width:300,
    },
    forgotText: {
      color: '#3399ff',
      fontSize: 14,
      fontWeight:'500',
      textAlign: 'right'
    }
  });

export default LoginForm;