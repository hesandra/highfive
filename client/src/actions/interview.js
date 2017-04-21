import axios from 'axios';
import { BASE_URL } from '../utils/constants';
/**
 * Actions Responsible for Interview logic
 */
export const REQUEST_USER_MEDIA = 'REQUEST_USER_MEDIA';
export const requestUserMedia = () => {
  getUserMedia();
  return {
    type: REQUEST_USER_MEDIA
  };
};
export const REQUEST_USER_MEDIA_ERROR = 'REQUEST_USER_MEDIA_ERROR';
const requestUserMediaError = (error) => {
  return {
    type: REQUEST_USER_MEDIA_ERROR,
    error
  };
};
export const REQUEST_USER_MEDIA_SUCCESS = 'REQUEST_USER_MEDIA_SUCCESS';
const requestUserMediaSuccess = (mediaStream) => {
  return {
    type: REQUEST_USER_MEDIA_SUCCESS,
    stream: mediaStream
  };
};
export const getUserMedia = () => {
  return (dispatch) => {
    dispatch(requestUserMedia());
    const params = {
      audio: true,
      video: true,
    };
    navigator.mediaDevices.getUserMedia(params)
      .then((mediaStream) => {
        dispatch(requestUserMediaSuccess(mediaStream));
      })
      .catch(e => dispatch(requestUserMediaError(e)))
  };
};

export const CREATE_SUBMISSION_REQUEST = 'CREATE_SUBMISSION_REQUEST';
const createSubmissionRequest = () => {
  return {
    type: CREATE_SUBMISSION_REQUEST
  };
};
export const CREATE_SUBMISSION_ERROR = 'CREATE_SUBMISSION_ERROR';
export const createSubmissionError = (error) => {
  return {
    type: CREATE_SUBMISSION_ERROR,
    error
  };
};
export const CREATE_SUBMISSION_SUCCESS = 'CREATE_SUBMISSION_SUCCESS';
export const createSubmissionSuccess = (submission) => {
  return {
    type: CREATE_SUBMISSION_SUCCESS,
    submission
  };
};
export const createSubmission = (submissionData) => {
  return (dispatch) => {
    dispatch(createSubmissionRequest());
    axios.post(`${BASE_URL}/api/submissions`, submissionData)
      .then((response) => {
        if (response.status === 201) {
          dispatch(createSubmissionSuccess(response.data.submission));
        }
      })
      .catch(e => dispatch(createSubmissionError(e)));
  };
}




