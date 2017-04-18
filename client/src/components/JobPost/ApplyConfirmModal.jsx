import React, { Component } from 'react';
import { Button, Confirm } from 'semantic-ui-react';
import { Modal, OverlayTrigger } from 'react-bootstrap';

import StepInfo from './StepInfo';

class ApplyConfirm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    this.show = this.show.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  show() {
    this.setState({ showModal: true });
  }
  handleConfirm() {
    this.setState({ showModal: false });
  }
  handleClose() {
    this.setState({ showModal: false });
  }
  render() {
    const { id, onJobInterviewClick } = this.props;
    return (
      <div>
        <Button onClick={this.show} color="green" fluid>Apply!</Button>
        <Modal show={this.state.showModal} onHide={this.handleClose} bsSize="large">
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="text-center">
              <h1>Notice!</h1>
              <p>You are about to enter an immutable communication experience! Once activated,
              your submission will be recorded and submitted to the company. Please make sure you are ready to continue</p>
              <hr />

              <h4>What to expect?</h4>
              <StepInfo />
              <hr />

              last but not least...
              <br />
              <iframe src="//giphy.com/embed/yoJC2K6rCzwNY2EngA" width="480" height="300.47999999999996" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
            </div>
            <hr />
            <Button onClick={() => { onJobInterviewClick(id); }} color="blue" attached="bottom">GO!</Button>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default ApplyConfirm;
