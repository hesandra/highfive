
import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import CompanyAuth from './CompanyAuth';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class CompanyDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       }
    }

render (){
  console.log(this.props, 'PROPS IN COMPANY DETAILS')
  console.log(this.state, 'PROPS IN COMPANY DETAILS')
  return (
    <div>
      <Grid fluid>
        <Row>
          <Col xs={6} md={4}>
            <Image className="company-img text-center" src={this.props.companyAuth.company_backend_profile.profile_img} circle />
            <h1>{this.props.companyAuth.company_backend_profile.name}</h1>
            <h2>{this.props.companyAuth.company_backend_profile.industry_id}</h2>
            <h2>{this.props.companyAuth.company_backend_profile.location_id}</h2>
          </Col>
        </Row>
      </Grid>
      <div><CompanyAuth /></div>
    </div>
  );
 }
}

function mapStateToProps(state) {
  return {
    companyAuth: state.companyAuth,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyDetails);


