import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Col, ControlLabel, Button } from 'react-bootstrap';
import axios from 'axios';

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
            <FormControl name="locationValue" onChange={this.handleInputChange} type="text" placeholder="Los Angeles..." />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={2} >
            Industries
          </Col>
          <Col sm={10}>
            <FormControl name="industries" onChange={this.handleInputChange} type='text' placeholder='name' />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={2} >
            Github
          </Col>
          <Col sm={10}>
            <FormControl name='typeValue' onChange={this.handleInputChange} type='text' placeholder='type' />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={2} >
            LinkedIn
          </Col>
          <Col sm={10}>
            <FormControl type='text' name='imageValue' onChange={this.handleInputChange} placeholder='imageUrl' />
          </Col>
          <Col sm={4} smOffset={5}>
            <Button className='text-center' bsStyle='primary' type="submit">Create</Button>
          </Col>
        </FormGroup>
      </Form>
    )
  }
}

export default EditProfileForm;