import React, { Component } from 'react';
import { Grid, Row, Col, Well } from 'react-bootstrap';
import { Button, Dimmer, Segment, Loader } from 'semantic-ui-react';
import ReactCountDownClock from 'react-countdown-clock';
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
    this.selectNextQuestion = this.selectNextQuestion.bind(this);
  }
  /**
   * Setup submission on back-end server
   */
  componentWillMount() {
    const { requestUserMedia, createSubmission, backend_profile, jobPost } = this.props;
    const submissionData = {
      user_id: backend_profile.id,
      jobpost_id: jobPost.id
    };
    console.log(this.props, 'inside comp willMount');
    requestUserMedia();
    createSubmission(submissionData);
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
    const { backend_profile } = this.props;
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
        const url = video.getDataURL((videoData) => {
          const payload = {
            videoData,
            name: backend_profile.name
          };
          this.props.socket.emit('video', payload);
          console.log('video sent');
          this.listenForS3Link();
        });
      }, 1000);
    }, 10000);
  }
  selectNextQuestion() {
    console.log('fired');
  }
  listenForS3Link() {
    this.props.socket.on('ready', (url) => {
      console.log(url);
    });
  }
  render() {
    const { requestUserMedia, jobPost } = this.props;
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
              <ReactCountDownClock
                seconds={10}
                alpha={0.9}
                size={150}
                onComplete={this.selectNextQuestion}
              />
              <hr />
              { jobPost.question[0].question }
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
