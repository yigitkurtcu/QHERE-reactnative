import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import TeacherHomeScreen from '../screens/teacher/TeacherHomeScreen';

const TeacherHomeStack = createStackNavigator({
  TeacherHome: TeacherHomeScreen,
});

TeacherHomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

export default createBottomTabNavigator({
  TeacherHome: TeacherHomeStack
}, {initialRouteName: 'TeacherHome',});
