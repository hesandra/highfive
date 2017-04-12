import { Form, Col, FormGroup, ControlLabel, FormControl, DropdownButton, MenuItem, Modal } from 'react-bootstrap'
import React from 'react';
import { Grid, Row, Image, Button, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ApplicationModal extends React.Component {
 
  renderVideos() {
    console.log('props in ApplicatoinModal', this.props);
    return (
      <div>
      <Modal 
      show={this.props.companyProfile.showVideos}
      bsSize="large" aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">Andrew Yi</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Application Video</h4>
          <div>
            <video width="800" controls
            src={this.props.companyProfile.applicationVideos} type="video/webm">
            </video>
          </div>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
      </div>
    );
  }
  render() {
    console.log('in render of ApplicationModal')
    if (this.props.companyProfile.showVideos) {
      return (
        <div>{this.renderVideos()}</div>
      )
    } else {
      return (<div>{}</div>)
    }
  }
}

function mapStateToProps(state) {
  return {
    companyProfile: state.companyProfile
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationModal);

//<Button onClick={}>Close</Button>