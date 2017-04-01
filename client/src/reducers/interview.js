import { interview as ActionTypes } from '../actions';
import userAuthService from '../utils/userAuthService';

export default function interviewReducer(state = {
  isAuthenticated: !userAuthService.isTokenExpired(),
  isFetching: false,
  error: null
}, action) {
  switch (action.type) {
    case ActionTypes.REQUEST_USER_MEDIA:
      return { ...state, isFetching: true, error: null };
    case ActionTypes.REQUEST_USER_MEDIA_ERROR:
      return { ...state, isFetching: false, error: action.error };
    case ActionTypes.REQUEST_USER_MEDIA_SUCCESS:
      return { ...state, isFetching: false, stream: action.stream };
    default:
      return state;
  }
}
