import { StackNavigator } from 'react-navigation'
import LoginScreen from '../Containers/LoginScreen'
import RegisterScreen from '../Containers/RegisterScreen'
import ProtectedScreen from '../Containers/ProtectedScreen'
import CreateTripScreen from '../Containers/CreateTripScreen'
import SearchedTripsScreen from '../Containers/SearchedTripsScreen'
import SearchTripScreen from '../Containers/SearchTripScreen'
import TripScreen from '../Containers/TripScreen'
import UserProfileScreen from '../Containers/UserProfileScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LoginScreen: { screen: LoginScreen },
  RegisterScreen: { screen: RegisterScreen },
  ProtectedScreen: { screen: ProtectedScreen },
  CreateTripScreen: { screen: CreateTripScreen },
  SearchedTripsScreen: { screen: SearchedTripsScreen },
  SearchTripScreen: { screen: SearchTripScreen },
  TripScreen: { screen: TripScreen },
  UserProfileScreen: { screen: UserProfileScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LoginScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
