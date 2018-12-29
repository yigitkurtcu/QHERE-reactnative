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

import CreateNotificationForm from '../../components/manager/CreateNotificationForm';
import { headerStyle } from '../../config/config';

export default class CreateNotificationsScreen extends React.Component {
  state = {lesson: this.props.navigation.getParam('lesson')}

  static navigationOptions = {
    title: 'Duyuru Oluştur',
    ...headerStyle
  };

  render() {
    return (
      <View style={styles.container}>
        <CreateNotificationForm lesson={this.state.lesson}/>
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
