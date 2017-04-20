import request from 'superagent';
var React = require('react');
var Dropzone = require('react-dropzone');
const axios = require('axios');
const ReactDOMServer = require('react-dom/server');
import { Component } from 'react';
import { updatePicture } from '../../actions/company';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NotificationSystem from 'react-notification-system';

const componentConfig = {
  previewTemplate: ReactDOMServer.renderToStaticMarkup(
    <div className="dz-preview dz-file-preview">
      <div className="dz-details">
        <div className="dz-filename"><span data-dz-name></span></div>
        <img data-dz-thumbnail />
      </div>
      <div className="dz-progress"><span className="dz-upload" data-dz-uploadprogress></span></div>
      <div className="dz-success-mark"><span>✔</span></div>
      <div className="dz-error-mark"><span>✘</span></div>
      <div className="dz-error-message"><span data-dz-errormessage></span></div>
    </div>
  )
}

const defaultColors = {
  success: {
    rgb: '33, 133, 208',
    hex: '#77C9D4'
  },
  error: {
    rgb: '236, 61, 61',
    hex: '#77C9D4'
  },
  warning: {
    rgb: '235, 173, 23',
    hex: '#77C9D4'
  },
  info: {
    rgb: '54, 156, 199',
    hex: '#77C9D4'
  }
};
const defaultShadowOpacity = '0.9';

const style = {
  NotificationItem: {
    DefaultStyle: {
      backgroundColor: 'grey',
      fontSize: '20px'
    },
    success: {
      borderTop: '2px solid grey',
      rgb: '33, 133, 208',
      backgroundColor: 'black',
      color: 'white',
      marginTop: '75px',
      WebkitBoxShadow: '0 0 1px rgba(' + defaultColors.success.rgb + ',' + defaultShadowOpacity + ')',
      MozBoxShadow: '0 0 1px rgba(' + defaultColors.success.rgb + ',' + defaultShadowOpacity + ')',
      boxShadow: '0 0 1px rgba(' + defaultColors.success.rgb + ',' + defaultShadowOpacity + ')'
    },
    Dismiss: {
      DefaultStyle: {
        backgroundColor: '#2185D0',
        color: '#2185D0'
      },
      success: {
        color: 'grey',
        backgroundColor: '#2185D0'
      }
    }
  }
};

class myDropzone extends Component {
  constructor(props) {
    super(props)
    this.state = {
      files: []
    }

    this.onDrop = this.onDrop.bind(this)
    this.onSending = this.onSending.bind(this);
    this.notificationSystem = null;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addNotification = this.addNotification.bind(this);
  }

  addNotification() {
    if (this.notificationSystem) {
      this.notificationSystem.addNotification({
        message: 'your profile picture has been updated',
        level: 'success',
        position: 'tr',
        autoDismiss: 5
      });
    }
  }
  handleSubmit() {
    const { addNotification } = this.props;
    this.addNotification();
  }


  onDrop(acceptedFiles, rejectedFiles) {

    console.log('Accepted files: ', acceptedFiles);
    console.log('Rejected files: ', rejectedFiles);

    let upload = request.post('https://api.cloudinary.com/v1_1/dyggshpma/image/upload')
      .field('upload_preset', 'oqjbm809')
      .field('file', acceptedFiles[0])

    upload.end((err, response) => {
      if (err) {
        console.error(err)
      } else {
        this.handleSubmit();
        console.log('this.props in dropzone', this.props)
        this.props.updatePicture({ profile_img: response.body.secure_url, companyId: this.props.companyProfile.companyAuth.company_backend_profile[0].id })
      }
    })
  }
  onSending(file) {
    // Show the total progress bar when upload starts
    this.totalProgress.style.opacity = "1";
    // And disable the start button
    file.previewElement.querySelector(".start").setAttribute("disabled", "disabled");
  }


  render() {
    return (
      <div className="dropzone">
        <Dropzone className="dropzone-area" onDrop={this.onDrop} config={componentConfig}>
          <form action="/api/upload" className="dropzone dz-progress">
            <span className="dz-upload" data-dz-uploadprogress id="dropzone"></span>
            <div className="dz-default dz-message text-center">
              <i className="fa fa-cloud-upload fa-4x"></i>
              <div className="text-center">Upload Image that represents your Culture</div>
            </div>
          </form>
        </Dropzone>
        <NotificationSystem ref={n => this.notificationSystem = n} style={style} />
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    companyProfile: state
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updatePicture }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(myDropzone);
