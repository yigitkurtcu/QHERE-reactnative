import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/student/HomeScreen';
import QRCameraScreen from '../screens/student/QRCameraScreen';
import LessonsScreen from '../screens/student/LessonsScreen';
import RequestedClassScreen from '../screens/student/RequestedClassScreen';
import NotificationsScreen from '../screens/student/NotificationsScreen';

const StudentHome = createStackNavigator({
  StudentHome: HomeScreen,
  RequestedClass: RequestedClassScreen
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
  StudentLessons: LessonsScreen,
  StudentNotifications: NotificationsScreen
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
    showLabel: false,
    style: {
      backgroundColor: '#fff',
    },
  }
},
{initialRouteName: 'StudentHome'});