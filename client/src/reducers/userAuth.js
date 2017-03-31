import { routerReducer as routing } from 'react-router-redux';
import { userAuth as ActionTypes } from '../actions';
import userAuthService from '../utils/userAuthService';

export default function authReducer(state = {
  isAuthenticated: !userAuthService.isTokenExpired(),
  isFetching: false,
  profile: userAuthService.getProfile(),
  error: null
}, action) {
  switch (action.type) {
    case ActionTypes.USER_LOGIN_REQUEST:
      return { ...state, isFetching: true, error: null };
    case ActionTypes.USER_LOGIN_SUCCESS:
      return { ...state, isFetching: false, isAuthenticated: true, profile: action.profile };
    case ActionTypes.USER_LOGIN_ERROR:
      return { ...state, isFetching: false, isAuthenticated: false, profile: {}, error: action.error };
    case ActionTypes.USER_LOGOUT_SUCCESS:
      return { ...state, isAuthenticated: false, profile: {} };
    default:
      return state;
  }
}
