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

import LessonList from '../../components/student/LessonList';
import { headerStyle } from '../../config/config';

export default class StudentHomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Açık Dersler',
    ...headerStyle
  };

  render() {
    return (
      <View style={styles.container}>
        <LessonList />
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
