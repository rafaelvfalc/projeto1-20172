import { NavigationActions } from 'react-navigation';
import { createActions } from 'reduxsauce'
import AppNavigation from '../Navigation/AppNavigation'

const { Types, Creators } = createActions({
  goRegisterScreen: null,
  goLoginScreen: null,
  goProtectedScreen: null,
  goCreateTripScreen: null,
});

export const NavTypes = Types
export default Creators

export const reducer = (state, action) => {
  switch (action.type) {
    case Types.GO_REGISTER_SCREEN: {
      return AppNavigation.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'RegisterScreen' }),
        state
      );
    }
    case Types.GO_LOGIN_SCREEN: {
      return AppNavigation.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'LoginScreen '}),
        state
      )
    }
    case Types.GO_PROTECTED_SCREEN: {
      return AppNavigation.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'ProtectedScreen' }),
        state
      )
    }
    case Types.GO_CREATE_TRIP_SCREEN: {
      return AppNavigation.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'CreateTripScreen' }),
        state
      )
    }
    default:
      return AppNavigation.router.getStateForAction(action, state) || state;
  }
}
