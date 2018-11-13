import { createSwitchNavigator } from 'react-navigation';

import AuthNavigator from './AuthNavigator';
import ManagerNavigator from './ManagerNavigator';
import StudentNavigator from './StudentNavigator';

export default createSwitchNavigator({
  Auth: AuthNavigator,
  Manager: ManagerNavigator,
  Student: StudentNavigator
}, { initialRouteName: 'Auth' });