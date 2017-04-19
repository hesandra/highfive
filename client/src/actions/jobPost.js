import { hashHistory, browserHistory } from 'react-router';
import axios from 'axios';

export const REQUEST_JOB_POST = 'REQUEST_JOB_POST';
export const REQUEST_JOB_POST_SUCCESS = 'REQUEST_JOB_POST_SUCCESS';
export const REQUEST_JOB_POST_ERROR = 'REQUEST_JOB_POST_ERROR';

/**
 * Actions fired when on a particular Job posting
 */

export const INIT_JOB_INTERVIEW = 'INIT_JOB_INTERVIEW';
export function initJobInterview(id) {
  browserHistory.push(`/interview/${id}`);
  return {
    type: INIT_JOB_INTERVIEW
  };
}

export const fetchJobPostData = (id) => {
  return (dispatch) => {
    dispatch(requestJobPostData());
    axios.get(`http://localhost:8081/api/jobposts/${id}`)
      .then((response) => {
        if (response.status === 200 || response.status === 304) {
          dispatch(requestJobPostDataSuccess(response.data.jobpost));
        }
      })
      .catch(e => dispatch(requestJobPostDataError(e)));
  };
};

const requestJobPostData = () => {
  return {
    type: REQUEST_JOB_POST
  };
};

const requestJobPostDataSuccess = (jobPost) => {
  return {
    type: REQUEST_JOB_POST_SUCCESS,
    jobPost
  };
};

const requestJobPostDataError = (error) => {
  return {
    type: REQUEST_JOB_POST_ERROR,
    error
  };
};


