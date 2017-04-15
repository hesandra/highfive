import React from 'react';
import CompanyNavbar from './CompanyNavbar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { submitProfile } from '../../actions/company';
import { Form, Col, FormGroup, ControlLabel, FormControl, Button, DropdownButton, MenuItem } from 'react-bootstrap';
const $ = require('jquery');
window.jQuery = $;
React.Bootstrap = require('react-bootstrap');
React.Bootstrap.Select = require('react-bootstrap-select');
import CompanyAuthService from '../../utils/companyAuthService';
import Dropzone from '../Dropzone/dropzone';

class CompanyProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      profile_img: '',
      industry_id: '',
      location_id: '',
      email: '',
      address: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
      //industry: value,
      //location: value,
    });
  }

  handleSubmit(event) {
    this.props.submitProfile({ updatedProfile: this.state, companyId: this.props.profile.companyAuth.company_backend_profile.id });
    event.preventDefault();
  }

  renderForm() {
    //console.log('this.props in companyprofile', this.props)
    return (
      <Form horizontal onSubmit={this.handleSubmit}>
        <Dropzone />
        <br />
        <FormGroup>
          <Col componentClass={ControlLabel} sm={1}>
            Name
        </Col>
          <Col sm={8}>
            <FormControl key="name" type="text" value={this.state.name} onChange={this.handleChange} />
          </Col>
        </FormGroup>
        <br />
        <FormGroup>
          <Col componentClass={ControlLabel} sm={1}>
            Profile Video
        </Col>
          <Col sm={8}>
            <FormControl key="profile_img" type="text" value={this.state.profile_img} onChange={this.handleChange} />
          </Col>
        </FormGroup>
        <br />
        <FormGroup>
          <Col componentClass={ControlLabel} sm={1}>
            Industry
        </Col>
          <Col sm={8}>
            <FormGroup controlId="formControlsSelect">
              <FormControl componentClass="select" placeholder="select" key="industry_id" value={this.state.industry_id} onChange={this.handleChange}>
                <option value="select">select</option>
                {this.props.profile.companyProfile.industries.map((item) =>
                  <option value={item.id} key={item.name}>{item.name}</option>
                )}
              </FormControl>
            </FormGroup>

          </Col>
        </FormGroup>
        <br />
        <FormGroup>
          <Col componentClass={ControlLabel} sm={1}>
            Location
        </Col>
          <Col sm={8}>
            <FormGroup controlId="formControlsSelect">
              <FormControl componentClass="select" placeholder="select" key="location_id" value={this.state.location_id} onChange={this.handleChange}>
                <option value="select">select</option>
                {this.props.profile.companyProfile.locations.map((item) =>
                  <option value={item.id} key={item.id}>{item.city}</option>
                )}
              </FormControl>
            </FormGroup>
          </Col>
        </FormGroup>
        <br />
        <FormGroup>
          <Col componentClass={ControlLabel} sm={1}>
            Email
        </Col>
          <Col sm={8}>
            <FormControl key="email" type="text" value={this.state.email} onChange={this.handleChange} />
          </Col>
        </FormGroup>
        <br />
        <FormGroup>
          <Col componentClass={ControlLabel} sm={1}>
            Address
        </Col>
          <Col sm={8}>
            <FormControl key="address" type="text" value={this.state.address} onChange={this.handleChange} />
          </Col>
        </FormGroup>
        <br />
        <FormGroup>
          <Col smOffset={3} sm={8}>
            <Button type="submit" value="Submit">
              Submit
        </Button>
          </Col>
        </FormGroup>
      </Form>
    )
  }
  render() {
    if (this.props.profile.companyProfile.industries) {
      return (
        <div>
          {this.renderForm()}
        </div>
      )
    } else {
      return (
        <div></div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    profile: state,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ submitProfile }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyProfile);
