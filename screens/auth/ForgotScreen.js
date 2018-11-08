import React from 'react';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Keyboard
} from 'react-native';


import ForgotForm from '../../components/auth/ForgotForm';

export default class ForgotScreen extends React.Component {
   static navigationOptions = {
    headerStyle: {
      backgroundColor: '#ffffff',
      borderBottomWidth: 0,
    }
  }; 
  render() {
      return (
        <View style={styles.container}>
          <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
            <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
              <View>
                <Text style={styles.headerText}>QHERE</Text>
                <ForgotForm navigation={this.props.navigation}/>
                <TouchableOpacity onPress={() => {this.props.navigation.navigate('ChangePassword')}}>
                  <Text style={styles.footerText}>Zaten bir kodun var mı?</Text>
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
  footerText: {
    color: '#000',
    fontSize: 16,
    fontWeight:'500',
    textAlign: 'center',
    paddingBottom: 20,
  }
});