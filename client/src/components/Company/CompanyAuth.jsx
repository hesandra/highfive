/*import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import { Icon, Label } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getLocationName } from '../../utils/Mappings/locationMappings';

class CompanyAuth extends Component {
constructor(props) {
    super(props);
    this.state = {
       }}

   
  render() {
    console.log(this.props.companyAuth, 'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq')
   return (
     <div>{this.props.companyAuth.company_backend_profile.name}</div>
    )
  } 
}

function mapStateToProps(state) {
  return {
    companyAuth: state.companyAuth
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyAuth);
*/