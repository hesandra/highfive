import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import UserProfileNav from './UserProfileNav';

const UserProfile = (props) => {
  const { profile, onJobPostsClick } = props;
  console.log(profile);
  let profileImage;
  let name;
  let location;
  let githubLink;

  /* If A User logs in with Github */
  try {
    if (profile.identities) {
      const githubIndex = profile.identities.findIndex((ident) => {
        if (ident.provider === 'github') {
          return ident;
        }
      });
      profileImage = `${profile.identities[githubIndex].profileData.picture}&s=460`;
      name = profile.identities[githubIndex].profileData.name;
      location = profile.identities[githubIndex].profileData.location;
      githubLink = profile.identities[githubIndex].profileData.html_url;
      console.log(location);
    }
  } catch (e) {
    console.log(e);
  }
  return (
    <Grid fluid>
      <Row>
        <hr />
      </Row>
      <Row>
        <Col xs={4} md={4}>
          <h4 className="text-center">{ name } </h4>
          <div className="text-center">
            <Image className="user-profile-img text-center" src={profileImage} circle />
          </div>
          <div className="text-center">
            <small className="text-center"> {location} </small>
            <hr />
            <a href={githubLink} rel="noopener noreferrer" target="_blank">
              <i className="fa fa-github" aria-hidden="true" />
            </a>
          </div>
        </Col>
        <Col xs={8} md={8}>
          <UserProfileNav
            onJobPostsClick={onJobPostsClick}
          />
        </Col>
      </Row>
    </Grid>
  );
};

export default UserProfile;
