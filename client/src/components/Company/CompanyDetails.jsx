
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import { getCompany, getIndustries, getLocations } from '../../actions/company';

class CompanyDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {
    this.props.getCompany(this.props.companyAuth.companyAuth.company_backend_profile.id);
  }

  renderProfile() {
    if (this.props.companyAuth.companyProfile.profileEdited) {
      return (
        <div>
          <div className="spaceQ" />
          {this.props.companyAuth.companyProfile.picture ?
            <Image className="company-img text-center" src={this.props.companyAuth.companyProfile.picture} circle /> :
            <Image className="company-img text-center" src={this.props.profile_img} circle />}
          <h2>{this.props.name}</h2>
          <div>{this.props.companyAuth.companyAuth.industries.filter(item => item.id === this.props.industry_id).map(item =>
            <span><i className="fa fa-industry" aria-hidden="true" />{'  '}<span>{item.name}</span></span>)}</div>
          <div className="spaceQ" />
          <div>{this.props.companyAuth.companyAuth.locations.filter(item => item.id === this.props.location_id).map(item =>
            <span><i className="fa fa-globe" aria-hidden="true" />{'  '}<span>{item.city}</span></span>)}</div>
          <div className="spaceQ" />
          <div><span><i className="fa fa-envelope" aria-hidden="true" />{'  '}<span>{this.props.email}</span></span></div>
          <div className="spaceQ" />
          <div><span><i className="fa fa-map-marker" aria-hidden="true" />{'  '}<span>{this.props.address}</span></span></div>
        </div>);
    }
    return (
      <div>
        <div className="spaceQ" />
        {this.props.companyAuth.companyProfile.picture ?
          <Image className="company-img text-center" src={this.props.companyAuth.companyProfile.picture} circle /> :
          <Image className="company-img text-center" src={this.props.companyAuth.companyAuth.company_backend_profile[0].profile_img} circle />}
        <h2>{this.props.companyAuth.companyAuth.company_backend_profile[0].name}</h2>
        <div>{this.props.companyAuth.companyAuth.industries.filter(item => item.id === this.props.companyAuth.companyAuth.company_backend_profile[0].industry_id).map(item =>
          <span><i className="fa fa-industry" aria-hidden="true" />{'  '}<span>{item.name}</span></span>)}</div>
        <div className="spaceQ" />
        <div>{this.props.companyAuth.companyAuth.locations.filter(item => item.id === this.props.companyAuth.companyAuth.company_backend_profile[0].location_id).map(item =>
          <span><i className="fa fa-globe" aria-hidden="true" />{'  '}<span>{item.city}</span></span>)}</div>
        <div className="spaceQ" />
        <div><span><i className="fa fa-envelope" aria-hidden="true" />{'  '}<span>{this.props.companyAuth.companyAuth.company_backend_profile[0].email}</span></span></div>
        <div className="spaceQ" />
        <div><span><i className="fa fa-map-marker" aria-hidden="true" />{'  '}<span>{this.props.companyAuth.companyAuth.company_backend_profile[0].address}</span></span></div>
      </div>);
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
                <div />}
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
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