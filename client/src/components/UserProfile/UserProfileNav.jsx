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
              <NavItem eventKey="1">
                Notifications
                <br />
                <i className="fa fa-envelope-open-o" aria-hidden="true"/>
              </NavItem>
              <NavItem
                eventKey="2"
                onClick={() => { onSubmissionsClick(id); }}
              >
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
            </Nav>
          </Col>
          <Col sm={8}>
            <Tab.Content animation>
              <Tab.Pane eventKey="1">
                <div className="position-matchings">
                  <Statistic>
                    <Statistic.Value>
                      <Icon name="computer" size="huge" /><br />
                      5 ( update with dynamic data )
                    </Statistic.Value>
                    <Statistic.Label>Position Matchings Found</Statistic.Label>
                    <Link className="apply-now" to="/jobposts/page/1">apply now</Link>
                  </Statistic>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="2">
                ({ submissions.length })
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
