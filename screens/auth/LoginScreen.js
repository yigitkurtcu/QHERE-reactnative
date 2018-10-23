import React from 'react';
import {
  View
} from 'react-native';
import { getKey } from '../../helpers/localStore';
import LoginForm from '../../components/LoginForm';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };

  componentDidMount() {
    getKey('accessToken')
    .then(token => {
      if(token != null){
        getKey('userType')
        .then(userType => {
          token = token.slice(1, token.length-1);
          userType = userType.slice(1,userType.length-1);
          if(userType != null)
            this.props.navigation.navigate(userType)
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
      <View>
        <LoginForm 
          navigation={this.props.navigation}
          goRegister={() => {this.props.navigation.navigate('Register')}}
        />
      </View>
    );
  }
}