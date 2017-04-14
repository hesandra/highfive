import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import { Icon, Label } from 'semantic-ui-react';
import NotificationSystem from 'react-notification-system';
import UserProfileNav from './UserProfileNav';
import IndustryList from './IndustryList';
import { getLocationName } from '../../utils/Mappings/locationMappings';

const defaultColors = {
  success: {
    rgb: '33, 133, 208',
    hex: '#2185D0'
  },
  error: {
    rgb: '236, 61, 61',
    hex: '#ec3d3d'
  },
  warning: {
    rgb: '235, 173, 23',
    hex: '#ebad1a'
  },
  info: {
    rgb: '54, 156, 199',
    hex: '#369cc7'
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
      WebkitBoxShadow: '0 0 1px rgba(' + defaultColors.success.rgb + ',' + defaultShadowOpacity + ')',
      MozBoxShadow: '0 0 1px rgba(' + defaultColors.success.rgb + ',' + defaultShadowOpacity + ')',
      boxShadow: '0 0 1px rgba(' + defaultColors.success.rgb + ',' + defaultShadowOpacity + ')'
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

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.notificationSystem = null;
    this.deleteUserIndustry = this.deleteUserIndustry.bind(this);
    this.addNotification = this.addNotification.bind(this);
  }
  addNotification() {
    if (this.notificationSystem) {
      this.notificationSystem.addNotification({
        message: 'updated Profile',
        level: 'success',
        position: 'tr',
        autoDismiss: 5
      });
    }
  }
  deleteUserIndustry(industryId) {
    const { onUpdateUserProfile, onDeleteIndustryClick } = this.props;
    const userId = this.id;
    onDeleteIndustryClick(userId, industryId);
  }
  render() {
    const { profile, submissions, onJobPostsClick, backend_profile, onUpdateUserProfile, onSubmissionsClick } = this.props;
    let profileImage;
    let name;
    let location;
    let id;
    let githubLink;
    let linkedinLink;
    let industries;

    if (backend_profile) {
      location = getLocationName(backend_profile.location_id);
      id = backend_profile.id;
      this.id = id;
      industries = backend_profile.industry;
      if (backend_profile.linkedin_url) {
        linkedinLink = backend_profile.linkedin_url;
      }
    }
    /* If A User logs in with Github */
    try {
      if (profile.identities) {
        const githubIndex = profile.identities.findIndex((ident) => {
          if (ident.provider === 'github') {
            return ident;
          }
        });

        const linkedinIndex = profile.identities.find((ident) => {
          if (ident.provider === 'linkedin') {
            return ident;
          }
        });
        if (githubIndex) {
          profileImage = `${profile.identities[githubIndex].profileData.picture}&s=460`;
          name = profile.identities[githubIndex].profileData.name;
          // location = profile.identities[githubIndex].profileData.location;
          githubLink = profile.identities[githubIndex].profileData.html_url;
        } else {
          if (linkedinIndex) {
            profileImage = profile.picture;
            name = profile.name;
            location = `${profile.location.name} ${profile.location.country.code}`;
            linkedinLink = profile.publicProfileUrl;
          } else {
            // use e-mail info if avail
            profileImage = profile.picture;
            name = profile.name;
            // location = profile.location || '';
            githubLink = profile.html_url;
          }
        }
      }
    } catch (e) {
      console.log(e);
    }
    return (
      <Grid fluid>
        <Row>
          <Col xs={4} md={4}>
            <h4 className="text-center">{ name } </h4>
            <div className="text-center">
              <Image className="user-profile-img text-center" src={profileImage} circle />
            </div>
            <div className="text-center">
              <small className="text-center"> {location} </small>
              <br />
              <small className="text-center"> looking for work in</small>
              <br />
              { industries ?
                <IndustryList
                  industries={industries}
                  onUserDeleteIndustry={this.deleteUserIndustry}
                /> : '' }
              <hr className="hideline" />
              <a href={githubLink} className="social-links" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-github" aria-hidden="true" />
              </a>
              {' '}
              |
              {' '}
              <a href={linkedinLink} rel="noopener noreferrer" className="social-links" target="_blank">
                <i className="fa fa-linkedin" aria-hidden="true" />
              </a>
            </div>
          </Col>
          <Col xs={8} md={8}>
            <UserProfileNav
              addNotification={this.addNotification}
              onJobPostsClick={onJobPostsClick}
              onUpdateUserProfile={onUpdateUserProfile}
              onSubmissionsClick={onSubmissionsClick}
              submissions={submissions}
              githubLink={profile.html_url}
              linkedinLink={linkedinLink}
              industries={industries}
              id={id}
              location={location}
            />
            <NotificationSystem ref={n => this.notificationSystem = n} style={style} />
          </Col>
        </Row>
      </Grid>
    );
  }
}


export default UserProfile;
