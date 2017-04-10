import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import { Icon, Label } from 'semantic-ui-react';
import UserProfileNav from './UserProfileNav';
import IndustryList from './IndustryList';
import { getLocationName } from '../../utils/Mappings/locationMappings';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.deleteUserIndustry = this.deleteUserIndustry.bind(this);
  }
  deleteUserIndustry(industryId) {
    const { onUpdateUserProfile } = this.props;
    const userId= this.id;
    axios.delete(`http://localhost:3000/api/users/${userId}/industry/${industryId}`)
      .then((response) => {
        if (response.status === 201) {
          console.log(response);
          onUpdateUserProfile(response.data.user);
        }
      })
      .catch(e => console.log(e));
  }
  render() {
    const { profile, submissions, onJobPostsClick, backend_profile, onUpdateUserProfile, onSubmissionsClick } = this.props;
    console.log(this.props, 'USSSEEEERRRR')
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
          </Col>
        </Row>
      </Grid>
    );
  };
}


export default UserProfile;
