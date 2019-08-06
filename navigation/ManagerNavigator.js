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
import LessonCreateNotificationsScreen from '../screens/manager/LessonCreateNotificationsScreen';

const ManagerHomeStack = createStackNavigator({
  ManagerHome: HomeScreen
});

ManagerHomeStack.navigationOptions = {
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? `ios-home` : 'md-home'} />
};

const ManagerCreateClassStack = createStackNavigator({
  ManagerCreateClass: CreateClassScreen
});

ManagerCreateClassStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? `ios-create` : 'md-create'} />
  )
};

const ManagerLessonsStack = createStackNavigator({
  ManagerLessons: LessonsScreen,
  ManagerLessonInfo: LessonInfoScreen,
  ManagerLessonEdit: LessonEditScreen,
  ManagerNotificationsList: LessonNotificationsListScreen,
  ManagerCreateNotification: LessonCreateNotificationsScreen
});

ManagerLessonsStack.navigationOptions = {
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? `ios-book` : 'md-book'} />
};

export default createBottomTabNavigator(
  {
    ManagerHome: ManagerHomeStack,
    ManagerCreateClass: ManagerCreateClassStack,
    ManagerLessons: ManagerLessonsStack
  },
  {
    tabBarOptions: {
      showLabel: false
    }
  },
  { initialRouteName: 'ManagerHome' }
);
