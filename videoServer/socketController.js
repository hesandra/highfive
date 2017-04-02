const fs = require('fs');

module.exports = {
  init(io) {
    io.on('connection', (socket) => {
      console.log('connection');

      socket.on('video', (data) => {
        const dataURL = data.split(',').pop();
        const fileBuffer = new Buffer(dataURL, 'base64');
        fs.writeFileSync('./t.webm', fileBuffer);
        console.log('video saved');
      });
    });
  }
};
