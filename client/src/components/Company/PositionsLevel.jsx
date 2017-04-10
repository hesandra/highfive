import React from 'react';
import { Grid, Row, Col, Image, Button, FormGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createInterview, getQuestions, getPositions } from '../../actions/company';

class PositionsLevel extends React.Component {
  componentDidMount() {
    this.props.getQuestions();
    this.props.getPositions();
  }
  renderJobs() {
    console.log('props in positionslevel', this.props)
    return (
      <div>
        {this.props.companyProfile.jobs.map((item, idx) => {
          if (this.props.companyProfile.level === item.level && this.props.companyProfile.companyReload[0].id === item.company_id) {
            return (
              <div>{item.title}</div>
            )
          }
        })}
        <FormGroup>
          <Col smOffset={3} sm={8}>
            <Button onClick={() => this.props.createInterview()} type="submit" value="Submit">
              Create new Interview
            </Button>
          </Col>
        </FormGroup>
      </div>
    );
  }
  render() {
    if (this.props.companyProfile.jobs !== undefined) {
      return (
        <div>{this.renderJobs()}</div>
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
  return bindActionCreators({ createInterview, getQuestions, getPositions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PositionsLevel);

/*
this.props.getPositions(this.props.companyProfile.companyReload[0].id)


renderJobs(){
    console.log('props in positionslevel', this.props)
    return (
      <div>
       {this.props.companyProfile.jobs.data.jobposts.map((item, idx) => {
        if (this.props.companyProfile.level === item.level){
          return (
            <div>{item.title}</div>
          )}
      })}  
      <div>
          <FormGroup>
          <Col smOffset={3} sm={8}>
            <Button onClick={() => this.props.createInterview()} type="submit" value="Submit">
              Create new Interview
            </Button>
          </Col>
        </FormGroup>
      </div>
      </div>
    );
  }*/