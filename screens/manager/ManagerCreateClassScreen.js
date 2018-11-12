import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import ClassForm from '../../components/manager/ClassForm';

export default class ManagerCreateClassScreen extends React.Component {
  static navigationOptions = {
    title: 'QHERE',
  };

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView behavior="position" enabled>
          <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
            <View>
              <Text style={styles.headerText}>QHERE</Text>
              <Text style={styles.infoText}>QR Kod Yoklama Sistemi</Text>
              <ClassForm />
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </View>
    );
  }



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#01579b',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    fontSize: 50,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  infoText: {
    fontSize: 20,
    alignSelf: 'center',
    margin: 10,
  },
});
