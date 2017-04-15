import request from 'superagent';
var React = require('react');
var Dropzone = require('react-dropzone');
const axios = require('axios');
import { Component } from 'react';
import { updatePicture } from '../../actions/company';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class myDropzone extends Component {
  constructor(props) {
    super(props)
    this.state = {
      files: []
    }
    this.onDrop = this.onDrop.bind(this)
  }

  onDrop(acceptedFiles, rejectedFiles) {

    //console.log('Accepted files: ', acceptedFiles);
    //console.log('Rejected files: ', rejectedFiles);

    let upload = request.post('https://api.cloudinary.com/v1_1/dyggshpma/image/upload')
      .field('upload_preset', 'oqjbm809')
      .field('file', acceptedFiles[0])

    upload.end((err, response) => {
      if (err) {
        //console.error(err)
      } else {
        //console.log(response.body.secure_url)
        this.props.updatePicture({ profile_img: response.body.secure_url, companyId: this.props.companyProfile.companyReload[0].id })
      }
    })
  }
  render() {
    //console.log('this.props in dropzone', this.props.companyProfile.companyReload[0].id)
    return (
      <div>
        <Dropzone onDrop={this.onDrop}>
          <div>Try dropping some files here, or click to select files to upload.</div>
        </Dropzone>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    companyProfile: state.companyProfile
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updatePicture }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(myDropzone);
