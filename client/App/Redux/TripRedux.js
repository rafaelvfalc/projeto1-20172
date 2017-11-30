import Immutable from 'seamless-immutable'
import { AsyncStorage } from 'react-native'
import { createReducer, createActions } from 'reduxsauce'

import CreateApi from '../Services/Api'

import NavCreators from './NavigationRedux'

const { Types, Creators } = createActions({
  createTripRequest: null,
  createTripSuccess: null,
  createTripFail: null,
})

export const TripTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  loading: false,
})

const createTripRequest = (state = INITIAL_STATE, action) => {
  return state.merge({ loading: true })
}

const createTripSuccess = (state = INITIAL_STATE, action) => {
  return state.merge({ loading: false })
}

const createTripFail = (state = INITIAL_STATE, action) => {
  return state.merge({ loading: false })
}

export const createTrip = (tripPlan) => (dispatch) => {
  // TODO (mdantas): create generic method to retrieve JWT data
  return AsyncStorage.getItem('jwt', (err, token) => {
    if (err) {
      return dispatch(Creators.createTripFail())
    }

    const api = CreateApi(token)
    return api
      .createTrip(tripPlan, new Date())
      .then(() => {
        alert('Trip created successfully')
        dispatch(NavCreators.goProtectedScreen())
        dispatch(Creators.createTripSuccess())
      })
      .catch((err) => {
        alert(`There was an error when creating your trip ${err}`)
      })
  })
}

const HANDLERS = {
  [Types.CREATE_TRIP_REQUEST]: createTripRequest,
  [Types.CREATE_TRIP_SUCCESS]: createTripSuccess,
  [Types.CREATE_TRIP_FAIL]: createTripFail,
}

export const reducer = createReducer(INITIAL_STATE, HANDLERS)
