import { hashHistory } from 'react-router';
import axios from 'axios';
import UserAuthService from '../utils/userAuthService';
import { USERS_AUTH0_CLIENT_ID } from '../../../config';

export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';
export const USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS';
export const USER_TOKEN_RETRIEVED = 'USER_TOKEN_RETRIEVED';

const authService = new UserAuthService(USERS_AUTH0_CLIENT_ID, 'teamhighfive.auth0.com', 'Applicant Sign-In');

// Listen to authenticated event from AuthService and get the profile of the user
// Done on every page startup
export function checkUserLogin() {
  return (dispatch) => {
    // Add callback for lock's `authenticated` event
    authService.lock.on('authenticated', (authResult) => {
      authService.lock.getProfile(authResult.idToken, (error, profile) => {
        if (error) {
          return dispatch(userLoginError(error));
        }
        UserAuthService.setToken(authResult.idToken);
        UserAuthService.setProfile(profile);
        return axios.post('http://localhost:3000/api/users', {
          name: profile.name,
          email: profile.email,
          auth0_id: profile.user_id,
          profile_img: profile.picture,
          github_url: profile.html_url,
        })
        .then((response) => {
          if (response.status === 201) {
            dispatch(setUserBackEndProfile(response.data.fetchedUser));
            dispatch(userLoginSuccess(profile));
          }
        })
        .catch((err) => {
          console.log(err);
        });
      });
    });
    // Add callback for lock's `authorization_error` event
    authService.lock.on('authorization_error', error => dispatch(userLoginError(error)));
  };
}

export function userLoginRequest() {
  authService.login();
  return {
    type: USER_LOGIN_REQUEST,
  };
}
export function userLoginSuccess(profile) {
  hashHistory.push('/profile');
  return {
    type: USER_LOGIN_SUCCESS,
    profile
  };
}
export function userLoginError(error) {
  return {
    type: USER_LOGIN_ERROR,
    error
  };
}
export function userLogoutSuccess() {
  authService.logout();
  return {
    type: USER_LOGOUT_SUCCESS
  };
}
function setUserBackEndProfile(profile) {
  UserAuthService.setBackEndProfile(profile);
  return {
    type: USER_TOKEN_RETRIEVED,
    profile
  };
}
export const UPDATE_USER_PROFILE = 'UPDATE_USER_PROFILE';
export const updateUserProfile = (profile) => {
  UserAuthService.setBackEndProfile(profile);
  return {
    type: UPDATE_USER_PROFILE,
    profile
  };
};
