
import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';

const CompanyDetails = (props) => {
  console.log('props in CompanyDetails', props)
  return (
    <div>
      <Grid fluid>
        <Row>
          <Col xs={6} md={4}>
            <Image className="user-profile-img text-center" src={props.profileVideo} circle />
            <h1>{props.name}</h1>
            <h2>{props.industry}</h2>
            <h2>{props.location}</h2>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default CompanyDetails;


