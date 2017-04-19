import React from 'react';
import { Grid, Row, Col, Image, Button, FormGroup, Form, ControlLabel, FormControl, Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { submitDescription, saveQuestion, createJobPost, getQuestions } from '../../actions/company';
import InterviewForm from './InterviewForm';
import PositionsLevel from './PositionsLevel';
import ReactDOM from 'react-dom';
import { closePostModal, createInterview, hidePostModal } from '../../actions/company';

class PostModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.getQuestions();
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      description: value,
    });
  }

  handleSubmit(event) {
    this.props.submitDescription(this.state);
    event.preventDefault();
  }
  render() {
    console.log('this.props in PostModal', this.props)
    return (
      <div >
        <Modal
          show={this.props.companyProfile.companyProfile.showJobModal}
          onHide={()=> this.props.hidePostModal()}>
          <Modal.Header closeButton>
            {this.props.companyProfile.companyProfile.level === 0 ?
              <Modal.Title>Junior Software Engineer</Modal.Title> :
              this.props.companyProfile.companyProfile.level === 1 ?
                <Modal.Title>Mid-level Software Engineer</Modal.Title> :
                <Modal.Title>Senior Software Engineer</Modal.Title>}
          </Modal.Header>
          <Modal.Body>
            <Form horizontal onSubmit={this.handleSubmit}>
              <br />
              <FormGroup>
                <Col componentClass={ControlLabel} sm={2}>
                  Description
                </Col>
                <Col sm={5}>
                  <FormControl name="name" type="text" value={this.state.description} onChange={this.handleChange} 
                    onSubmit={() => this.props.submitDescription(this.state)}/>
                </Col>
              </FormGroup>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => this.props.createJobPost({ company_id: this.props.companyProfile.companyAuth.company_backend_profile[0].id, level: this.props.companyProfile.companyProfile.level, description: this.props.companyProfile.companyProfile.jobDescription.description, industry_id: this.props.companyProfile.companyAuth.company_backend_profile[0].industry_id, location_id: this.props.companyProfile.companyAuth.company_backend_profile[0].location_id }) }>New job position</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    companyProfile: state
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ submitDescription, saveQuestion, createJobPost, closePostModal, getQuestions, createInterview, hidePostModal }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostModal);

