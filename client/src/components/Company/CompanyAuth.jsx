import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import { Icon, Label } from 'semantic-ui-react';

import { getLocationName } from '../../utils/Mappings/locationMappings';

class CompanyAuth extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };  
  }
 
 
  render() {
    const company_backend_profile = this.props;
    console.log(this.props, this.state, company_backend_profile, 'props in cpmpanyAuth')
   return (
     <div>This could work</div>
   )
          } 
}

export default CompanyAuth;