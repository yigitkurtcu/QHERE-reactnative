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

import { clearStore } from '../../helpers/localStore';
import MyLessonList from '../../components/manager/MyLessonList';
import { headerStyle } from '../../config/config';
export default class LessonsScreen extends React.Component {
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

        <MyLessonList navigation={this.props.navigation}/>
        <TouchableOpacity onPress={this.logout}>
          <Text style={styles.logoutText}>LOGOUT</Text>
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
  logoutText: {
    fontSize: 20,
    color:'#fff',
    margin: 5,
    alignSelf: 'flex-end',
  }
});
