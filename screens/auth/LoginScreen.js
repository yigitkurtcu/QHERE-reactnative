import React from 'react';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  Text,
  View,
  StyleSheet,
  Keyboard,
  KeyboardAvoidingView
} from 'react-native';
import axios from 'axios';

import { getKey,checkStore } from '../../helpers/localStore';
import { checkToken }  from '../../helpers/http'

import LoginForm from '../../components/auth/LoginForm';

export default class LoginScreen extends React.Component {
   static navigationOptions = {
    headerStyle: {
      backgroundColor: '#ffffff',
      borderBottomWidth: 0,
    }
  }; 

  componentDidMount() {
    checkStore()
    .then(res => { console.log(res)})
    .catch(err => { console.log(err) })

    getKey('accessToken')
    .then(token => {
      if(token != null){
        getKey('userType')
        .then(userType => {
          if(userType != null){
            token = token.slice(1, token.length-1);
            userType = userType.slice(1,userType.length-1);
            axios.defaults.headers.common['Authorization'] = token;
            checkToken()
            .then(() => { this.props.navigation.navigate(userType)})
            .catch(err => { console.log(err.message) })
          }
        }).catch(err => {
          console.log(err)
        })
      }
    }).catch(err => {
      console.log(err)
    })
  }

  render() {
      return (
        <View style={styles.container}>
          <KeyboardAvoidingView behavior="padding" enabled>
            <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
              <View>
                <Text style={styles.headerText}>QHERE</Text>
                <Text style={styles.infoText}>QR Kod Yoklama Sistemi</Text>
                <LoginForm navigation={this.props.navigation}/>
                <TouchableOpacity onPress={() => {this.props.navigation.navigate('Register')}}>
                    <Text style={styles.goRegisterText}>Hesabınız yoksa üye olmak için tıklayınız!</Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    backgroundColor: '#ffffff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    fontSize: 50,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  infoText: {
    fontSize: 20,
    alignSelf: 'center',
    margin: 10,
  },
  goRegisterText: {
    color: '#000',
    fontSize: 14,
    fontWeight:'500',
    textAlign: 'center',
    paddingBottom: 20,
  }
});