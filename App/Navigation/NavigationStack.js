import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import LaunchScreen from 'App/Screens/Launch';
import SignInScreen from 'App/Screens/Auth/SignInScreen';
import SignUpScreen from 'App/Screens/Auth/SignUpScreen';
import OnBoardScreen from 'App/Screens/OnBoard';
import styles from './styles';

// Manifest of possible screens
const MainStack = createStackNavigator({
  SignInScreen: { screen: SignInScreen }
}, {
  // Default config for all screens
  // headerMode: 'none',
  initialRouteName: 'SignInScreen',

  navigationOptions: {
    headerStyle: styles.header
  }
});

const AuthStack = createStackNavigator({
  OnBoardScreen: { screen: OnBoardScreen },
  SignInScreen: { screen: SignInScreen },
  SignUpScreen: { screen: SignUpScreen }
}, {
  navigationOptions: {
    headerStyle: styles.header,
    headerTitleStyle: styles.title
  }
});

const PrimaryNav = createSwitchNavigator({
  AuthLoading: LaunchScreen,
  App: MainStack,
  Auth: AuthStack
});

export default PrimaryNav;
