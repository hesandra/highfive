import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';
import { Link } from 'react-router';

const Signup = (props) => {
  return (
    <Grid>
      <Row className="signup-box col-xs-3">
        <div className="text-center">
          <Col>
              <div className="btn-container">
                { props.isCompanyAuthed ?
                  <Button onClick={props.onAuthedCompanyLoginClick} href="#" bsStyle="primary">I'm a Company</Button> :
                  <Button onClick={props.onCompanyLoginClick} href="#" bsStyle="primary">I'm a Company</Button>
                }
              </div>
          </Col>
          <h3 className="signup-or">or</h3>
          <Col>
              <div className="btn-container">
                { props.isUserAuthed ?
                  <Button onClick={props.onAuthedUserLoginClick} href="#" bsStyle="primary">I'm an Applicant</Button> :
                  <Button onClick={props.onUserLoginClick} href="#" bsStyle="primary">I'm an Applicant</Button>
                }
              </div>
          </Col>
        </div>
      </Row>
    </Grid>
  );
};

export default Signup;
