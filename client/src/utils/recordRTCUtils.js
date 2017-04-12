export function captureUserMedia(callback) {
  const params = {
    audio: false,
    video: true,
  };

  navigator.mediaDevices.getUserMedia(params)
    .then(function (mediaStream) {
      callback(mediaStream);
    });
}

