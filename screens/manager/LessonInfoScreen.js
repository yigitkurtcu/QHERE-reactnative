import React from 'react';
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import TabBarIcon from '../../components/TabBarIcon';
import LessonInfo from '../../components/manager/LessonInfo';
import { headerStyle } from '../../config/config';


//import LessonStudents from '../../components/manager/LessonStudents';

export default class LessonInfoScreen extends React.Component {
  state = {lesson: this.props.navigation.getParam('lesson')}
  
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.lesson.className,
      headerRight: (
        <View style={styles.headerRightContainer}>
          <TouchableOpacity onPress={() => { navigation.navigate('ManagerNotificationsList', {lesson: navigation.state.params.lesson}) }}>
            <TabBarIcon
              name={ Platform.OS === 'ios'? `ios-chatboxes`: 'md-chatboxes' }
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
  headerRightContainer: {
    marginRight: 12,
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
