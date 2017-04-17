import React from 'react';
import { Grid, Row, Col, Image, Button, FormGroup, Form, ControlLabel, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ScrollArea from 'react-scrollbar';
import ScrollbarWrapper from 'react-scrollbar';
import ReactDOM from 'react-dom';
import { submitDescription, saveQuestion, createJobPost } from '../../actions/company';
import InterviewForm from './InterviewForm';
import PostModal from './PostModal'

class InterviewFormSen extends React.Component {
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
    //console.log('in render all for senrion creation form')
    return (
      <div>
        <div>
          <div>
            <div className="spaceQ"></div>
            {/*<h3>Senior Software Engineer</h3>
            <Form horizontal onSubmit={this.handleSubmit}>
              <br />
              <FormGroup>
                <Col componentClass={ControlLabel} sm={1}>
                  Description
                </Col>
                <Col sm={4}>
                  <FormControl name="name" type="text" value={this.state.description} onChange={this.handleChange} onSubmit={() => this.props.submitDescription(this.state)} />
                </Col>
              </FormGroup>
            </Form>
            <Button onClick={() => this.props.createJobPost({ company_id: this.props.companyProfile.companyReload[0].id, level: this.props.companyProfile.level, description: this.props.companyProfile.jobDescription.description, industry_id: this.props.companyProfile.companyReload[0].industry_id, location_id: this.props.companyProfile.companyReload[0].location_id })}>New job position</Button>*/}
            <div className="spaceQ"></div>
            <h4>Select 1 Algorithm Question</h4>
            <div className="scroll">
              <div className="questions" >
                {this.props.companyProfile.questions.map((item, idx) => {
                  if (item.type === 'Algorithm' && item.level === this.props.companyProfile.level) {
                    //console.log('item in InterviewCreation Senior', item)
                    return (
                      <p key={idx} onClick={(question) => { if ((this.props.companyProfile.selectedQuestion.findIndex((el) => el.id === item.id)) === -1) { this.props.saveQuestion(item) } }}>{item.question}</p>
                    )
                  }
                })
                }
              </div>
            </div>
            <div className="spaceQ"></div>
            <h4>Select 1 System Design Question</h4>
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
            <div className="spaceQ"></div>
            <h4>Select 1 System Behavioral Question</h4>
            <div className="scroll">
              <div className="questions" >
                {this.props.companyProfile.questions.map((item, idx) => {
                  if (item.type === 'Behavioral' && item.level === this.props.companyProfile.level) {
                    return (
                      <p key={idx} onClick={(question) => { if ((this.props.companyProfile.selectedQuestion.findIndex((el) => el.id === item.id)) === -1) { this.props.saveQuestion(item) } }}>{item.title} | {item.question}</p>
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
    //console.log(this.props, 'INTERVIEWCREATION SENIOR COMPANYPROFILE');
    if (this.props.companyProfile.showJobModal){
      return (
        <div><PostModal /></div>
      )} else if (this.props.companyProfile.showJobModal === false){
    return (
      <div>
        <div>{this.renderAll()}</div>
        <div className="spaceQ" />
        <div><InterviewForm /></div>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(InterviewFormSen);