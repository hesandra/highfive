import React, { Component } from 'react';
import { Button, Confirm } from 'semantic-ui-react';
import { Modal, OverlayTrigger } from 'react-bootstrap';


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
        <Modal show={this.state.showModal} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Terms & Conditions</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Honor Code: </h4>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
            <hr />
            <Button onClick={() => { onJobInterviewClick(id); }} color="blue" attached="bottom">GO!</Button>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default ApplyConfirm;
