import { jobPosts as ActionTypes } from '../actions';
import userAuthService from '../utils/userAuthService';

export default function jobPostsReducer(state = {
  isAuthenticated: !userAuthService.isTokenExpired(),
  isFetching: false,
  error: null
}, action) {
  switch (action.type) {
    case ActionTypes.REQUEST_JOB_POST:
      return { ...state, isFetching: true, error: null };
    default:
      return state;
  }
}
