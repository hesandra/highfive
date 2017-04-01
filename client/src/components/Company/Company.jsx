import React from 'react';
import Navbar from './Navbar';
import CompanyDetails from './CompanyDetails'
import { Grid, Row, Col, Image } from 'react-bootstrap';

const Company = (props) => {
  console.log('props.state.companyProfile', props.state.companyProfile)
  return (
    <Grid fluid>
      <Row>
        <Col xs={6} md={4}>
          <Image className="user-profile-img text-center" src="https://s-media-cache-ak0.pinimg.com/originals/aa/cf/88/aacf88d35d3aa914f61b20a14766a20b.jpg" circle />
          <CompanyDetails {...props.state.companyProfile} />
        </Col>
        <Col xs={6} md={8}>
          <Navbar
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
