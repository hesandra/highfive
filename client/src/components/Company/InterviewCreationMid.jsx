import React from 'react';
import { Grid, Row, Col, Image, Button, FormGroup, Form, ControlLabel, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ScrollArea from 'react-scrollbar';
import ScrollbarWrapper from 'react-scrollbar';
import ReactDOM from 'react-dom';
import { submitTitle, saveQuestion } from '../../actions/company';
import InterviewForm from './InterviewForm';

class InterviewFormMid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobTitle: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      jobTitle: value,
    });
  }

  handleSubmit(event) {
    this.props.submitTitle(this.state);
    event.preventDefault();
  }

  renderAll() {
    return (
      <div>
      <div>
        <div>
         <div className="spaceQ"></div>
          <h3>Mid-level Software Engineer</h3>
          <Form horizontal onSubmit={this.handleSubmit}>
            <br />
            <FormGroup>
              <Col componentClass={ControlLabel} sm={1}>
                Description
        </Col>
              <Col sm={4}>
                <FormControl name="name" type="text" value={this.state.jobTitel} onChange={this.handleChange} />
              </Col>
            </FormGroup>
          </Form>
          <div className="spaceQ"></div>
          <h3>Select 3-5 Algorithm Questions</h3>
          <div className="scroll">
            <div className="questions" >
          {this.props.companyProfile.questions.map((item, idx) => {
            if (item.type === 'Algorithm' && item.level === this.props.companyProfile.level){
            return (
              <p key={idx} onClick={(question) => {if ((this.props.companyProfile.selectedQuestion.findIndex((el) => el.id === item.id)) === -1) {this.props.saveQuestion(item)}}}>{item.question}</p>
           )}
          })
        }
            </div>
          </div>
          <div className="spaceQ"></div>
          <h3>Select 3-5 System Design Questions</h3>
          <div className="scroll">
            <div className="questions" >
          {this.props.companyProfile.questions.map((item, idx) => {
            if (item.type === 'System Design' && item.level === this.props.companyProfile.level){
            return (
              <p key={idx} onClick={(question) => {if ((this.props.companyProfile.selectedQuestion.findIndex((el) => el.id === item.id)) === -1) {this.props.saveQuestion(item)}}}>{item.question}</p>
           )}
          })
        }
        </div>
        </div>
          <div className="spaceQ"></div>
          <h3>Select 3-5 System Behavioral Questions</h3>
           <div className="scroll">
            <div className="questions" >
          {this.props.companyProfile.questions.map((item, idx) => {
            if (item.type === 'Behavioral' && item.level === this.props.companyProfile.level){
            return (
              <p key={idx} onClick={(question) => {if ((this.props.companyProfile.selectedQuestion.findIndex((el) => el.id === item.id)) === -1) {this.props.saveQuestion(item)}}}>{item.question}</p>
           )}
          })
        }
          </div>
         </div>
        </div>
      </div>
    </div>
    )
  }

  render(){
    return (
    <div>
    <div>{this.renderAll()}</div>
    <div className="spaceQ" />
    <div><InterviewForm /></div>
    </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    companyProfile: state.companyProfile
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ submitTitle, saveQuestion }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(InterviewFormMid);