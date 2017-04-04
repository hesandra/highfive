import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import CompanyNavbar from './CompanyNavbar';
import CompanyDetails from './CompanyDetails';

const Company = (props) => {
  console.log('props.state.COMPANY', props.state.companyProfile);
  return (
    <Grid fluid>
      <Row>
        <Col xs={6} md={4}>
          <CompanyDetails {...props.state.companyProfile}/>
        </Col>
        <Col xs={6} md={8}>
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
