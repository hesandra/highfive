import React from 'react';
import { Tab, Row, Col, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link, hashHistory } from 'react-router';
import SettingsForm from './SettingsForm';
import EditProfileForm from './EditProfileForm';

const UserProfileNav = (props) => {
  const { onJobPostsClick, githubLink, id, location, linkedinLink, onUpdateUserProfile, industries } = props;
  return (
    <div className="text-center">
      <Tab.Container id="tabs-with-dropdown" defaultActiveKey="first">
        <Row className="clearfix">
          <Col sm={12}>
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
              <NavItem onClick={onJobPostsClick} eventKey="3">
                JobPosts
                <br />
                <i className="fa fa-laptop" aria-hidden="true" />
              </NavItem>
              <NavItem eventKey="4">
                Edit Profile
                <br />
                <i className="fa fa-user" aria-hidden="true" />
              </NavItem>
              <NavItem eventKey="5">
                Settings
                <br />
                <i className="fa fa-spin fa-cog" aria-hidden="true" />
              </NavItem>
            </Nav>
          </Col>
          <Col sm={12}>
            <Tab.Content animation>
              <Tab.Pane eventKey="1">
                notifications here
            </Tab.Pane>
              <Tab.Pane eventKey="2">
                Submissions
            </Tab.Pane>
              <Tab.Pane eventKey="3" />
              <Tab.Pane eventKey="4">
                <EditProfileForm
                  onUpdateUserProfile={onUpdateUserProfile}
                  githubLink={githubLink}
                  id={id}
                  location={location}
                  linkedinLink={linkedinLink}
                  industries={industries}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="5">
                <SettingsForm />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default UserProfileNav;
