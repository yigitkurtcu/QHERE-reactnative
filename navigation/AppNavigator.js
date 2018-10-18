import { createSwitchNavigator } from 'react-navigation';

import AuthNavigator from './AuthNavigator';
import TeacherNavigator from './TeacherNavigator';
import StudentNavigator from './StudentNavigator';

export default createSwitchNavigator({
  Auth: AuthNavigator,
  Teacher: TeacherNavigator,
  Student: StudentNavigator
}, { initialRouteName: 'Auth', });