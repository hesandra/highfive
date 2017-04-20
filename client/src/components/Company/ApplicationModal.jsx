import { Form, Col, FormGroup, ControlLabel, FormControl, DropdownButton, MenuItem, Modal } from 'react-bootstrap'
import React from 'react';
import { Grid, Row, Image, Button, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeModal } from '../../actions/company';

class ApplicationModal extends React.Component {

  renderVideos() {
    console.log('props in ApplicatoinModal', this.props);
    return (
      <div>
        {this.props.companyProfile.submissions.map((item, idx) => {
          if (item.id === this.props.companyProfile.applicationVideos.submissionId) {
            return (
              <Modal
                show={this.props.companyProfile.showVideos}
                onHide={()=>{this.props.closeModal()}}
                bsSize="large" aria-labelledby="contained-modal-title-lg">
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-lg">{item.user.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div>
                    {item.video.map((video) => {
                      return (
                        <div>
                        {item.jobpost.question.filter((question) => question.id === video.question_id).map(question =>
                        <h4>Question:{'    '}{question.question}</h4>)}
                          <video width="600" controls
                            src={video.href} type="video/webm">
                          </video>
                          {video.answer? 
                         <h4>Answer:{'    '} <pre>{video.answer}</pre></h4>:
                          <div></div>}
                          <div className="space"></div>
                        </div>
                      )
                    })}
                  </div>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
              </Modal>
            )
          }
        })}
      </div>
    );
  }
  render() {
    //console.log('in render of ApplicationModal')
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
  return bindActionCreators({ closeModal }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationModal);

//<Button onClick={}>Close</Button>