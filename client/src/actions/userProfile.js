import axios from 'axios';

export const REQUEST_JOB_POSTS = 'REQUEST_JOB_POSTS';
export const requestJobPosts = () => {
  return {
    type: REQUEST_JOB_POSTS
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
