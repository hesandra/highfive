import React from 'react';
import { Tab, Row, Col, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router';

const Navbar = (props) => {
  return (
    <div>
      <div>This is the company profile</div>
      <Tab.Container id="tabs-with-dropdown" defaultActiveKey="first">
        <Row className="clearfix">
          <Col sm={12}>
            <Nav bsStyle="tabs">
              <NavItem eventKey="first">
               Profile
               </NavItem>
              <NavItem eventKey="second">
               Submissions
            </NavItem>
              <NavDropdown eventKey="3" title="Jobposts" id="nav-dropdown-within-tab">
                <MenuItem eventKey="3.1">Junior</MenuItem>
                <MenuItem eventKey="3.2">Mid</MenuItem>
                <MenuItem eventKey="3.3">Senior</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey="3.4">Separated link</MenuItem>
              </NavDropdown>
            </Nav>
          </Col>
          <Col sm={12}>
            <Tab.Content animation>
              <Tab.Pane eventKey="first">
              Company Profile
            </Tab.Pane>
              <Tab.Pane eventKey="second">
               Submissions
            </Tab.Pane>
              <Tab.Pane eventKey="3.1">
               Junior
            </Tab.Pane>
              <Tab.Pane eventKey="3.2">
               Mid
            </Tab.Pane>
              <Tab.Pane eventKey="3.3">
               Senior
            </Tab.Pane>
              <Tab.Pane eventKey="3.4">
            Tab 3.4 content
            </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default Navbar;
