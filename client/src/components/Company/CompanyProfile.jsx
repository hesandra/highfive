import React from 'react';
import CompanyNavbar from './Navbar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { submitProfile } from '../../actions/company';
import { Form, Col, FormGroup, ControlLabel, FormControl, Button, DropdownButton, MenuItem } from 'react-bootstrap';
const $ = require('jquery');
window.jQuery = $;
React.Bootstrap = require('react-bootstrap');
React.Bootstrap.Select = require('react-bootstrap-select');


class CompanyProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      profileVideo: '',
      industry: '',
      location: '',
      email: '',
      address: ''
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
    console.log('name', this.state.name);
    console.log('industry', this.state.industry);
    console.log('email', this.state.email);
    console.log('profileVideo', this.state.profileVideo);
    console.log('address', this.state.address);
    console.log('location', this.state.location);
    console.log('this.state', this.state);
    this.props.submitProfile(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <Form horizontal onSubmit={this.handleSubmit}>
        <br />
        <FormGroup>
          <Col componentClass={ControlLabel} sm={3}>
            Name
        </Col>
          <Col sm={8}>
            <FormControl name="name" type="text" value={this.state.name} onChange={this.handleChange} />
          </Col>
        </FormGroup>
        <br />
        <FormGroup>
          <Col componentClass={ControlLabel} sm={3}>
            Profile Video
        </Col>
          <Col sm={8}>
            <FormControl name="profileVideo" type="text" value={this.state.profileVideo} onChange={this.handleChange} />
          </Col>
        </FormGroup>
        <br />
        <FormGroup>
          <Col componentClass={ControlLabel} sm={3}>
            Industry
        </Col>
          <Col sm={8}>
            <FormGroup controlId="formControlsSelect">
              <FormControl componentClass="select" placeholder="select" name="industry" value={this.state.industry} onChange={this.handleChange}>
                <option value="select">select</option>
                <option >Finance</option>
                <option >Fashion</option>
                <option >Food</option>
              </FormControl>
            </FormGroup>
          </Col>
        </FormGroup>
        <br />
        <FormGroup>
          <Col componentClass={ControlLabel} sm={3}>
            Location
        </Col>
          <Col sm={8}>
            <FormGroup controlId="formControlsSelect">
              <FormControl componentClass="select" placeholder="select" name="location" value={this.state.location} onChange={this.handleChange}>
                <option value="select">select</option>
                <option >San Francisco</option>
                <option >Los Angeles</option>
                <option >Seattle</option>
              </FormControl>
            </FormGroup>
          </Col>
        </FormGroup>
        <br />
        <FormGroup>
          <Col componentClass={ControlLabel} sm={3}>
            Email
        </Col>
          <Col sm={8}>
            <FormControl name="email" type="text" value={this.state.email} onChange={this.handleChange} />
          </Col>
        </FormGroup>
        <br />
        <FormGroup>
          <Col componentClass={ControlLabel} sm={3}>
            Address
        </Col>
          <Col sm={8}>
            <FormControl name="address" type="text" value={this.state.address} onChange={this.handleChange} />
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
    );
  }
}

function mapStateToProps(state) {
  return {
    profile: state.profile,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ submitProfile }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyProfile);
