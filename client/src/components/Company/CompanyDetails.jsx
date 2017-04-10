
import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import CompanyAuth from './CompanyAuth';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCompany } from '../../actions/company';

class CompanyDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       }
    }

  componentDidMount(){
    this.props.getCompany(this.props.companyAuth.companyAuth.company_backend_profile.id);
  }

renderProfile(){
  console.log(this.props, 'PROPS IN COMPANY DETAILS')
  return (
    <div>
      <Grid fluid>
        <Row>
          <Col xs={6} md={4}>
          {this.props.companyAuth.companyProfile.profileEdited ?
            <div>
            <Image className="company-img text-center" src={this.props.profile_img} circle />
            <h1>{this.props.name}</h1>
            <h2>{this.props.industry_id}</h2>
            <h2>{this.props.location_id}</h2>
            </div> : 
            <div>
            <Image className="company-img text-center" src={this.props.companyAuth.companyAuth.company_backend_profile.profile_img} circle />
            <h1>{this.props.companyAuth.companyAuth.company_backend_profile.name}</h1>
            <h2>{this.props.companyAuth.companyAuth.company_backend_profile.industry_id}</h2>
            <h2>{this.props.companyAuth.companyAuth.company_backend_profile.location_id}</h2>
            </div>
          }
          </Col>
        </Row>
      </Grid>
    </div>
  );
 }
render (){        
    return(
      <div>
        { this.renderProfile() }
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    companyAuth: state,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getCompany }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyDetails);


