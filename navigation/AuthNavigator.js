import { createStackNavigator } from 'react-navigation';

import LandingScreen from '../screens/auth/LandingScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';

export default createStackNavigator({
  Landing: LandingScreen,
  Login: LoginScreen,
  Register: RegisterScreen
});
