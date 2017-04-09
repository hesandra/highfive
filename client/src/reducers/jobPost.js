import { jobPost as ActionTypes } from '../actions';
import userAuthService from '../utils/userAuthService';

export default function jobPostReducer(state = {
  isAuthenticated: !userAuthService.isTokenExpired(),
  isFetching: false,
  error: null
}, action) {
  switch (action.type) {
    case ActionTypes.REQUEST_JOB_POST:
      return { ...state, isFetching: true, error: null };
    case ActionTypes.REQUEST_JOB_POST_SUCCESS:
      return { ...state, isFetching: false, jobPost: action.jobPost };
    case ActionTypes.REQUEST_JOB_POST_ERROR:
      return { ...state, isFetching: false, error: action.error };
    default:
      return state;
  }
}
