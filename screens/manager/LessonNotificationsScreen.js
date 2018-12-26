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

export default class CreateNotifications extends React.Component {
  static navigationOptions = {
    title: 'Duyuru Oluştur',
    ...headerStyle
  };

  render() {
    return (
      <View style={styles.container}>
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
