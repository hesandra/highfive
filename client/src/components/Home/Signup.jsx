import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';
import { Link } from 'react-router';

const Signup = (props) => {
  console.log(props);
  return (
    <div>
      <Grid>
        <Row>
          <Col xs={6} md={6}>
            <Thumbnail src="" alt="242x200">
              <h3>Company</h3>
              <p>Company</p>
              <p>
                { props.isCompanyAuthed ?
                  <Button onClick={props.onAuthedCompanyLoginClick} href="#" bsStyle="default">Login</Button> :
                  <Button onClick={props.onCompanyLoginClick} href="#" bsStyle="default">Login</Button>
                }
              </p>
            </Thumbnail>
          </Col>
          <Col xs={6} md={6}>
            <Thumbnail src="" alt="242x200">
              <h3>Applicant</h3>
              <p>Applicant</p>
              <p>
                { props.isUserAuthed ?
                  <Button onClick={props.onAuthedUserLoginClick} href="#" bsStyle="default">Login</Button> :
                  <Button onClick={props.onUserLoginClick} href="#" bsStyle="default">Login</Button>
                }
              </p>
            </Thumbnail>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default Signup;
