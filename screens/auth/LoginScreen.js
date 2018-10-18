import React from 'react';
import LoginForm from '../../components/LoginForm';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };

  render() {
    return (
        <LoginForm onSuccess={() => {this.props.navigation.navigate('Student')}} />
    );
  }
}