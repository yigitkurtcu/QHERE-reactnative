import React from 'react';
import RegisterForm from '../../components/RegisterForm';
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
      <ScrollView contentContainerStyle={styles.container} >
        <View style={styles.logoContainer}>
          <Logo />
        </View>
        <RegisterForm 
          navigation={this.props.navigation}
          onSuccess={() => {this.props.navigation.navigate('Teacher')}} 
        />
      </ScrollView>
       
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoContainer: {
    marginBottom: 50,
  }
});