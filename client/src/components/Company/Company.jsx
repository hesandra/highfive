import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import CompanyNavbar from './CompanyNavbar';
import CompanyDetails from './CompanyDetails';

const Company = (props) => {
  // before it was  <CompanyDetails {...props.state.companyProfile}/>
  return (
    <Grid fluid>
      <Row>
        <Col xs={3} md={3}>
          <CompanyDetails {...props.state.companyProfile}/>
        </Col>
        <Col xs={9} md={9}>
          <CompanyNavbar
            onProfileClick={props.onProfileClick}
            onJobsClick={props.onJobsClick}
            onSubmissionsClick={props.onSubmissionsClick}
          />
        </Col>
      </Row>
    </Grid>
  );
};

export default Company;
