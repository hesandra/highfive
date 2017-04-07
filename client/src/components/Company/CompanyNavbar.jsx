import React from 'react';
import { Tab, Row, Col, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router';
import CompanyProfile from './CompanyProfile';
import Positions from './Positions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { junPos, senPos, midPos, getJunQuestions } from '../../actions/company';

const CompanyNavbar = (props) => {
  return (
    <div>
      <Tab.Container id="tabs-with-dropdown" defaultActiveKey="first">
        <Row className="clearfix">
          <Col sm={12}>
            <Nav bsStyle="tabs">
              <NavItem eventKey="first">
                Notifications
                </NavItem>
              <NavItem eventKey="second">
                Submissions
            </NavItem>
              <NavDropdown eventKey="3" title="Jobposts" id="nav-dropdown-within-tab">
                <MenuItem eventKey="3.1" onClick={() => props.junPos()}>Junior</MenuItem>
                <MenuItem eventKey="3.2" onClick={() => props.midPos()}>Mid</MenuItem>
                <MenuItem eventKey="3.3" onClick={() => props.senPos()}>Senior</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey="3.4">Show all positions</MenuItem>
              </NavDropdown>
              <NavItem eventKey="fourth">
                Edit Profile
               </NavItem>
            </Nav>
          </Col>
          <Col sm={12}>
            <Tab.Content animation>
              <Tab.Pane eventKey="first">
                Notifications
            </Tab.Pane>
              <Tab.Pane eventKey="second">
                Submissions
            </Tab.Pane>
              <Tab.Pane eventKey="3.1">
                <Positions />
            </Tab.Pane>
              <Tab.Pane eventKey="3.2">
                <Positions />
            </Tab.Pane>
              <Tab.Pane eventKey="3.3">
                <Positions />
            </Tab.Pane>
              <Tab.Pane eventKey="3.4">
                Show all positions posted by company
            </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <CompanyProfile />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    companyProfile: state.companyProfile
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ junPos, senPos, midPos, getJunQuestions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyNavbar);
