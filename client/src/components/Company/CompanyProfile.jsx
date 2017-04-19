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
import ReactSelectize from 'react-selectize';
const SimpleSelect = ReactSelectize.SimpleSelect;
import NotificationSystem from 'react-notification-system';

const defaultColors = {
  success: {
    rgb: '33, 133, 208',
    hex: '#77C9D4'
  },
  error: {
    rgb: '236, 61, 61',
    hex: '#77C9D4'
  },
  warning: {
    rgb: '235, 173, 23',
    hex: '#77C9D4'
  },
  info: {
    rgb: '54, 156, 199',
    hex: '#77C9D4'
  }
};
const defaultShadowOpacity = '0.9';

const style = {
  NotificationItem: {
    DefaultStyle: {
      backgroundColor: 'grey',
      fontSize: '20px'
    },
    success: {
      borderTop: '2px solid grey',
      rgb: '33, 133, 208',
      backgroundColor: 'black',
      color: 'white',
      marginTop: '75px',
      WebkitBoxShadow: '0 0 1px rgba(' + defaultColors.success.rgb + ',' + defaultShadowOpacity + ')',
      MozBoxShadow: '0 0 1px rgba(' + defaultColors.success.rgb + ',' + defaultShadowOpacity + ')',
      boxShadow: '0 0 1px rgba(' + defaultColors.success.rgb + ',' + defaultShadowOpacity + ')'
    },
    Dismiss: {
      DefaultStyle: {
        backgroundColor: '#2185D0',
        color: '#2185D0'
      },
      success: {
        color: 'grey',
        backgroundColor: '#2185D0'
      }
    }
  }
};



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
    this.notificationSystem = null;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addNotification = this.addNotification.bind(this);
  }

  addNotification() {
    if (this.notificationSystem) {
      this.notificationSystem.addNotification({
        message: 'profile updated',
        level: 'success',
        position: 'tr',
        autoDismiss: 5
      });
    }
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
    const { addNotification } = this.props;
    event.preventDefault();
    this.props.submitProfile({ updatedProfile: this.state, companyId: this.props.profile.companyAuth.company_backend_profile[0].id });
    this.addNotification();
  }

  renderForm() {
    console.log('this.props in companyprofile', this.props)
    return (
      <Form horizontal onSubmit={this.handleSubmit}>
        <br />
        <div className="dropzone">
          <Dropzone />
        </div>
        <br />
        <FormGroup>
          <Col componentClass={ControlLabel} sm={1}>
            Name
        </Col>
          <Col sm={8}>
            <FormControl name="name" type="text" value={this.state.name} onChange={this.handleChange} />
          </Col>
        </FormGroup>
        {/* <br />
        <FormGroup>
          <Col componentClass={ControlLabel} sm={1}>
            Profile Video
        </Col>
          <Col sm={8}>
            <FormControl name="profile_img" type="text" value={this.state.profile_img} onChange={this.handleChange} />
          </Col>
        </FormGroup>*/}
        <br />
        <FormGroup>
          <Col componentClass={ControlLabel} sm={1}>
            Industry
        </Col>
          <Col sm={8}>
            {/*<SimpleSelect
        theme="bootstrap"
        placeholder="Select industry"
        onValueChange={this.handleChange}
        name="industry_id"
        onValueChange={(selection) => {
          if (selection) {
            return {
              property: 'industry_id',
              data: this.state.industry_id }
          }
        }}
      >{this.props.profile.companyProfile.industries.map((item) => 
                <option value={item.id}>{item.name}</option>
                )} 
      </SimpleSelect>*/}
            <FormGroup controlId="formControlsSelect">
              <Col sm={8}>
                <FormControl componentClass="select" placeholder="select" name="industry_id" value={this.state.industry_id} onChange={this.handleChange}>
                  <option value="select">select</option>
                  {this.props.profile.companyAuth.industries.map((item) =>
                    <option value={item.id}>{item.name}</option>
                  )}
                </FormControl>
              </Col>
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
              <Col sm={8}>
                <FormControl componentClass="select" placeholder="select" name="location_id" value={this.state.location_id} onChange={this.handleChange}>
                  <option value="select">select</option>
                  {this.props.profile.companyAuth.locations.map((item) =>
                    <option value={item.id}>{item.city}</option>
                  )}
                </FormControl>
              </Col>
            </FormGroup>
          </Col>
        </FormGroup>
        <br />
        <FormGroup>
          <Col componentClass={ControlLabel} sm={1}>
            Email
        </Col>
          <Col sm={8}>
            <FormControl name="email" type="text" value={this.state.email} onChange={this.handleChange} />
          </Col>
        </FormGroup>
        <br />
        <FormGroup>
          <Col componentClass={ControlLabel} sm={1}>
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
    )
  }
  render() {
    console.log('props in companyprofile render', this.props)
    if (this.props.profile.companyAuth.industries) {
      return (
        <div>
          {this.renderForm()}
          <NotificationSystem ref={n => this.notificationSystem = n} style={style} />
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