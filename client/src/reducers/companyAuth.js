import { routerReducer as routing } from 'react-router-redux';
import { companyAuth as ActionTypes } from '../actions';
import CompanyAuthService from '../utils/companyAuthService';

export default function authReducer(state = {
  isAuthenticated: !CompanyAuthService.isTokenExpired(),
  isFetching: false,
  profile: CompanyAuthService.getProfile(),
  error: null
}, action) {
  switch (action.type) {
    case ActionTypes.COMPANY_LOGIN_REQUEST:
      return { ...state, isFetching: true, error: null };
    case ActionTypes.COMPANY_LOGIN_SUCCESS:
      return { ...state, isFetching: false, isAuthenticated: true, profile: action.profile };
    case ActionTypes.COMPANY_LOGIN_ERROR:
      return { ...state, isFetching: false, isAuthenticated: false, profile: {}, error: action.error };
    case ActionTypes.COMPANY_LOGOUT_SUCCESS:
      return { ...state, isAuthenticated: false, profile: {} };
    default:
      return state;
  }
}
