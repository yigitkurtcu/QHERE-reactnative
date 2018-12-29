import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { clearStore } from '../../helpers/localStore';
import MyLessonList from '../../components/student/MyLessonList';
import { headerStyle } from '../../config/config';

export default class StudentLessonsScreen extends React.Component {
  static navigationOptions = {
    title: 'Derslerim',
    ...headerStyle
  };

  logout = () => {
    clearStore();
    this.props.navigation.navigate('Auth')
  }

  render() {
    return (
      <View style={styles.container}>
        <MyLessonList />
        <TouchableOpacity onPress={this.logout}>
          <Text style={{fontSize:20, color:'#fff'}}>LOGOUT</Text>
        </TouchableOpacity>
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
