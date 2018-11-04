import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet
} from 'react-native';


import ChangePasswordForm from '../../components/auth/ChangePasswordForm';

export default class ChangePasswordScreen extends React.Component {
   static navigationOptions = {
    headerStyle: {
      backgroundColor: '#ffffff',
      borderBottomWidth: 0,
    }
  }; 
  render() {
      return (
        <View style={styles.container}>
            <Text style={styles.headerText}>QHERE</Text>
            <ChangePasswordForm navigation={this.props.navigation}/>
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
  }
});