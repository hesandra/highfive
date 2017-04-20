import React from 'react';
import { Grid, Row, Col, Image, Button, FormGroup, Form, ControlLabel, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ScrollArea from 'react-scrollbar';
import ScrollbarWrapper from 'react-scrollbar';
import ReactDOM from 'react-dom';
import { submitDescription, saveQuestion, createJobPost } from '../../actions/company';
import InterviewForm from './InterviewForm';
import PostModal from './PostModal';

class InterviewFormMid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  renderAll() {
    //console.log(this.props, 'this.props in interviewCreationMid')
    return (
      <div>
        <div>
          <div>
            {/*<h3>Mid-level Software Engineer</h3>
            <Form horizontal onSubmit={this.handleSubmit}>
              <br />
              <FormGroup>
                <Col componentClass={ControlLabel} sm={2}>
                  <div>Description</div>
              </Col>
                <Col sm={5}>
                  <FormControl name="name" type="text" value={this.state.description} onChange={this.handleChange} onSubmit={() => this.props.submitDescription(this.state)} />
                </Col>
              </FormGroup>
            </Form>
            <Button onClick={() => this.props.createJobPost({ company_id: this.props.companyProfile.companyReload[0].id, level: this.props.companyProfile.level, description: this.props.companyProfile.jobDescription.description, industry_id: this.props.companyProfile.companyReload[0].industry_id, location_id: this.props.companyProfile.companyReload[0].location_id })}>New job position</Button>*/}
            <h3>Algorithm Questions</h3>
            <div className="scroll">
              <div className="questions">
                {this.props.companyProfile.questions.map((item, idx) => {
                  if (item.type === 'Algorithm' && item.level === this.props.companyProfile.level) {
                    return (
                      <p key={idx} onClick={(question) => { if ((this.props.companyProfile.selectedQuestion.findIndex((el) => el.id === item.id)) === -1) { this.props.saveQuestion(item) } }}>{item.question}</p>
                    )
                  }
                })
                }
              </div>
            </div>
            <h3>System Design Questions</h3>
            <div className="scroll">
              <div className="questions" >
                {this.props.companyProfile.questions.map((item, idx) => {
                  if (item.type === 'System Design' && item.level === this.props.companyProfile.level) {
                    return (
                      <p key={idx} onClick={(question) => { if ((this.props.companyProfile.selectedQuestion.findIndex((el) => el.id === item.id)) === -1) { this.props.saveQuestion(item) } }}>{item.question}</p>
                    )
                  }
                })
                }
              </div>
            </div>
            <h3>Behavioral Questions</h3>
            <div className="scroll">
              <div className="questions" >
                {this.props.companyProfile.questions.map((item, idx) => {
                  if (item.type === 'Behavioral' && item.level === this.props.companyProfile.level) {
                    return (
                      <p key={idx} onClick={(question) => { if ((this.props.companyProfile.selectedQuestion.findIndex((el) => el.id === item.id)) === -1) { this.props.saveQuestion(item) } }}>{item.question}</p>
                    )
                  }
                })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    //console.log(this.props, 'INTERVIEWCREATION Mid-level COMPANYPROFILE');
    if (this.props.companyProfile.showJobModal){
      return (
        <div><PostModal /></div>
      )} else if (this.props.companyProfile.showJobModal === false){
    return (
      <Grid>
          <Row className="show-grid">
            <Col xs={6} md={5} >{this.renderAll()}</Col>
            <Col xs={6} md={4} ><InterviewForm /></Col>
          </Row>
        </Grid>
    )}
    else {
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
  return bindActionCreators({ submitDescription, saveQuestion, createJobPost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(InterviewFormMid);