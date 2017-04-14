import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'semantic-ui-react';
import VideoPlayer from '../Interview/VideoPlayer';

class SubmissionModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      index: 0
    };
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.changeVideo = this.changeVideo.bind(this);
  }
  close() {
    this.setState({ showModal: false });
  }
  open() {
    this.setState({ showModal: true });
  }
  changeVideo(index) {
    console.log('fired');
    this.setState({
      index
    });
  }
  render() {
    const { questions, videos } = this.props;
    console.log(this.state);
    console.log(this.props);
    const videoList = videos.map((video, i) => {
      return <a key={video.id} onClick={() => this.changeVideo(i)}>{`Video # ${i + 1}`}</a>;
    });
    const videoOptions = {
      height: '400',
      width: '500',
      preload: 'none',
      autoPlay: true,
      controls: true,
      controlBar: {
        fullscreenControl: true
      },
      sources: [
        {
          src: videos[0].href,
          type: 'video/webm'
        },
        {
          src: videos[1].href,
          type: 'video/webm'
        },
        {
          src: videos[2].href,
          type: 'video/webm'
        }
      ]
    };
    return (
      <div>
        <Button 
          primary
          onClick={this.open}
        >
        Watch Submission
        </Button>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Your Submission</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4> 
            <VideoPlayer {...videoOptions} />
            { videoList }
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>

      </div>
    );
  }
}

export default SubmissionModal;