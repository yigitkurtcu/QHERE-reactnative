import React from 'react';
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import TabBarIcon from '../../components/TabBarIcon';
import LessonList from '../../components/student/LessonList';
import { headerStyle } from '../../config/config';

export default class StudentHomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Açık Dersler',
      headerRight: (
        <View style={styles.headerRightContainer}>
          <TouchableOpacity onPress={() => { navigation.navigate('RequestedClass') }}>
            <TabBarIcon
              name={ Platform.OS === 'ios'? `ios-time`: 'md-time' }
            />
          </TouchableOpacity>
        </View>
      ),
      ...headerStyle
    };
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
  },
  headerRightContainer: {
    marginRight: 12,
  }
});
