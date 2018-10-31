import React from 'react';
import RegisterForm from '../../components/auth/RegisterForm';
import {
  TouchableOpacity,
  Text,
  ScrollView,
  StyleSheet,
  View
} from 'react-native';
import Logo from '../../components/Logo';

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
        <Text style={styles.headerText}>QHERE</Text>
        <Text style={styles.infoText}>QR Kod Yoklama Sistemi</Text>
        <RegisterForm 
          navigation={this.props.navigation}
          onSuccess={() => {this.props.navigation.navigate('Teacher')}} 
        />
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