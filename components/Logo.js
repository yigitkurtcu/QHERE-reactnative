import React from 'react';
import {
    Image,
    Text,
    View,
    StyleSheet
} from 'react-native';

export default class LoginScreen extends React.Component {
 
  render() {
      return (
        <View style={styles.container}>
            <Image 
                source={require('../assets/images/logo.png')} 
            />
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container : {
      flexGrow: 0.1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ffffff'
    },
    logoText : {
        fontSize: 18,
        color:'#000'
    }
  });