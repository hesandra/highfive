import React from 'react';
import { Card, Image, Icon, Rating, List, Popup, Button, Modal, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateSubmission} from '../../actions/company';


class SaveModal extends React.Component {
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
}

function mapStateToProps(state) {
  return {
    companyProfile: state.companyProfile
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateSubmission }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SaveModal);