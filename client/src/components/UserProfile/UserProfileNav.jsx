import React from 'react';
import { Tab, Row, Col, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router';
import Form from './Form';

const UserProfileNav = (props) => {
  return (
    <div className="text-center">
      <Tab.Container id="tabs-with-dropdown" defaultActiveKey="first">
        <Row className="clearfix">
          <Col sm={8}>
            <Nav bsStyle="tabs">
              <NavItem eventKey="1">
                Notifications
                <br />
                <i className="fa fa-envelope-open-o" aria-hidden="true" />
              </NavItem>
              <NavItem eventKey="2">
                Submissions
                <br />
                <i className="fa fa-folder-open" aria-hidden="true" />
              </NavItem>
              <NavItem eventKey="3">
                JobPosts
                <br />
                <i className="fa fa-laptop" aria-hidden="true" />
              </NavItem>
              <NavItem eventKey="4">
                Settings
                <br />
                <i className="fa fa-spin fa-cog" aria-hidden="true" />
              </NavItem>
            </Nav>
          </Col>
          <Col sm={8}>
            <Tab.Content animation>
              <Tab.Pane eventKey="1">
                notifications here
            </Tab.Pane>
              <Tab.Pane eventKey="2">
                Submissions
            </Tab.Pane>
              <Tab.Pane eventKey="3">
                <Form />
            </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default UserProfileNav;
