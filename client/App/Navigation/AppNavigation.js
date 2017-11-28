import { StackNavigator } from 'react-navigation'
import HomeScreen from '../Containers/HomeScreen'
import LoginScreen from '../Containers/LoginScreen'
import RegisterScreen from '../Containers/RegisterScreen'
import ProtectedScreen from '../Containers/ProtectedScreen'
import HomeLoginScreen from '../Containers/HomeLoginScreen'
import CreateTripScreen from '../Containers/CreateTripScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  HomeScreen: { screen: HomeScreen },
  LoginScreen: { screen: LoginScreen },
  RegisterScreen: { screen: RegisterScreen },
  ProtectedScreen: { screen: ProtectedScreen },
  HomeLoginScreen: { screen: HomeLoginScreen },
  CreateTripScreen: { screen: CreateTripScreen },
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'HomeScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
