import React, { Component } from 'react';
import { Grid, Row, Col, Well } from 'react-bootstrap';
import { Button, Dimmer, Segment, Loader } from 'semantic-ui-react';
import recordRTC from 'recordrtc';
import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/monokai';

import LoadingModal from './LoadingModal';


const hasGetUserMedia = !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia || navigator.msGetUserMedia);

class Interview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }
  componentDidMount() {
    if (!hasGetUserMedia) {
      // use sweetalert here
      alert('browser wont work');
    }

    setTimeout(() => {
      this.setState({ loaded: true })
    }, 3000)
  }
  componentDidUpdate(prevProps) {
    if (this.props.stream && !this.state.done) {
      // fire off method to start recording
      this.startRecording(this.props.stream);
    }
  }
  startRecording(stream) {
    const video = recordRTC(stream, { 
      type: 'video',
      mimeType: 'video/webm',
      bitsPerSecond: 512 * 8 * 1024
    });
    video.startRecording();
    setTimeout(() => {
      video.stopRecording((vidsrc) => {
        //  this.props.socket.emit('video', vidsrc);
        this.setState({ src: vidsrc, done: true });
      });
      console.log('this', video);
      console.log(video.blob);
      setTimeout(() => {
        const url = video.getDataURL((dataUrl) => {
          this.props.socket.emit('video', dataUrl);
        });
      }, 1000);
    }, 4000);
  }
  render() {
    console.log(this.props, 'interview');
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
            <div>
              <LoadingModal
                loaded={this.state.loaded}
              />
            <Well>
              <AceEditor
                mode="javascript"
                theme="monokai"
                editorProps={{ $blockScrolling: true }}
                enableBasicAutocompletion
                tabSize={2}
                
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
