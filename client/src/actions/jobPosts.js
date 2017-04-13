import axios from 'axios';

export const REQUEST_JOB_POSTS = 'REQUEST_JOB_POSTS';
export const REQUEST_JOB_POSTS_SUCCESS = 'REQUEST_JOB_POSTS_SUCCESS';
export const REQUEST_JOB_POSTS_ERROR = 'REQUEST_JOB_POSTS_ERROR';

/**
 * Fired when a particular Job post has been clicked
 *  -todo- Grab data from server using redux Thunk
 */

export const fetchJobPosts = (page) => {
  return (dispatch) => {
    dispatch(requestJobPostsData());
    axios.get(`http://localhost:3000/api/jobposts/page/${page}`)
      .then((response) => {
        if (response.status === 200 || response.status === 304) {
          dispatch(requestJobPostsDataSuccess(response.data.jobposts.results));
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


