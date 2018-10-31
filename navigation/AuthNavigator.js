import { createStackNavigator } from 'react-navigation';

import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import ForgotScreen from '../screens/auth/ForgotScreen';

export default createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,
  Forgot: ForgotScreen
});