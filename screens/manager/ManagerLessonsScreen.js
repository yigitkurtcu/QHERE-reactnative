import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { clearStore } from '../../helpers/localStore';

export default class ManagerLessonsScreen extends React.Component {
  static navigationOptions = {
    title: 'QHERE',
  };

  logout = () => {
    clearStore();
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.logout}>
          <Text style={{fontSize:20, color:'#000'}}>LOGOUT</Text>
        </TouchableOpacity>
      </View>
    );
  }



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
