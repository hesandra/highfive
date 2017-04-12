import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';
import { Link } from 'react-router';

const Signup = (props) => {
  return (
    <Grid>
      <Row className="signup-box col-xs-6 col-sm-5 col-md-4 col-lg-3">
        <div className="text-center">
          <Col>
            <div className="btn-container">
              <Button onClick={props.isCompanyAuthed ? props.onAuthedCompanyLoginClick : props.onCompanyLoginClick} href="#" bsStyle="primary">I'm a Company</Button>
            </div>
          </Col>
          <h3 className="signup-or">or</h3>
          <Col>
            <div className="btn-container">
              <Button onClick={props.isUserAuthed ? props.onAuthedUserLoginClick : props.onUserLoginClick} href="#" bsStyle="primary">I'm an Applicant</Button>
            </div>
          </Col>
        </div>
      </Row>
    </Grid>
  );
};

export default Signup;
