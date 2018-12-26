import React from 'react';
import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import ClassForm from '../../components/manager/ClassForm';
import { headerStyle } from '../../config/config';

export default class ManagerCreateClassScreen extends React.Component {
  static navigationOptions = {
    title: 'Sınıf Oluştur',
    ...headerStyle
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
          <View>
            <ClassForm />
          </View>
        </TouchableWithoutFeedback>
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
  }
});
