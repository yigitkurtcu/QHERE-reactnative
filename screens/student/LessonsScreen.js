import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import TabBarIcon from '../../components/TabBarIcon';
import MyLessonList from '../../components/student/MyLessonList';

import { clearStore } from '../../helpers/localStore';
import { headerStyle } from '../../config/config';

export default class StudentLessonsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Derslerim',
      headerRight: (
        <View style={styles.headerRightContainer}>
          <TouchableOpacity onPress={() => { navigation.navigate('StudentNotifications') }}>
            <TabBarIcon
              name={ Platform.OS === 'ios'? `ios-notifications`: 'md-notifications' }
            />
          </TouchableOpacity>
        </View>
      ),
      ...headerStyle
    };
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
  },
  headerRightContainer: {
    marginRight: 12,
  }
});
