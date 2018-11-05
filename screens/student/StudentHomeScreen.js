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
export default class StudentHomeScreen extends React.Component {
  static navigationOptions = {
    title: 'QHERE',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text  style={ styles.headerTextStyle }>Açık Dersler</Text> 
        <LessonList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#01579b',
  },
  headerTextStyle: {
    color: '#fff',
    fontSize: 22,
    alignSelf: 'center',
    marginVertical: 20,
    fontWeight: 'bold'
  }
});
