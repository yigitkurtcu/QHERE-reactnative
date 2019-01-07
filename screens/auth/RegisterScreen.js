import React from 'react';
import RegisterForm from '../../components/auth/RegisterForm';
import {
  TouchableWithoutFeedback,
  Text,
  StyleSheet,
  View,
  Keyboard,
  KeyboardAvoidingView
} from 'react-native';

export default class RegisterScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#ffffff',
      borderBottomWidth: 0,
    }
  }; 

  render() {
    return (
        <View style={styles.container}>
          <KeyboardAvoidingView behavior="position" enabled>
            <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
              <View>
                <Text style={styles.headerText}>QHERE</Text>
                <Text style={styles.infoText}>QR Kod Yoklama Sistemi</Text>
                <RegisterForm navigation={this.props.navigation} />
              </View>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 50,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  infoText: {
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 80,
  },
});