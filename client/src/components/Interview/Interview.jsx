import React, { Component } from 'react';
import { Grid, Row, Col, Well } from 'react-bootstrap';
import { Button, Dimmer, Segment, Loader } from 'semantic-ui-react';
import recordRTC from 'recordrtc';
import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/monokai';

import LoadingModal from './LoadingModal';
import VideoPlayer from './VideoPlayer';

const hasGetUserMedia = !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia || navigator.msGetUserMedia);

class Interview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }
  componentWillMount() {
    const { requestUserMedia } = this.props;
    requestUserMedia();
  }
  componentDidMount() {
    if (!hasGetUserMedia) {
      // use sweetalert here
      alert('browser wont work');
    }
    setTimeout(() => {
      this.setState({ loaded: true })
    }, 3000);
  }
  componentDidUpdate(prevProps) {
    if (this.props.stream && !this.state.done) {
      // fire off method to start recording
      this.startRecording(this.props.stream);
    }
  }
  componentWillUnmount() {
    // stop media stream if user navigates away while streaming
    this.state.stream.stop();
  }
  startRecording(stream) {
    if (stream.active) {
      this.setState({ stream, done: true });
      this.stream = stream;
    }
    const video = recordRTC(stream, {
      type: 'video',
      mimeType: 'video/webm',
    });
    video.startRecording();
    setTimeout(() => {
      video.stopRecording((vidsrc) => {
        if (this.state.stream.active) {
          this.setState({ src: vidsrc, done: true });
          stream.stop();
        }
      });
      setTimeout(() => {
        const url = video.getDataURL((dataUrl) => {
          this.props.socket.emit('video', dataUrl);
          console.log('video sent');
          this.listenForS3Link();
        });
      }, 1000);
    }, 10000);
  }
  listenForS3Link() {
    this.props.socket.on('ready', (url) => {
      console.log(url);
    });
  }
  render() {
    const { requestUserMedia } = this.props;
    let videoOptions = {};
    if (this.state.stream) {
      videoOptions = {
        height: '300',
        width: '300',
        autoPlay: true,
        controls: true,
        controlBar: {
          fullscreenControl: false,
        },
        sources: [{
          src: window.URL.createObjectURL(this.state.stream) || '',
          type: 'video/webm'
        }]
      };
    }
    return (
      <Grid>
        <Row>
          <Col xs={12} md={12}>
            <h1 className="text-center">Interview here</h1>
            <div className="text-center">
              <Button onClick={requestUserMedia} primary>Get STREAM</Button>
              <hr />
              { this.state.stream ?
                <VideoPlayer {...videoOptions} /> : '' }
              <hr />
            </div>
            <div>
              <Well>
                <AceEditor
                  mode="javascript"
                  theme="monokai"
                  editorProps={{ $blockScrolling: true }}
                  enableBasicAutocompletion
                  tabSize={2}
                  value={'/* enter your answer below */'}
                  setOptions={{ cursorStyle: 'wide' }}
                />
              </Well>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Interview;
