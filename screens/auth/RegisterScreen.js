import React from 'react';
import RegisterForm from '../../components/RegisterForm';

export default class RegisterScreen extends React.Component {
  static navigationOptions = {
    title: 'Register',
  };

  render() {
    return (
      <RegisterForm onSuccess={() => {this.props.navigation.navigate('Teacher')}} />
    );
  }
}