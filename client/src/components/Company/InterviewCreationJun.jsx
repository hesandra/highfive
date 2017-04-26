import React from 'react';
import { Card } from 'semantic-ui-react';
import { Grid, Row, Col, Image, Button, FormGroup, Form, ControlLabel, FormControl, Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { submitDescription, saveQuestion, createJobPost, closeModal } from '../../actions/company';
import InterviewForm from './InterviewForm';
import PostModal from './PostModal';


class InterviewFormJun extends React.Component {
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
    return (
      <div>
        <Card color="red">
          <Card.Content>
            <Card.Header>Algorithm Questions</Card.Header>
            <Card.Description>
              {
                this.props.companyProfile.questions.map((item, idx) => {
                  if (item.type === 'Algorithm' && item.level === this.props.companyProfile.level) {
                    return (
                      <p key={idx} onClick={(question) => { if ((this.props.companyProfile.selectedQuestion.findIndex(el => el.id === item.id)) === -1) { this.props.saveQuestion(item); } }}>
                        { item.question}
                      </p>
                    );
                  }
                })
              }
            </Card.Description>
          </Card.Content>
        </Card>
        <Card color="red">
          <Card.Content>
            <Card.Header>System Design Questions</Card.Header>
            <Card.Description>
              {this.props.companyProfile.questions.map((item, idx) => {
                if (item.type === 'System Design' && item.level === this.props.companyProfile.level) {
                  return (
                    <p key={idx} onClick={(question) => { if ((this.props.companyProfile.selectedQuestion.findIndex(el => el.id === item.id)) === -1) { this.props.saveQuestion(item); } }}>{item.question}</p>
                  );
                }
              })
            }
            </Card.Description>
          </Card.Content>
        </Card>
        <Card color="red">
          <Card.Content>
            <Card.Header>Behavioral Questions</Card.Header>
            <Card.Description>
              {this.props.companyProfile.questions.map((item, idx) => {
                if (item.type === 'Behavioral' && item.level === this.props.companyProfile.level) {
                  return (
                    <p key={idx} onClick={(question) => { if ((this.props.companyProfile.selectedQuestion.findIndex(el => el.id === item.id)) === -1) { this.props.saveQuestion(item); } }}>{item.question}</p>
                  );
                }
              })
            }
            </Card.Description>
          </Card.Content>
        </Card>
      </div>
    );
  }

  render() {
    if (this.props.companyProfile.showJobModal) {
      return (
        <div><PostModal /></div>
      );
    } else if (this.props.companyProfile.showJobModal === false) {
      return (
        <Grid>
          <Row className="show-grid">
            <Col xs={6} md={5} >{this.renderAll()}</Col>
            <Col xs={6} md={4} ><InterviewForm /></Col>
          </Row>
        </Grid>

      );
    }

    return (<div>{}</div>);
  }
}

function mapStateToProps(state) {
  return {
    companyProfile: state.companyProfile
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ submitDescription, saveQuestion, createJobPost, closeModal }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(InterviewFormJun);
