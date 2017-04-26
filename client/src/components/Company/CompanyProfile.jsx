import React from 'react';
import NotificationSystem from 'react-notification-system';
import { Form, Col, FormGroup, ControlLabel, FormControl, Button, DropdownButton, MenuItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { submitProfile, getCompany, getIndustries, getLocations } from '../../actions/company';
import CompanyAuthService from '../../utils/companyAuthService';
import Dropzone from '../Dropzone/dropzone';
import CompanyNavbar from './CompanyNavbar';


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
      WebkitBoxShadow: `0 0 1px rgba(${defaultColors.success.rgb},${defaultShadowOpacity})`,
      MozBoxShadow: `0 0 1px rgba(${defaultColors.success.rgb},${defaultShadowOpacity})`,
      boxShadow: `0 0 1px rgba(${defaultColors.success.rgb},${defaultShadowOpacity})`
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

  componentDidMount() {
    this.props.getIndustries();
    this.props.getLocations();
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    const { addNotification } = this.props;
    event.preventDefault();
    this.props.submitProfile({ updatedProfile: this.state, companyId: this.props.profile.companyAuth.company_backend_profile[0].id });
    this.addNotification();
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

  renderForm() {
    return (
      <Form horizontal onSubmit={this.handleSubmit} className="col-xs-8">
        <Dropzone />
        <FormGroup>
          <Col componentClass={ControlLabel}>Name</Col>
          <Col><FormControl name="name" type="text" value={this.state.name} onChange={this.handleChange} /></Col>
        </FormGroup>
        <FormGroup>
          <Col>
            <Col componentClass={ControlLabel}>Industry</Col>
            <FormGroup controlId="formControlsSelect">
              <Col>
                <FormControl componentClass="select" placeholder="select" name="industry_id" value={this.state.industry_id} onChange={this.handleChange}>
                  <option value="select">Select</option>
                  {this.props.profile.companyAuth.industries.map(item =>
                    <option value={item.id}>{item.name}</option>
                    )}
                </FormControl>
              </Col>
            </FormGroup>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel}>Location</Col>
          <Col>
            <FormGroup controlId="formControlsSelect">
              <Col>
                <FormControl componentClass="select" placeholder="select" name="location_id" value={this.state.location_id} onChange={this.handleChange}>
                  <option value="select">Select</option>
                  {this.props.profile.companyAuth.locations.map(item =>
                    <option value={item.id}>{item.city}</option>
                  )}
                </FormControl>
              </Col>
            </FormGroup>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel}>Email</Col>
          <Col><FormControl name="email" type="text" value={this.state.email} onChange={this.handleChange} /></Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel}>Address</Col>
          <Col><FormControl name="address" type="text" value={this.state.address} onChange={this.handleChange} /></Col>
        </FormGroup>
        <FormGroup><Col><Button type="submit" value="Submit" className="btn btn-primary">Submit</Button></Col></FormGroup>
      </Form>
    );
  }
  render() {
    if (this.props.profile.companyAuth.industries && this.props.profile.companyAuth.locations) {
      return (
        <div>
          {this.renderForm()}
          <NotificationSystem ref={n => this.notificationSystem = n} style={style} />
        </div>
      );
    }
    return (
      <div />
    );
  }
}

function mapStateToProps(state) {
  return {
    profile: state,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ submitProfile, getIndustries, getLocations }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyProfile);
