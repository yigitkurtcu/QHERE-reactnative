import React from 'react';
import {
  Keyboard,
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
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
          <View>
            <Text style={styles.headerTextStyle}>Sınıf Oluştur</Text>
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
  },
  headerTextStyle: {
    color: '#fff',
    fontSize: 22,
    alignSelf: 'center',
    marginVertical: 20,
    fontWeight: 'bold',
    marginTop: 50
  },
});
