import { StackNavigator } from 'react-navigation'
import HomeScreen from '../Containers/HomeScreen'
import LoginScreen from '../Containers/LoginScreen'
import RegisterScreen from '../Containers/RegisterScreen'
import ProtectedScreen from '../Containers/ProtectedScreen'
import HomeLoginScreen from '../Containers/HomeLoginScreen'
import CreateTripScreen from '../Containers/CreateTripScreen'
import SearchTravelScreen from '../Containers/SearchTravelScreen'
import TripScreen from '../Containers/TripScreen'
import ShowTravelScreen from '../Containers/ShowTravelScreen'
import TripInfoScreen from '../Containers/TripInfoScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  HomeScreen: { screen: HomeScreen },
  LoginScreen: { screen: LoginScreen },
  RegisterScreen: { screen: RegisterScreen },
  ProtectedScreen: { screen: ProtectedScreen },
  HomeLoginScreen: { screen: HomeLoginScreen },
  CreateTripScreen: { screen: CreateTripScreen },
  SearchTravelScreen: { screen: SearchTravelScreen },
  TripScreen: { screen: TripScreen },
  ShowTravelScreen: { screen: ShowTravelScreen },
  TripInfoScreen: { screen: TripInfoScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LoginScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
