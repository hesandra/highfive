import React, { Component } from 'react';
import { Grid, Row, Col, Well } from 'react-bootstrap';
import { Button, Dimmer, Segment, Loader, Header } from 'semantic-ui-react';
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
      loaded: false,
      time: 10,
      questions: props.jobPost.question
    };
    this.selectNextQuestion = this.selectNextQuestion.bind(this);
    this.handleEditorInputChange = this.handleEditorInputChange.bind(this);
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
    }, 4000);
  }
  componentDidUpdate(prevProps) {
    if (this.props.stream && !this.state.done) {
      // fire off method to start recording
      this.startRecording(this.props.stream);
    }
  }
  componentWillUnmount() {
    // stop media stream if user navigates away while streaming
    alert('interview in progress');
    // this.state.stream.stop();
  }
  handleEditorInputChange(newValue) {
    console.log(newValue);
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
    this.time = 10;
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
          // this.props.socket.emit('video', payload);
          // console.log('video sent');
          // this.listenForS3Link();
        });
      }, 1000);
    }, 10000);
  }
  selectNextQuestion() {
    console.log('select next question');
    console.log(this.state);
    this.setState({
      time: 10
    });
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
        height: '350',
        width: '500',
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
            <div className="text-center clock">
              <ReactCountDownClock
                seconds={this.state.time}
                alpha={0.9}
                size={75}
                onComplete={this.selectNextQuestion}
              />
            </div>
            <div className="text-center question">
              <hr />
              <Header as="h1" textAlign="center">
                { jobPost.question[0].question }
              </Header>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            { this.state.stream ?
              <VideoPlayer {...videoOptions} /> : '' }
              <hr />
          </Col>
          <Col xs={6}>
            <Well>
              <div className="text-center">
                <AceEditor
                  mode="javascript"
                  theme="monokai"
                  className="text-center"
                  onChange={this.handleEditorInputChange}
                  height="300px"
                  width="400px"
                  editorProps={{ $blockScrolling: true }}
                  enableBasicAutocompletion
                  tabSize={2}
                  setOptions={{ cursorStyle: 'wide' }}
                />
              </div>
            </Well>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Interview;
