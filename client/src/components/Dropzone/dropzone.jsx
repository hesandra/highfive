var React = require('react');
var Dropzone = require('react-dropzone');
const axios = require('axios');
// const cloudinary = require('cloudinary');

// cloudinary.config({
//   cloud_name: 'deeyv422c',
//   api_key: 172875363448973,
//   api_secret: 'MlCK35IWvDzfy9lcvn7TpfMcL6M'
// });

const DropzoneDemo = React.createClass({
    onDrop: function (acceptedFiles, rejectedFiles) {
      console.log('Accepted files: ', acceptedFiles);
      console.log('Rejected files: ', rejectedFiles);

      axios
        .post('https://api.cloudinary.com/v1_1/deeyv422c/image/upload', {
          upload_preset: 'lqjk0w6k',
          file: acceptedFiles[0]
        })
        .then((result) => {
          console.log("result", result);
        })
        .catch((e) => {
          console.log("error here", e);
        })
    },

    render: function () {
      return (
          <div>
            <Dropzone onDrop={this.onDrop}>
              <div>Try dropping some files here, or click to select files to upload.</div>
            </Dropzone>
          </div>
      );
    }
});

export default DropzoneDemo;