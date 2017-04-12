import { interview as ActionTypes } from '../actions';
import userAuthService from '../utils/userAuthService';

export default function interviewReducer(state = {
  isAuthenticated: !userAuthService.isTokenExpired(),
  isFetching: false,
  submission: {},
  error: null
}, action) {
  switch (action.type) {
    case ActionTypes.REQUEST_USER_MEDIA:
      return { ...state, isFetching: true, error: null };
    case ActionTypes.REQUEST_USER_MEDIA_ERROR:
      return { ...state, isFetching: false, error: action.error };
    case ActionTypes.REQUEST_USER_MEDIA_SUCCESS:
      return { ...state, isFetching: false, stream: action.stream };
    case ActionTypes.CREATE_SUBMISSION_REQUEST:
      return { ...state, isCreatingSubmission: true, };
    case ActionTypes.CREATE_SUBMISSION_SUCCESS:
      return { ...state, isCreatingSubmission: false, submission: action.submission };
    case ActionTypes.CREATE_SUBMISSION_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
}
