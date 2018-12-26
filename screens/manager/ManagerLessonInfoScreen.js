import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import LessonInfo from '../../components/manager/LessonInfo';
import { headerStyle } from '../../config/config';
//import LessonStudents from '../../components/manager/LessonStudents';

export default class ManagerLessonInfoScreen extends React.Component {
  state = {lesson: this.props.navigation.getParam('lesson')}
  
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.lesson.className,
      ...headerStyle
    };
  };

  render() {  
    return (
      <View style={styles.container}>
        <LessonInfo navigation= {this.props.navigation} lesson={this.state.lesson} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#01579b'
  },
  headerTextStyle: {
    color: '#fff',
    fontSize: 22,
    alignSelf: 'center',
    marginTop: 20,
    fontWeight: 'bold'
  },
  smallHeaderTextStyle: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 10,
    marginBottom: 10,
    fontWeight: 'bold'
  }
});
