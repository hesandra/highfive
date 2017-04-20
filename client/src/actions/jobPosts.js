import axios from 'axios';
import { BASE_URL } from '../utils/constants';

export const REQUEST_JOB_POSTS = 'REQUEST_JOB_POSTS';
export const REQUEST_JOB_POSTS_SUCCESS = 'REQUEST_JOB_POSTS_SUCCESS';
export const REQUEST_JOB_POSTS_ERROR = 'REQUEST_JOB_POSTS_ERROR';

export const fetchJobPosts = (page) => {
  return (dispatch) => {
    dispatch(requestJobPostsData());
    axios.get(`${BASE_URL}/api/jobposts/page/${page}`)
      .then((response) => {
        if (response.status === 200 || response.status === 304) {
          dispatch(requestJobPostsDataSuccess(response.data.jobposts));
        }
      })
      .catch(e => dispatch(requestJobPostsDataError(e)));
  };
};

export const requestJobPostsData = () => {
  return {
    type: REQUEST_JOB_POSTS
  };
};

export const requestJobPostsDataSuccess = (jobposts) => {
  return {
    type: REQUEST_JOB_POSTS_SUCCESS,
    jobposts
  };
};

export const requestJobPostsDataError = (error) => {
  return {
    type: REQUEST_JOB_POSTS_ERROR,
    error
  };
};


