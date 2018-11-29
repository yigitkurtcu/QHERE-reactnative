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
export default class ManagerLessonsScreen extends React.Component {
  static navigationOptions = {
    title: 'Derslerim',
  };

  logout = () => {
    clearStore();
  }
  //<Text  style={ styles.headerTextStyle }>Derslerim</Text> 
  
  render() {
    return (
      <View style={styles.container}>

        <MyLessonList navigation={this.props.navigation}/>
        <TouchableOpacity onPress={this.logout}>
          <Text style={{fontSize:20, color:'#000'}}>LOGOUT</Text>
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
    fontWeight: 'bold',
    marginTop: 20
  },
});
