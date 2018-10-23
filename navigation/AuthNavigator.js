import { createStackNavigator } from 'react-navigation';

import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';

export default createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
});
