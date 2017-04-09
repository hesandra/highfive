import { Message } from 'semantic-ui-react';
import React, { Component } from 'react';
import recordRTC from 'recordrtc';
import { captureUserMedia } from '../../utils/recordRTCUtils';
import { NavBarContainer } from '../../containers';

const hasGetUserMedia = !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia || navigator.msGetUserMedia);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
    // check login status here
    this.requestUserMedia = this.requestUserMedia.bind(this);
    this.props.checkUserLogin();
    // this.props.checkCompanyLogin();
    this.handleDismiss = this.handleDismiss.bind(this);
  }
  componentDidMount() {
    if (!hasGetUserMedia) {
      alert('browser wont work');
    }
  //   this.handleDismiss();
  //   this.requestUserMedia();
  //   this.startRecording();
  }
  requestUserMedia() {
    captureUserMedia((stream) => {
      console.log(window.URL.createObjectURL(stream));
    });
  }
  startRecording() {
    captureUserMedia((stream) => {
      const video = recordRTC(stream, { type: 'video' });
      video.startRecording();
      setTimeout(() => {
        video.stopRecording((vidsrc) => {
          this.setState({ src: vidsrc });
        });
        console.log('this', video);
        console.log(video.blob);
      }, 120000);
    });
  }
  stopRecording() {

  }
  handleDismiss() {
    setTimeout(() => {
      this.setState({ visible: false });

    }, 2000);
  }
  render() {
    return (
      <div>
        <NavBarContainer />
        { this.props.children }
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.element.isRequired,
};

export default App;
