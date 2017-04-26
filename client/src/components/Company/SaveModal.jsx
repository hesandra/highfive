import React from 'react';
import { Card, Image, Icon, Rating, List, Popup, Header, Confirm } from 'semantic-ui-react';
import { Form, Col, FormGroup, ControlLabel, FormControl, DropdownButton, MenuItem, Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateSubmission, closeApplModal } from '../../actions/company';

class SaveModal extends React.Component {
  render() {
    return (
      <div className="modal-container" style={{ height: 200 }}>
        <Modal
          show={this.props.companyProfile.applUpdate}
          onHide={() => { this.props.closeApplModal(); }}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title"><h3>Applicant Interview Review</h3></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p className="infotext">Thank you for providing feedback to this applicant! The applicant will be informed about your decision. Feel free to change your feedback anytime if needed</p>
          </Modal.Body>
          <Modal.Footer>
            {<Button className="btn btn-primary" onClick={() => { this.props.closeApplModal(); }}>Ok</Button>}
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    companyProfile: state.companyProfile
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateSubmission, closeApplModal }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SaveModal);
