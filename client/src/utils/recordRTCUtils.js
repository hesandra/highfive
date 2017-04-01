export function captureUserMedia(callback) {
  const params = {
    audio: true,
    video: true,
  };

  navigator.mediaDevices.getUserMedia(params)
    .then(function (mediaStream) {
      callback(mediaStream);
    });
}

