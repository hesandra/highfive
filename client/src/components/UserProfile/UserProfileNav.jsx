import React, { Component } from 'react';
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
import axios from 'axios';

class UserProfileNav extends Component {
  constructor(props) {
    super();

    this.state = {
      jobpost: 0,
      submission: 0
    };

    this.getStats = this.getStats.bind(this);
  }

  componentDidMount() {
    const { id } = this.props;
    this.getStats(id);
  }

  getStats(id) {
    axios.get(`http://localhost:3000/api/user/${id}/stats`)
      .then((res) => {
        const { jobpost, submission } = res.data.stats;

        this.setState({
          jobpost: jobpost[0]['count(`id`)'],
          submission: submission[0]['count(`id`)']
        });
      })
      .catch((e) => { console.log(e); });
  }

  render() {
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
    } = this.props;

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
                        <Icon name="pin" />{this.state.jobpost}
                      </Statistic.Value>
                      <Statistic.Label>Job Postings</Statistic.Label>
                    </Statistic>
                    <Statistic>
                      <Statistic.Value>
                        <Icon name="edit" />{this.state.submission}
                      </Statistic.Value>
                      <Statistic.Label>Submissions</Statistic.Label>
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
  }
}

export default UserProfileNav;
