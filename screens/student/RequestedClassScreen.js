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

import RequestedList from '../../components/student/RequestedList';
import { headerStyle } from '../../config/config';

export default class RequestedClassScreen extends React.Component {
  static navigationOptions = {
    title: 'Başvurulan Dersler',
    headerBackTitle: null,
    headerTintColor: '#fff',
    headerTitleStyle: {
      alignSelf: 'center',
      fontSize: 20,
      fontWeight: 'bold'
    },
    headerStyle: {
      backgroundColor: '#01579b',
      borderBottomWidth: 0,
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <RequestedList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#01579b',
  }
});
