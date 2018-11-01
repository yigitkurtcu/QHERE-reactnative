import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { clearStore } from '../../helpers/localStore';
import MyLessonList from '../../components/student/MyLessonList';

export default class StudentLessonsScreen extends React.Component {
  static navigationOptions = {
    title: 'QHERE',
  };

  logout = () => {
    clearStore();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text  style={ styles.headerTextStyle }>Derslerim</Text> 
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
  },
  headerTextStyle: {
    color: '#fff',
    fontSize: 22,
    alignSelf: 'center',
    marginVertical: 20,
    fontWeight: 'bold'
  },
});
