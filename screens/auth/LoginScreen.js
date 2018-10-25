import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet
} from 'react-native';
import { getKey } from '../../helpers/localStore';
import LoginForm from '../../components/LoginForm';
import Logo from '../../components/Logo';
export default class LoginScreen extends React.Component {
   static navigationOptions = {
    headerStyle: {
      backgroundColor: '#ffffff',
      borderBottomWidth: 0,
    }
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
        <View style={styles.container}>
          <Logo />
          <LoginForm  
            navigation={this.props.navigation}
          />
          <TouchableOpacity onPress={() => {this.props.navigation.navigate('Register')}}>
              <Text style={styles.goRegisterText}>Hesabınız yoksa üye olmak için tıklayınız!</Text>
          </TouchableOpacity>
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
  goRegisterText: {
    color: '#000',
    fontSize: 14,
    fontWeight:'500',
    textAlign: 'center',
    paddingBottom: 20,
  }
});