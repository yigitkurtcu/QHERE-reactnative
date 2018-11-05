import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import ManagerHomeScreen from '../screens/manager/ManagerHomeScreen';
import ManagerCreateClassScreen from '../screens/manager/ManagerCreateClassScreen';
import ManagerLessonsScreen from '../screens/manager/ManagerLessonsScreen';

const ManagerHomeStack = createStackNavigator({
  ManagerHome: ManagerHomeScreen,
});

ManagerHomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={ Platform.OS === 'ios'? `ios-home${focused ? '' : '-outline'}`: 'md-home' }
    />
  ),
};

const ManagerCreateClassStack = createStackNavigator({
  ManagerCreateClass: ManagerCreateClassScreen,
});

ManagerCreateClassStack.navigationOptions = {
  tabBarLabel: 'Sınıf Oluştur',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={ Platform.OS === 'ios'? `ios-create${focused ? '' : '-outline'}`: 'md-create' }
    />
  ),
};

const ManagerLessonsStack = createStackNavigator({
  ManagerLessons: ManagerLessonsScreen,
});

ManagerLessonsStack.navigationOptions = {
  tabBarLabel: 'Derslerim',
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
}, {initialRouteName: 'ManagerHome',});
