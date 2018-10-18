import React from 'react';
import {
  Text,
  View
} from 'react-native';
import { Button, Card, CardSection, Header } from '../../components/common';
import { MonoText } from '../../components/StyledText';

export default class LandingScreen extends React.Component {
  static navigationOptions = {
    title: 'QHERE Yoklama Sistemi',
  };

  render() {
    return (
        <View>
            <CardSection>
                <Button
                    onPress={() => {this.props.navigation.navigate('Login')}}
                >Giriş Yap</Button>
            </CardSection>
            <CardSection>
                <Button
                    onPress={() => {this.props.navigation.navigate('Register')}}
                >Kayıt Ol</Button>
            </CardSection>
        </View>
    );
  }
}