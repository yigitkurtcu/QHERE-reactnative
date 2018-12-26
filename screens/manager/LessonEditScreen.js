import React from 'react';
import {
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import ClassEditForm from '../../components/manager/ClassEditForm';
import { headerStyle } from '../../config/config';
//import LessonStudents from '../../components/manager/LessonStudents';

export default class LessonEditScreen extends React.Component {
  state = {lesson: this.props.navigation.getParam('lesson')}
  
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Dersi Düzenle',
      ...headerStyle
    };
  };

  render() {  
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
          <View>
            <ClassEditForm lesson={this.state.lesson}/>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#01579b'
  }
});
