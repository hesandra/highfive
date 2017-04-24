import axios from 'axios';
import { updateUserProfile } from './userAuth';
import { BASE_URL } from '../utils/constants';

export const REQUEST_PROFILE_UPDATE = 'REQUEST_PROFILE_UPDATE';
const requestProfileUpdate = () => {
  return {
    type: REQUEST_PROFILE_UPDATE
  };
};
export const REQUEST_PROFILE_UPDATE_SUCCESS = 'REQUEST_PROFILE_UPDATE_SUCCESS';
const requestProfileUpdateSuccess = (profile) => {
  return {
    type: REQUEST_PROFILE_UPDATE_SUCCESS,
    profile
  };
};
export const REQUEST_PROFILE_UPDATE_ERROR = 'REQUEST_PROFILE_UPDATE_ERROR';
const requestProfileUpdateError = (error) => {
  return {
    type: REQUEST_PROFILE_UPDATE_ERROR,
    error
  };
};
export const updateProfile = (userId, data) => {
  return (dispatch) => {
    dispatch(requestProfileUpdate());

    axios.put(`${BASE_URL}/api/users/${userId}`, data)
      .then((response) => {
        if (response.status === 201) {
          dispatch(requestProfileUpdateSuccess(response.data.user));
          dispatch(updateUserProfile(response.data.user));
        }
      })
      .catch(err => dispatch(requestProfileUpdateError()));
  };
};

export const REQUEST_JOB_SUBMISSIONS = 'REQUEST_JOB_SUBMISSIONS';
const requestJobSubmissions = () => {
  return {
    type: REQUEST_JOB_SUBMISSIONS
  };
};
export const REQUEST_JOB_SUBMISSIONS_SUCCESS = 'REQUEST_JOB_SUBMISSIONS_SUCCESS';
const requestJobSubmissionsSuccess = (submissions) => {
  return {
    type: REQUEST_JOB_SUBMISSIONS_SUCCESS,
    submissions
  };
};
export const REQUEST_JOB_SUBMISSIONS_ERROR = 'REQUEST_JOB_SUBMISSIONS_ERROR';
const requestJobSubmissionsError = (error) => {
  return {
    type: REQUEST_JOB_SUBMISSIONS_ERROR,
    error
  };
};
export const fetchJobSubmissions = (id) => {
  return (dispatch) => {
    dispatch(requestJobSubmissions());

    axios.get(`${BASE_URL}/api/submissions/user/${id}`)
      .then((response) => {
        if (response.status === 200) {
          dispatch(requestJobSubmissionsSuccess(response.data.submissions.submission));
        }
      })
      .catch((error) => {
        dispatch(requestJobSubmissionsError(error));
      });
  };
};

export const DELETE_INDUSTRY_REQUEST = 'DELETE_INDUSTRY_REQUEST';
const deleteIndustryRequest = () => {
  return {
    type: DELETE_INDUSTRY_REQUEST,
  };
};
export const DELETE_INDUSTRY_SUCCESS = 'DELETE_INDUSTRY_SUCCESS';
const deleteIndustrySuccess = (user) => {
  return {
    type: DELETE_INDUSTRY_SUCCESS,
    user
  };
};
export const DELETE_INDUSTRY_ERROR = 'DELETE_INDUSTRY_ERROR';
const deleteIndustryError = (error) => {
  return {
    type: DELETE_INDUSTRY_ERROR,
    error
  };
};
export const deleteUserIndustry = (userId, industryId) => {
  return (dispatch) => {
    dispatch(deleteIndustryRequest());
    axios.delete(`${BASE_URL}/api/users/${userId}/industry/${industryId}`)
      .then((response) => {
        if (response.status === 201) {
          dispatch(deleteIndustrySuccess(response.data.user));
          dispatch(updateUserProfile(response.data.user));
        }
      })
      .catch(e => dispatch(deleteIndustryError(e)));
  };
};





