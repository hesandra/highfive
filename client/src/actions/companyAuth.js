import { hashHistory, browserHistory } from 'react-router';
import axios from 'axios';
import CompanyAuthService from '../utils/companyAuthService';
import { COMPANIES_AUTH0_CLIENT_ID } from '../../../config';
import { BASE_URL } from '../utils/constants';

export const COMPANY_LOGIN_REQUEST = 'COMPANY_LOGIN_REQUEST';
export const COMPANY_LOGIN_SUCCESS = 'COMPANY_LOGIN_SUCCESS';
export const COMPANY_LOGIN_ERROR = 'COMPANY_LOGIN_ERROR';
export const COMPANY_LOGOUT_SUCCESS = 'COMPANY_LOGOUT_SUCCESS';
export const COMPANY_TOKEN_RETRIEVED = 'COMPANY_TOKEN_RETRIEVED';


const idToUse = process.env.NODE_ENV === 'production' ? process.env.COMPANIES_AUTH0_ID : COMPANIES_AUTH0_CLIENT_ID;
const authService = new CompanyAuthService(idToUse, 'teamhighfive.auth0.com', 'Companies Sign-In');
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
        return axios.post(`${BASE_URL}/api/companies`, {
          name: profile.nickname,
          email: profile.email,
          auth0_id: profile.user_id,
          profile_img: profile.picture,
        })
        .then((response) => {
          if (response.status === 201) {
            dispatch(setCompanyBackEndProfile(response.data.fetchedCompany));
            dispatch(companyLoginSuccess(profile));
          }
        })
        .catch((err) => {
          console.log(err);
        });
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
  browserHistory.push('/company');
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
    type: COMPANY_LOGOUT_SUCCESS,
  };
}
function setCompanyBackEndProfile(profile) {
  CompanyAuthService.setCompanyBackEndProfile(profile);
  return {
    type: COMPANY_TOKEN_RETRIEVED,
    profile
  };
}
export const UPDATE_COMPANY_PROFILE = 'UPDATE_COMPANY_PROFILE';
export const updateCompanyProfile = (profile) => {
  CompanyAuthService.setCompanyBackEndProfile(profile);
  return {
    type: UPDATE_COMPANY_PROFILE,
    profile
  };
};
