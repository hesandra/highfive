/**
 * Actions Responsible for Interview logic
 */
export const REQUEST_USER_MEDIA_ERROR = 'REQUEST_USER_MEDIA_ERROR';
function requestUserMediaError(error) {
  return {
    type: REQUEST_USER_MEDIA_ERROR,
    error
  };
}

export const REQUEST_USER_MEDIA_SUCCESS = 'REQUEST_USER_MEDIA_SUCCESS';
function requestUserMediaSuccess(mediaStream) {
  return {
    type: REQUEST_USER_MEDIA_SUCCESS,
    stream: mediaStream
  };
}

export const REQUEST_USER_MEDIA = 'REQUEST_USER_MEDIA';
export function requestUserMedia() {
  getUserMedia();
  return {
    type: REQUEST_USER_MEDIA
  };
}

export function getUserMedia() {
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
      .catch(e => dispatch(requestUserMediaError(e)));
  };
}

