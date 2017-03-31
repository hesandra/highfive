import { hashHistory } from 'react-router';
import CompanyAuthService from '../utils/companyAuthService';
import { COMPANIES_AUTH0_CLIENT_ID } from '../../../config';

export const COMPANY_LOGIN_REQUEST = 'COMPANY_LOGIN_REQUEST';
export const COMPANY_LOGIN_SUCCESS = 'COMPANY_LOGIN_SUCCESS';
export const COMPANY_LOGIN_ERROR = 'COMPANY_LOGIN_ERROR';
export const COMPANY_LOGOUT_SUCCESS = 'COMPANY_LOGOUT_SUCCESS';

const authService = new CompanyAuthService(COMPANIES_AUTH0_CLIENT_ID, 'teamhighfive.auth0.com', 'Companies Sign-In');
// Listen to authenticated event from AuthService and get the profile of the user
// Done on every page startup
export function checkCompanyLogin() {
  return (dispatch) => {
    // Add callback for lock's `authenticated` event
    authService.lock.on('authenticated', (authResult) => {
      authService.lock.getProfile(authResult.idToken, (error, profile) => {
        if (error) {
          return dispatch(companyLoginError(error));
        }
        CompanyAuthService.setToken(authResult.idToken);
        CompanyAuthService.setProfile(profile);
        return dispatch(companyLoginSuccess(profile));
      });
    });
    // Add callback for lock's `authorization_error` event
    authService.lock.on('authorization_error', error => dispatch(companyLoginError(error)));
  };
}

export function companyLoginRequest() {
  authService.login();
  return {
    type: COMPANY_LOGIN_REQUEST,
  };
}
export function companyLoginSuccess(profile) {
  hashHistory.push('/company');
  location.reload();
  return {
    type: COMPANY_LOGIN_SUCCESS,
    profile
  };
}
export function companyLoginError(error) {
  return {
    type: COMPANY_LOGIN_ERROR,
    error
  };
}
export function companyLogoutSuccess() {
  authService.logout();
  return {
    type: COMPANY_LOGOUT_SUCCESS
  };
}
