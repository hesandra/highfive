import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';
import { Link } from 'react-router';

const Signup = (props) => {
  return (
    <div>
      <Grid>
        <Row>
          <Col xs={6} md={6}>
            <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
              <h3>Company</h3>
              <p>Company</p>
              <p>
                <Button onClick={props.onCompanyLoginClick} href="#" bsStyle="default">Login</Button>
              </p>
            </Thumbnail>
          </Col>
          <Col xs={6} md={6}>
            <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
              <h3>Applicant</h3>
              <p>Applicant</p>
              <p>
                <Button onClick={props.onUserLoginClick} href="#" bsStyle="default">Login</Button>
              </p>
            </Thumbnail>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default Signup;
