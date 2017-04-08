
import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import CompanyAuth from './CompanyAuth';

const CompanyDetails = (props, state) => {
  console.log(props, 'IN COMPANY DETAILS')
  console.log(state.companyAuth, 'this.props.companyProfile in COMPANY DETAILS*********************')
  console.log('IN COMPANY DETAILS')
  return (
    <div>
      <Grid fluid>
        <Row>
          <Col xs={6} md={4}>
            <Image className="company-img text-center" src={props.profileVideo} circle />
            <h1>{props.name}</h1>
            <h2>{props.industry}</h2>
            <h2>{props.location}</h2>
          </Col>
        </Row>
      </Grid>
      <div><CompanyAuth /></div>
    </div>
  );
};

export default CompanyDetails;


