import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Col, ControlLabel, Button, Checkbox } from 'react-bootstrap';
import axios from 'axios';
import IndustriesMultiSelect from './IndustriesMultiSelect';
import LocationsMultiSelect from './LocationMultiSelect';

class EditProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationValue: '',
      industryValue: null,
      githubLink: '',
      linkedInLink: '',
    };
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
  }
  render() {
    return (
      <Form horizontal onSubmit={this.handleSubmit}>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={2} >
            Location
          </Col>
          <Col sm={10}>
            <LocationsMultiSelect />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={2} >
            Industries
          </Col>
          <Col sm={10}>
            <IndustriesMultiSelect />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={2} >
            Github
          </Col>
          <Col sm={10}>
            <FormControl name="typeValue" onChange={this.handleInputChange} type="text" placeholder="Github" />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={2} >
            LinkedIn
          </Col>
          <Col sm={10}>
            <FormControl type="text" name="githubValue" onChange={this.handleInputChange} placeholder="LinkedIn" />
          </Col>
          <Col sm={4} smOffset={5}>
            <hr />
            <Button className="text-center" bsStyle="primary" type="submit">Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

export default EditProfileForm;