import Immutable from 'seamless-immutable'
import { createReducer, createActions } from 'reduxsauce'

import CreateApi from '../Services/Api'

import NavCreators from './NavigationRedux'

/* ---- Types and Actions Creators ---- */
const { Types, Creators } = createActions({
  loginRequest: null,
  loginSuccess: ['token'],
  loginFail: null,
  registerRequest: null,
  registerSuccess: null,
  registerFail: null,
})

export const AuthTypes = Types
export default Creators

/* ---- Initial State ----- */

export const INITIAL_STATE = Immutable({
  loadingAuth: false,
  token: '',
})

/* ---- Reducers ----- */
const loginRequest = (state = INITIAL_STATE, action) => {
  return state.merge({ loadingAuth: true })
}

const loginSuccess = (state = INITIAL_STATE, action) => {
  return state.merge({ loadingAuth: false, token: action.token })
}

const loginFail = (state = INITIAL_STATE, action) => {
  return state.merge({ loadingAuth: false })
}

const registerRequest = (state = INITIAL_STATE, action) => {
  return state.merge({ loadingAuth: true })
}

const registerSuccess = (state = INITIAL_STATE, action) => {
  return state.merge({ loadingAuth: false })
}

const registerFail = (state = INITIAL_STATE, action) => {
  return state.merge({ loadingAuth: false })
}

/* ---- Redux Thunk ---- */

export const login = (username, password) => (dispatch) => {
  const api = CreateApi()

  dispatch({ type: Types.LOGIN_REQUEST })
  return api
    .loginUser(username, password)
    .then(response => {
      if (response.ok) {
        alert(`Success! You may now access protected content.`)
        dispatch(NavCreators.goProtectedScreen())
        AsyncStorage.setItem('jwt', response.data.token)
        return dispatch(Creators.loginSuccess(response.data.token))
      } else {
        alert('There was an error logging in.')
        return dispatch(Creators.loginFail())
      }
    })
    .catch(error => dispatch(Creators.loginFail()))
}

export const register = (username, password) => (dispatch) => {
  const api = CreateApi()

  dispatch({ type: Types.REGISTER_REQUEST })
  return api
    .registerUser(username, password)
    .then(response => {
      if (response.ok) {
        alert('Success! You may now log in.')
        dispatch(NavCreators.goRegisterScreen())
        return dispatch(Creators.registerSuccess())
      } else {
        alert(response.data.error)
        return dispatch(Creators.registerFail())
      }
    })
    .catch(error => {
      alert('There was an error creating your account.')
      dispatch(Creators.registerFail())
    })
}

/* ---- Hookup Reducers to Types ---- */

const HANDLERS = {
  [Types.LOGIN_REQUEST]: loginRequest,
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAIL]: loginFail,
  [Types.REGISTER_SUCCESS]: registerSuccess,
  [Types.REGISTER_FAIL]: registerFail,
  [Types.REGISTER_REQUEST]: registerRequest,
}

export const reducer = createReducer(INITIAL_STATE, HANDLERS)
