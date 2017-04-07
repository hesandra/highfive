import { browse as ActionTypes } from '../actions';

export default function browseReducer(state = {
  isFetching: false,
  error: null
}, action) {
  switch (action.type) {
    case ActionTypes.REQUEST_USERS_DATA:
      return { ...state, isFetching: true, error: null };
    case ActionTypes.REQUEST_USERS_DATA_SUCCESS:
      return { ...state, isFetching: false, error: null, users: action.users };
    case ActionTypes.REQUEST_USERS_DATA_ERROR:
      return { ...state, isFetching: false, error: action.error };
    default:
      return state;
  }
}

