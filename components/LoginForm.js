import React from 'react';
import {
  View,
  TouchableOpacity,
  Text
} from 'react-native';
import { setKey } from '../helpers/localStore';

import { Login }  from '../helpers/http'
import { Button, Card, CardSection, Input } from './common';
import { red } from 'ansi-colors';
class LoginForm extends React.Component {
  state = { email: '', password: ''}

  userTypeRender() {
    if(this.props.userType == 'student') {
      return (        
        <CardSection>
            <TouchableOpacity onPress={this.props.goRegister}>
              <Text style={styles.registerText}>Hesabınız yoksa üye olmak için tıklayınız!</Text>
            </TouchableOpacity>
        </CardSection>
      )
    }
  }
  
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
              if(res.data.userType == 'Student')
                this.props.navigation.navigate('Student')
              else
                this.props.navigation.navigate('Teacher')
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
  


  render () {
    return (
      <View>
        <Card>
            <CardSection>
                <Input 
                  label="Email" 
                  placeholder="user@gmail.com" 
                  value= {this.state.email}
                  onChangeText={email => this.setState({ email })} 
                />
              </CardSection>

            <CardSection>
                <Input 
                  label="Şifre" 
                  placeholder="password"
                  secureTextEntry
                  value= {this.state.password}
                  onChangeText={password => this.setState({ password })} 
                />
            </CardSection>
  
            <CardSection>
              <Button 
                onPress={() => {this.doLogin()}}
              >Giriş Yap</Button>
            </CardSection>
            {this.userTypeRender()}
          </Card>
      </View>
      );
  }
    
  }


export default LoginForm;