import React from 'react';
import {
  TextInput,
  View,
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';

import { Forgot }  from '../../helpers/http'

class ForgotForm extends React.Component {
    state = { email: '' }

  doForgot() {
    Forgot(this.state.email)
    .then(res => {
      console.log(res)
      this.props.navigation.navigate('ChangePassword')
    })
    .catch(err => {
      console.log(err)
    })
    
  }

  render () {
    return (
      <View style={styles.container}>,
        <TextInput 
          placeholder="Email"
          autoCorrect={false}
          underlineColorAndroid={'transparent'}
          style={styles.input}
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
        />
          <TouchableOpacity style={styles.button} onPress={() => {this.doForgot()}}>
                <Text style={styles.buttonText}>Şifremi Sıfırla</Text>
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

export default ForgotForm;