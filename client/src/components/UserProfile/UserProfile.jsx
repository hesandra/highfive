import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import UserProfileNav from './UserProfileNav';

const UserProfile = (props) => {
  console.log(props);
  const { profile, onJobPostsClick } = props;
  const profileImg = `${profile.picture}&s=460`;
  const name = profile.name;
  const location = profile.location;
  const githubLink = profile.html_url;
  return (
    <Grid fluid>
      <Row>
        <hr />
      </Row>
      <Row>
        <Col xs={6} md={4}>
          <h4 className="text-center">{ name } </h4>
          <div className="text-center">
            <Image className="user-profile-img text-center" src={profileImg} circle />
          </div>
          <div className="text-center">
            <small className="text-center"> {location} </small>
            <hr />
            <a href={githubLink} rel="noopener noreferrer" target="_blank">
              <i className="fa fa-github" aria-hidden="true" />
            </a>
          </div>
        </Col>
        <Col xs={6} md={8}>
          <UserProfileNav
            onJobPostsClick={onJobPostsClick}
          />
        </Col>
      </Row>
    </Grid>
  );
};

export default UserProfile;
