import React, { Component } from 'react';
import axios from 'axios';
import {
  Form,
  FormGroup,
  FormControl,
  Col,
  ControlLabel,
  Button,
  Checkbox
} from 'react-bootstrap';

import { getLocationId } from '../../utils/Mappings/locationMappings';
import { getIndustryId, industryToIdMappings } from '../../utils/Mappings/industryMappings';
import IndustriesMultiSelect from './IndustriesMultiSelect';
import LocationsMultiSelect from './LocationMultiSelect';

class EditProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationValue: props.location,
      industriesValue: [],
      githubLink: props.githubLink,
      linkedInLink: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState((prevState, props) => {
      return {
        [name]: value
      };
    });
  }
  handleSelectChange(payload) {
    const { property, data } = payload;
    if (property === 'industriesValue') {
      this.setState((prevState, props) => {
        const industries = data;     
        return {
          [property]: industries
        };
      });
    }
    if (property === 'locationValue') {
      this.setState({
        [property]: data.value
      });
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    const { id, handleUpdateUserProfile, addNotification } = this.props;
    const { locationValue, industriesValue, linkedInLink } = this.state;
    const industries = industriesValue.map((industry) => {
      return industryToIdMappings[industry.label];
    });
    const data = {
      location: getLocationId(locationValue),
      industries,
      linkedin_url: linkedInLink,
    };
    handleUpdateUserProfile(id, data);
    addNotification();
  }
  render() {
    const { industries } = this.props;
    return (
      <Form horizontal onSubmit={this.handleSubmit}>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={2} >
            Location
          </Col>
          <Col sm={10}>
            <LocationsMultiSelect
              onSelectChange={this.handleSelectChange}
              location={this.state.locationValue}
            />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={2} >
            Industries
          </Col>
          <Col sm={10}>
            <IndustriesMultiSelect
              onSelectChange={this.handleSelectChange}
              industries={industries}
            />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={2} >
            Github
          </Col>
          <Col sm={10}>
            <FormControl readOnly value={this.props.githubLink} name="typeValue" type="text" placeholder="Github" />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={2} >
            LinkedIn
          </Col>
          <Col sm={10}>
            <FormControl defaultValue={this.props.linkedinLink} type="text" name="linkedInLink" onChange={this.handleInputChange} placeholder="LinkedIn" />
          </Col>
          <Col sm={4} smOffset={5}>
            <hr />
            <Button className="text-center" type="submit">Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

export default EditProfileForm;
