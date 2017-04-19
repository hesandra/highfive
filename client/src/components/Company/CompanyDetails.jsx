
import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import CompanyAuth from './CompanyAuth';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCompany, getIndustries, getLocations } from '../../actions/company';

class CompanyDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount(){
    this.props.getIndustries();
    this.props.getLocations();
    this.props.getCompany(this.props.companyAuth.companyAuth.company_backend_profile.id);
}

  renderProfile() {
    //console.log(this.props, 'PROPS IN COMPANY DETAILS')
    if (this.props.companyAuth.companyProfile.profileEdited) {
      return (
        <div><div className="spaceQ"></div>
          {this.props.companyAuth.companyProfile.picture ?
            <Image className="company-img text-center" src={this.props.companyAuth.companyProfile.picture} circle /> :
            <Image className="company-img text-center" src={this.props.profile_img} circle />}
          <h2>{this.props.name}</h2>
          <div>{this.props.companyAuth.companyAuth.industries.filter((item) => item.id === this.props.industry_id).map(item =>
            <span><i className="fa fa-industry" aria-hidden="true"></i>{'  '}<span>{item.name}</span></span>)}</div>
          <div className="spaceQ"></div>
          <div>{this.props.companyAuth.companyAuth.locations.filter((item) => item.id === this.props.location_id).map(item =>
            <span><i className="fa fa-globe" aria-hidden="true"></i>{'  '}<span>{item.city}</span></span>)}</div>
          <div className="spaceQ"></div>
          <div><span><i className="fa fa-envelope" aria-hidden="true"></i>{'  '}<span>{this.props.email}</span></span></div>
          <div className="spaceQ"></div>
          <div><span><i className="fa fa-address-card-o" aria-hidden="true"></i>{'  '}<span>{this.props.address}</span></span></div>
        </div>)
    }
/*    else if (this.props.companyAuth.companyProfile.companyReload && this.props.companyAuth.companyProfile.industries && this.props.companyAuth.companyAuth.company_backend_profile.name !== this.props.companyAuth.companyProfile.companyReload[0].name) {
      return (
        <div><div className="spaceQ"></div>
          {this.props.companyAuth.companyProfile.picture ?
            <Image className="company-img text-center" src={this.props.companyAuth.companyProfile.picture} circle /> :
            <Image className="company-img text-center" src={this.props.companyAuth.companyProfile.companyReload[0].profile_img} circle />}
          <h2>{this.props.companyAuth.companyProfile.companyReload[0].name}</h2>
          <div>{this.props.companyAuth.companyProfile.industries.filter((item) => item.id === this.props.companyAuth.companyProfile.companyReload[0].industry_id).map(item =>
            <span><i className="fa fa-industry" aria-hidden="true"></i>{'  '}<span>{item.name}</span></span>)}</div>
          <div className="spaceQ"></div>
          <div>{this.props.companyAuth.companyProfile.locations.filter((item) => item.id === this.props.companyAuth.companyProfile.companyReload[0].location_id).map(item =>
            <span><i className="fa fa-globe" aria-hidden="true"></i>{'  '}<span>{item.city}</span></span>)}</div>
          <div className="spaceQ"></div>
          <div><span><i className="fa fa-envelope" aria-hidden="true"></i>{'  '}<span>{this.props.companyAuth.companyProfile.companyReload[0].email}</span></span></div>
          <div className="spaceQ"></div>
          <div><span><i className="fa fa-address-card-o" aria-hidden="true"></i>{'  '}<span>{this.props.companyAuth.companyProfile.companyReload[0].address}</span></span></div>
        </div>)}*/
    
    else {
    console.log('props in companyDetails', this.props)
      return (
        <div><div className="spaceQ"></div>
          {this.props.companyAuth.companyProfile.picture ?
            <Image className="company-img text-center" src={this.props.companyAuth.companyProfile.picture} circle /> :
            <Image className="company-img text-center" src={this.props.companyAuth.companyAuth.company_backend_profile[0].profile_img} circle />}
          <h2>{this.props.companyAuth.companyAuth.company_backend_profile[0].name}</h2>
          <div>{this.props.companyAuth.companyAuth.industries.filter((item) => item.id === this.props.companyAuth.companyAuth.company_backend_profile[0].industry_id).map(item =>
            <span><i className="fa fa-industry" aria-hidden="true"></i>{'  '}<span>{item.name}</span></span>)}</div>
          <div className="spaceQ"></div>
          <div>{this.props.companyAuth.companyAuth.locations.filter((item) => item.id === this.props.companyAuth.companyAuth.company_backend_profile[0].location_id).map(item =>
            <span><i className="fa fa-globe" aria-hidden="true"></i>{'  '}<span>{item.city}</span></span>)}</div>
          <div className="spaceQ"></div>
          <div><span><i className="fa fa-envelope" aria-hidden="true"></i>{'  '}<span>{this.props.companyAuth.companyAuth.company_backend_profile[0].email}</span></span></div>
          <div className="spaceQ"></div>
          <div><span><i className="fa fa-address-card-o" aria-hidden="true"></i>{'  '}<span>{this.props.companyAuth.companyAuth.company_backend_profile[0].address}</span></span></div>
        </div>)
    }
  }
  render() {
    return (
      <div>
        <Grid fluid>
          <Row>
            <Col xs={4} md={12} className="compDetails">
              <div>
              {this.props.companyAuth.companyAuth.industries && this.props.companyAuth.companyAuth.locations ?
                this.renderProfile() :
              <div></div>}
              </div>
            </Col>
          </Row>
        </Grid>
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
  return bindActionCreators({ getCompany, getIndustries, getLocations }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyDetails);


/*}else if (this.props.companyAuth.companyProfile.profileReload) {
      return (
        <div>
          <Image className="company-img text-center" src={this.props.companyAuth.companyProfile.companyReload[0].profile_img} circle />
          <h1>{this.props.companyAuth.companyProfile.companyReload[0].name}</h1>
          <h2>{this.props.companyAuth.companyProfile.companyReload[0].industry_id}</h2>
          <h2>{this.props.companyAuth.companyProfile.companyReload[0].location_id}</h2>
        </div>

      )
    } else if (!this.props.companyAuth.companyProfile.profileReload) {
      return (
        <div>
          <Image className="company-img text-center" src={this.props.companyAuth.companyAuth.company_backend_profile.profile_img} circle />
          <h1>{this.props.companyAuth.companyAuth.company_backend_profile.name}</h1>
          <h2>{this.props.companyAuth.companyAuth.company_backend_profile.industry_id}</h2>
          <h2>{this.props.companyAuth.companyAuth.company_backend_profile.location_id}</h2>
        </div>
      )*/


/*        <h2>{this.props.companyAuth.companyAuth.company_backend_profile.name}</h2>
          <h3>{this.props.companyAuth.companyAuth.company_backend_profile.industry_id}</h3>
          <h3>{this.props.companyAuth.companyAuth.company_backend_profile.location_id}</h3>*/