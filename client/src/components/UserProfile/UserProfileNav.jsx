import React from 'react';
import {
  Tab,
  Row,
  Col,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
} from 'react-bootstrap';
import { Icon, Statistic } from 'semantic-ui-react';
import { Link, hashHistory } from 'react-router';
import NotificationSystem from 'react-notification-system';

import SettingsForm from './SettingsForm';
import EditProfileForm from './EditProfileForm';
import SubmissionsList from './SubmissionsList';
import SubmissionModal from './SubmissionModal';

const UserProfileNav = (props) => {
  const {
    onJobPostsClick,
    backend_profile,
    onSubmissionsClick,
    githubLink,
    id,
    location,
    linkedinLink,
    onUpdateUserProfile,
    industries,
    submissions,
    addNotification
  } = props;
  return (
    <div className="text-center">
      <Tab.Container id="tabs-with-dropdown" defaultActiveKey="1">
        <Row className="clearfix">
          <Col sm={8}>
            <Nav bsStyle="tabs">
              <NavItem eventKey="1"><i className="fa fa fa-pie-chart" aria-hidden="true" />Dashboard</NavItem>
              <NavItem eventKey="2" onClick={() => { onSubmissionsClick(id); }}><i className="fa fa-folder-open" aria-hidden="true" />Submissions</NavItem>
              <NavItem onClick={onJobPostsClick} eventKey="3"><i className="fa fa-laptop" aria-hidden="true" />JobPosts</NavItem>
              <NavItem eventKey="4"><i className="fa fa-user" aria-hidden="true" />Edit Profile</NavItem>
            </Nav>
          </Col>
          <Col sm={8}>
            <Tab.Content animation>
              <Tab.Pane eventKey="1">
                <div className="position-matchings">
                  <Statistic>
                    <Statistic.Value>
                      <Icon style={{ fontSize: 80 }} name="computer" size="huge" />
                    </Statistic.Value>
                    <Statistic.Label style={{ fontSize: 20, 'text-transform': 'none', 'font-weight': 400, 'margin-bottom': 15 }}> {5} Position Matchings Found </Statistic.Label>
                  </Statistic>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="2">
                <SubmissionsList submissions={submissions} />
              </Tab.Pane>
              <Tab.Pane eventKey="3" />
              <Tab.Pane eventKey="4">
                <EditProfileForm
                  addNotification={addNotification}
                  handleUpdateUserProfile={onUpdateUserProfile}
                  githubLink={githubLink}
                  id={id}
                  location={location}
                  linkedinLink={linkedinLink}
                  industries={industries}
                />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default UserProfileNav;
