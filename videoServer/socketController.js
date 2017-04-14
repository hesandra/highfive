const fs = require('fs');
const AWS = require('aws-sdk');
const axios = require('axios');

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
      socket.on('video', ({ videoData, name, id, answer, question_id, submission_id }) => {
        const dataURL = videoData.split(',').pop();
        const fileBuffer = new Buffer(dataURL, 'base64');
        count++;
        console.log(name, id, question_id, submission_id, 'data rec');
        const s3Params = {
          Bucket: process.env.S3_BUCKET,
          Key: `${name}_${id}.webm`,
          ContentType: 'video/webm',
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
          axios.post(`http://localhost:3000/api/videos`, {
            href: data.Location,
            answer,
            submission_id,
            question_id
          });
          socket.emit('ready', data.Location);
        });
      });
    });
  }
};
