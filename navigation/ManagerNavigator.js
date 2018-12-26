import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/manager/HomeScreen';
import CreateClassScreen from '../screens/manager/CreateClassScreen';
import LessonsScreen from '../screens/manager/LessonsScreen';
import LessonInfoScreen from '../screens/manager/LessonInfoScreen';
import LessonEditScreen from '../screens/manager/LessonEditScreen';
import LessonNotificationsListScreen from '../screens/manager/LessonNotificationsListScreen';

const ManagerHomeStack = createStackNavigator({
  ManagerHome: HomeScreen,
});

ManagerHomeStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={ Platform.OS === 'ios'? `ios-home${focused ? '' : '-outline'}`: 'md-home' }
    />
  ),
};

const ManagerCreateClassStack = createStackNavigator({
  ManagerCreateClass: CreateClassScreen,
});

ManagerCreateClassStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={ Platform.OS === 'ios'? `ios-create${focused ? '' : '-outline'}`: 'md-create' }
    />
  ),
};

const ManagerLessonsStack = createStackNavigator({
  ManagerLessons: LessonsScreen,
  ManagerLessonInfo: LessonInfoScreen,
  ManagerLessonEdit: LessonEditScreen,
  ManagerNotificationsList: LessonNotificationsListScreen
});

ManagerLessonsStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={ Platform.OS === 'ios'? `ios-book${focused ? '' : '-outline'}`: 'md-book' }
    />
  ),
};

export default createBottomTabNavigator({
  ManagerHome: ManagerHomeStack,
  ManagerCreateClass: ManagerCreateClassStack,
  ManagerLessons: ManagerLessonsStack
}, 
{
  tabBarOptions: {
    showLabel: false
  }
}, {initialRouteName: 'ManagerHome'});
