import React from 'react';
import { Grid, Row, Col, Image, Button, FormGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createInterview } from '../../actions/company';
import InterviewForm from './InterviewCreation';

class Positions extends React.Component {
  //renderPositions() {
    //map over get and render all positions for company id and position id
 // }
  render() {
    console.log(this.props.companyProfile.createButton, '++++++++++++++++++++++++++++++')
    return (
      <div>
        <div>Here are the job posts</div>
          <FormGroup>
            <Col smOffset={3} sm={8}>
              <Button onClick={() => this.props.createInterview()} type="submit" value="Submit">
              Create new Interview
              </Button>
              <div>
              { this.props.companyProfile.createButton ?
                <InterviewForm /> : ''}
              </div>
            </Col>
          </FormGroup>
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
  return bindActionCreators({ createInterview }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Positions);