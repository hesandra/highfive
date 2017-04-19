import { hashHistory, browserHistory } from 'react-router';
import axios from 'axios';
import UserAuthService from '../utils/userAuthService';
import { USERS_AUTH0_CLIENT_ID } from '../../../config';

const authService = new UserAuthService(process.env.USERS_AUTH0_ID, 'teamhighfive.auth0.com', 'Applicant Sign-In');
export function checkUserLogin() {
  return (dispatch) => {
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
            // transforms users submissions to an array containg just the jobpost_ids // for jobpostlist
            response.data.fetchedUser.submission = response.data.fetchedUser.submission.map((sub) => {
              return sub.jobpost_id;
            });
            dispatch(setUserBackEndProfile(response.data.fetchedUser));
            dispatch(userLoginSuccess(profile));
          }
        })
        .catch((err) => {
          console.log(err);
        });
      });
    });
    authService.lock.on('authorization_error', error => dispatch(userLoginError(error)));
  };
}
export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const userLoginRequest = () => {
  authService.login();
  return {
    type: USER_LOGIN_REQUEST,
  };
};
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
const userLoginSuccess = (profile) => {
  browserHistory.push('/profile');
  return {
    type: USER_LOGIN_SUCCESS,
    profile
  };
};
export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';
const userLoginError = (error) => {
  return {
    type: USER_LOGIN_ERROR,
    error
  };
};
export const USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS';
export const userLogoutSuccess = () => {
  authService.logout();
  return {
    type: USER_LOGOUT_SUCCESS
  };
};

export const USER_TOKEN_RETRIEVED = 'USER_TOKEN_RETRIEVED';
const setUserBackEndProfile = (profile) => {
  UserAuthService.setBackEndProfile(profile);
  return {
    type: USER_TOKEN_RETRIEVED,
    profile
  };
};
export const UPDATE_USER_PROFILE = 'UPDATE_USER_PROFILE';
export const updateUserProfile = (profile) => {
  UserAuthService.setBackEndProfile(profile);
  return {
    type: UPDATE_USER_PROFILE,
    profile
  };
};
