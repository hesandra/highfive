export function captureUserMedia(callback) {
  const params = {
    audio: false,
    video: true,
  };

  navigator.mediaDevices.getUserMedia(params)
    .then((mediaStream) => {
      callback(mediaStream);
    })
    .catch((e) => console.log(e));
}

