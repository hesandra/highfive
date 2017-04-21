import axios from 'axios';

export const REQUEST_USERS_DATA = 'REQUEST_USERS_DATA';
export const requestUserData = () => {
  return {
    type: REQUEST_USERS_DATA
  };
};
export const REQUEST_USERS_DATA_ERROR = 'REQUEST_USERS_DATA_ERROR';
export const requestUserDataError = (error) => {
  return {
    type: REQUEST_USERS_DATA_ERROR,
    error
  };
};
export const REQUEST_USERS_DATA_SUCCESS = 'REQUEST_USERS_DATA_SUCCESS';
export const requestUserDataSuccess = (users) => {
  return {
    type: REQUEST_USERS_DATA_SUCCESS,
    users
  };
};
export const fetchUsersData = () => {
  return (dispatch) => {
    dispatch(requestUserData());
    axios.get(`http://localhost:3000/api/users`)
      .then((response) => {
        if (response.status === 200 || response.status === 304) {
          dispatch(requestUserDataSuccess(response.data.users));
        }
      })
      .catch(e => dispatch(requestUserDataError(e)));
  };
};



