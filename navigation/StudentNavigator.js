import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import StudentHomeScreen from '../screens/student/StudentHomeScreen';
import QRCameraScreen from '../screens/student/QRCameraScreen';
import StudentLessonsScreen from '../screens/student/StudentLessonsScreen';

const StudentHome = createStackNavigator({
  StudentHome: StudentHomeScreen,
});

StudentHome.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={ Platform.OS === 'ios'? `ios-home${focused ? '' : '-outline'}`: 'md-home' }
    />
  ),
};

const QRCamera = createStackNavigator({
  QRCamera: QRCameraScreen,
});

QRCamera.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={ Platform.OS === 'ios'? `ios-camera${focused ? '' : '-outline'}`: 'md-camera' }
    />
  ),
};

const StudentLessons = createStackNavigator({
  StudentLessons: StudentLessonsScreen,
});

StudentLessons.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={ Platform.OS === 'ios'? `ios-book${focused ? '' : '-outline'}`: 'md-book' }
    />
  ),
};

export default createBottomTabNavigator({
  StudentHome,
  QRCamera,
  StudentLessons
}, 
{
  tabBarOptions: {
    showLabel: false
  }
},
{initialRouteName: 'StudentHome'});