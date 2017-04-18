import React, { Component } from 'react';
import { Button, Confirm, Segment, Loader } from 'semantic-ui-react';
import { Modal, OverlayTrigger } from 'react-bootstrap';


class LoadingModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: true
    };
    this.show = this.show.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  componentDidMount() {
    this.show();
  }
  show() {
    console.log('fired');
    this.setState({ showModal: true });
    setTimeout(() => {
      console.log('close!');
      this.handleClose();
    }, 3000);
  }
  handleConfirm() {
    this.setState({ showModal: false });
  }
  handleClose() {
    this.setState({ showModal: false });
  }
  render() {
    return (
      <div>
        <Modal bsSize="large" show={this.state.showModal} onHide={this.handleClose}>
          <Modal.Body bsSize="large" bsClass="loading-modal">
            <Loader size="big" active>Setting up Interview </Loader>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default LoadingModal;
