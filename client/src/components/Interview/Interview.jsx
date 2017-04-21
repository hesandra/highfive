import React, { Component } from 'react';
import { Grid, Row, Col, Well } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import { Button, Dimmer, Segment, Loader, Header, Icon } from 'semantic-ui-react';
import ReactCountDownClock from 'react-countdown-clock';
import recordRTC from 'recordrtc';
import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/monokai';
import { default as swal } from 'sweetalert2';

import Timer from './Timer';
import LoadingModal from './LoadingModal';
import VideoPlayer from './VideoPlayer';

const hasGetUserMedia = !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia || navigator.msGetUserMedia);

let idx = 0;
class Interview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      startTimer: false,
      questions: props.jobPost.question,
      selectedQuestionIdx: 0,
      submissionCreated: false,
      done: false,
      interviewOver: false,
      answer: '',
      firstDone: false
    };
    this.startInterview = this.startInterview.bind(this);
    this.endInterview = this.endInterview.bind(this);
    this.handleEditorInputChange = this.handleEditorInputChange.bind(this);
    this.showNextQuestion = this.showNextQuestion.bind(this);
  }
  /**
   * Setup submission on back-end server
   */
  componentDidMount() {
    const { requestUserMedia, createSubmission, backend_profile, jobPost } = this.props;
    if (!hasGetUserMedia) {
      // use sweetalert here
      alert('browser wont work');
    } else {
      requestUserMedia();
    }
    if (!this.state.submissionCreated) {
      createSubmission({
        user_id: backend_profile.id,
        jobpost_id: jobPost.id
      });
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.stream && !this.state.done) {
      // fire off method to start recording
      this.startRecording(this.props.stream);
    }
  }
  componentWillUnmount() {
    // stop media stream if user navigates away while streaming
    if (!this.state.interviewOver) {
      swal({
        title: 'Interview in progress',
        text: 'If you navigate away your submission will be recorded as incomplete',
        type: 'error'
      });
      // delete submission on navigate away;
      // or set submission status to notFinished
    }
    this.props.stream.stop();
  }
  handleEditorInputChange(newValue) {
    this.setState({
      answer: newValue
    });
  }
  startRecording(stream) {
    this.video = recordRTC(stream, {
      type: 'video',
      mimeType: 'video/webm;codecs=vp8',
      timeSlice: 1000
    });
    if (stream.active && !this.state.done) {
      this.setState({ stream, done: true });
      this.stream = stream;
    }
    this.video.startRecording();
  }
  stopRecording() {
    this.video.stopRecording((vidsrc) => {
      this.processRecording();
    });
    setTimeout(() => {
      if (!this.state.interviewOver) {
        this.video.startRecording();
      }
    }, 2000);
  }
  processRecording() {
    const { backend_profile } = this.props;
    let answer = 'n/a';
    if (this.state.selectedQuestionIdx === 2) {
      answer = this.state.answer;
    }
    this.setState({
      answer: ''
    });
    const url = this.video.getDataURL((videoData) => {
      console.log('this is index', this.state.selectedQuestionIdx);
      const payload = {
        videoData,
        name: backend_profile.name + this.state.selectedQuestionIdx,
        id: Math.floor(Math.random() * 90000) + 10000,
        answer: `${answer}`,
        question_id: this.props.jobPost.question[idx].id,
        submission_id: this.props.submission.id
      };
      idx += 1;
      console.log('fired', payload);
      this.props.socket.emit('video', payload);
      this.video.clearRecordedData();
      setTimeout(() => {
        this.video.resume();
      }, 3000);
    });
  }
  startInterview() {
    this.setState({
      startTimer: true
    });
  }
  showNextQuestion() {
    this.stopRecording();
    const currentIdx = this.state.selectedQuestionIdx;
    if (currentIdx < 2 && this.state.firstDone) {
      this.setState({
        selectedQuestionIdx: this.state.selectedQuestionIdx + 1
      });
    }
  }
  endInterview() {
    this.setState({
      interviewOver: true,
    });
    this.stopRecording();
    this.props.stream.stop();
    swal({
      title: 'Interview done',
      text: 'Nice Job!',
      type: 'success'
    })
    .then(() => {
      browserHistory.push('/profile');
    });
  }
  render() {
    const { requestUserMedia, jobPost } = this.props;
    let videoOptions = {};
    if (this.state.stream) {
      videoOptions = {
        height: '400',
        width: '500',
        autoplay: true,
        controls: true,
        muted: true,
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
            <LoadingModal />
            <Header as="h3" icon textAlign="center">
              <Icon link name="video camera" circular />
            </Header>
            { this.state.startTimer ? '' :
            <div className="text-center clock">
              <ReactCountDownClock
                seconds={5}
                alpha={0.9}
                size={75}
                onComplete={this.startInterview}
              />
            </div>
            }
            <div className="text-center question">
              { this.state.startTimer ?
                <div>
                  <Timer
                    startInterview={true}
                    endInterview={this.endInterview}
                    showNextQuestion={this.showNextQuestion}
                  />
                  <Header as="h1" textAlign="center">
                    { this.state.questions[this.state.selectedQuestionIdx].question }
                  </Header>
                </div>
              : '' }
              { this.state.interviewOver ? 'Interview DONE' : '' }
              <hr className="interview-hr" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            { this.state.stream ?
              <div>
                <h5 className="text-center">Smile, you're on camera :)</h5>
                <VideoPlayer {...videoOptions} />
              </div>
              : '' }
            <hr />
          </Col>
          <Col xs={6}>
            <div className="text-center">
              <h5 className="text-center">Enter Code Here</h5>
              <AceEditor
                mode="javascript"
                theme="monokai"
                className="text-center"
                onChange={this.handleEditorInputChange}
                height="400px"
                width="500px"
                editorProps={{ $blockScrolling: true }}
                enableBasicAutocompletion
                value={this.state.answer}
                defaultValue={this.state.answer}
                tabSize={2}
                setOptions={{ cursorStyle: 'wide' }}
                style={{ marginRight: '5px' }}
              />
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Interview;
