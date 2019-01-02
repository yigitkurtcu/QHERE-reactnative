import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import NotificationList from '../../components/student/NotificationList';
import { headerStyle } from '../../config/config';

export default class NotificationsScreen extends React.Component {
  static navigationOptions = {
    title: 'Ders Duyuruları',
    ...headerStyle
  };

  render() {
    return (
      <View style={styles.container}>
        <NotificationList />
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
