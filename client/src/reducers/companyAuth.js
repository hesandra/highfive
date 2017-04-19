import { routerReducer as routing } from 'react-router-redux';
import { companyAuth as ActionTypes } from '../actions';
import CompanyAuthService from '../utils/companyAuthService';

export default function authReducer(state = {
  isAuthenticated: !CompanyAuthService.isTokenExpired(),
  isFetching: false,
  profile: CompanyAuthService.getProfile(),
  company_backend_profile: CompanyAuthService.getCompanyBackEndProfile(),
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
      return { ...state, isAuthenticated: false, company_backend_profile: {} };
    case ActionTypes.COMPANY_TOKEN_RETRIEVED:
      return { ...state, company_backend_profile: action.profile };
    case ActionTypes.UPDATE_COMPANY_PROFILE:
      return { ...state, company_backend_profile: action.profile };
    case 'PROFILE_SUBMITTED':
      return Object.assign({}, state, {
        company_backend_profile: action.payload,
    });
      case 'PROFILE_RELOAD':
      return Object.assign({}, state, {
        company_backend_profile: action.payload,
        profileReload: true,
    });
        case 'GET_INDUSTRIES':
      return Object.assign({}, state, {
        industries: action.payload
    });
    case 'GET_LOCATIONS':
      return Object.assign({}, state, {
        locations: action.payload
    });
    default:
      return state;
  }
}
