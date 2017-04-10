import { userProfile as ActionTypes } from '../actions';

export default function userProfileReducer(state = {
  isFetching: false,
  submissions: [],
  error: null
}, action) {
  switch (action.type) {
    case ActionTypes.REQUEST_JOB_SUBMISSIONS:
      return { ...state, isFetching: true, error: null };
    case ActionTypes.REQUEST_JOB_SUBMISSIONS_SUCCESS:
      return { ...state, isFetching: false, submissions: action.submissions };
    case ActionTypes.REQUEST_JOB_SUBMISSIONS_ERROR:
      return { ...state, isFetching: false, error: action.error };
    case ActionTypes.DELETE_INDUSTRY_REQUEST:
      return { ...state, isDeleting: true };
    case ActionTypes.DELETE_INDUSTRY_SUCCESS:
      return { ...state, isDeleting: false };
    case ActionTypes.DELETE_INDUSTRY_ERROR:
      return { ...state, isDeleting: false, error: action.error };
    default:
      return state;
  }
}
