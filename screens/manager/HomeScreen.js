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

import RequestList from '../../components/manager/RequestList';
import { headerStyle } from '../../config/config';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Ders İstekleri',
    ...headerStyle
  };

  render() {
    return (
      <View style={styles.container}>
        <RequestList />
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
