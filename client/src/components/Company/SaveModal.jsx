import React from 'react';
import Component from 'react';
import { Card, Image, Icon, Rating, List, Popup, Button, Header, Confirm } from 'semantic-ui-react';
import { Form, Col, FormGroup, ControlLabel, FormControl, DropdownButton, MenuItem, Modal } from 'react-bootstrap'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateSubmission, closeApplModal } from '../../actions/company';


/*class SaveModal extends React.Component {
  render() {
    return (
      <Modal trigger={<Button>Save</Button>} basic size='small'>
        <Header icon='archive' content='Archive Old Messages' />
        <Modal.Content>
          <p>Your inbox is getting full, would you like us to enable automatic archiving of old messages?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color='red' inverted>
            <Icon name='remove' /> No
      </Button>
          <Button color='green' inverted>
            <Icon name='checkmark' /> Yes
      </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}*/

/*class SaveModal extends Component {
  state = { open: false }

  show = () => this.setState({ open: true })
  handleConfirm = () => this.setState({ open: false })
  handleCancel = () => this.setState({ open: false })

  render() {
    return (
      <div>
        <Button onClick={this.show}>Show</Button>
        <Confirm
          open={this.state.open}
          onCancel={this.handleCancel}
          onConfirm={this.handleConfirm}
        />
     </div>
    )
  }
}*/

class SaveModal extends React.Component {
 
  render() {
     console.log('this.props', this.props)
    return (
      <div className="modal-container" style={{ height: 200 }}> 
        <Modal
          show={this.props.companyProfile.applUpdate}
          onHide={()=>{this.props.closeApplModal()}}
          //container={this}
          aria-labelledby="contained-modal-title"
          >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title"><h3>Applicant Interview Review</h3></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>You have assessed the applicant's interview performance and saved your update. The status of this application will be updated and the applicant will be informed about your decision. 
            
            If you're not happy with your decision or feedback you can simply redo it. The applicant will always see the latest status</h4> 
          </Modal.Body>
          <Modal.Footer>
            {<Button onClick={()=>{this.props.closeApplModal()}}>Ok</Button>}
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
};


function mapStateToProps(state) {
  return {
    companyProfile: state.companyProfile
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateSubmission, closeApplModal }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SaveModal);