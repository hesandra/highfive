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
    this.setState({
      index
    });
    const video = document.getElementById('app-video_html5_api');
    const source = document.createElement('source');
    source.setAttribute('src', this.props.videos[index].href);
    video.src = this.props.videos[index].href;
    video.load();
  }
  render() {
    const { questions, videos } = this.props;
    const videoList = videos.map((video, i) => {
      return (<Button key={video.id} onClick={() => {
        this.changeVideo(i);
        this.open();
      }}
      > {`Video # ${i + 1}`} </Button>);
    });
    const videoOptions = {
      height: '400',
      width: '500',
      preload: 'auto',
      autoPlay: true,
      controls: true,
      controlBar: {
        fullscreenControl: false
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
          size="mini"
          onClick={this.open}
        >
        Watch Submission
        </Button>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Your Submission</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4 className="text-center">QUESTION:</h4>
            <p className="text-center"> {this.props.questions[this.state.index].question } </p>
            <h4 className="text-center">ANSWER:</h4>
            <div className="text-center">
              <code>
                { this.props.videos[this.state.index].answer ? 
                  <p> {this.props.videos[this.state.index].answer } </p>
                  : 'no answer given'
                }
              </code>
            </div>
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
