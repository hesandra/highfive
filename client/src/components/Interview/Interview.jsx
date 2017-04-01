import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Button } from 'semantic-ui-react';
import recordRTC from 'recordrtc';

const hasGetUserMedia = !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia || navigator.msGetUserMedia);

class Interview extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  componentDidMount() {
    if (!hasGetUserMedia) {
      // use sweetalert here
      alert('browser wont work');
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.stream && !this.state.done) {
      // fire off method to start recording
      this.startRecording(this.props.stream);
    }
  }
  startRecording(stream) {
    const video = recordRTC(stream, { type: 'video' });
    video.startRecording();
    setTimeout(() => {
      video.stopRecording((vidsrc) => {
        this.setState({ src: vidsrc, done: true });
      });
      console.log('this', video);
      console.log(video.blob);
    }, 2000);
  }
  render() {
    const { requestUserMedia } = this.props;
    return (
      <Grid>
        <Row>
          <Col xs={12} md={12}>
            <h1 className="text-center">Interview here</h1>
            <div className="text-center">
              <Button onClick={requestUserMedia} primary>Get STREAM</Button>
              <hr />
              <video src={this.state.src} controls autoPlay />
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Interview;
