const fs = require('fs');
const AWS = require('aws-sdk'); 

const s3 = new AWS.S3();

let count = 0;
// create a map to store active interviews ?
const Interviews = new Map();


module.exports = {
  init(io) {
    AWS.config.update({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    });

    io.on('connection', (socket) => {
      console.log('connection');
      socket.on('video', (data) => {
        const dataURL = data.split(',').pop();
        const fileBuffer = new Buffer(dataURL, 'base64');
        // fs.writeFileSync('./t.webm', fileBuffer);
        count++;

        const s3Params = {
          Bucket: process.env.S3_BUCKET,
          Key: `blah${count}.webm`,
          Body: fileBuffer,
          Expires: new Date(),
          ACL: 'public-read'
        };

        s3.upload(s3Params, (err, data) => {
          if (err) {
            console.log(err);
            return;
          }
          console.log(data);
          console.log('video saved');
          socket.emit('ready', data.Location);
        });
      });
    });
  }
};
