import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import ManagerHomeScreen from '../screens/manager/ManagerHomeScreen';
import ManagerCreateClassScreen from '../screens/manager/ManagerCreateClassScreen';
import ManagerLessonsScreen from '../screens/manager/ManagerLessonsScreen';
import ManagerLessonInfoScreen from '../screens/manager/ManagerLessonInfoScreen';

const ManagerHomeStack = createStackNavigator({
  ManagerHome: ManagerHomeScreen,
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
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
  ManagerCreateClass: ManagerCreateClassScreen,
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
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
  ManagerLessons: ManagerLessonsScreen,
  ManagerLessonInfo: ManagerLessonInfoScreen,
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
