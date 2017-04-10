import axios from 'axios';
import { updateUserProfile } from './userAuth';

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

    axios.get(`http://localhost:3000/api/submissions/user/${id}`)
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
    axios.delete(`http://localhost:3000/api/users/${userId}/industry/${industryId}`)
      .then((response) => {
        if (response.status === 201) {
          dispatch(deleteIndustrySuccess(response.data.user));
          dispatch(updateUserProfile(response.data.user));
        }
      })
      .catch(e => dispatch(deleteIndustryError(e)));
  };
};





