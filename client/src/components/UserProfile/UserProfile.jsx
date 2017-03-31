import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';

const UserProfile = (props) => {
  console.log(props);


  const { profile } = props;
  const profileImg = `${profile.picture}&s=460`;
  const name = profile.name;
  const location = profile.location;
  return (
    <Grid>
      <Row>
        <h1 className="text-center"> Profile </h1>
        <hr />
      </Row>
      <Row>
        <Col xs={6} md={4}>
          <h4 className="text-center">{ name } </h4>
          <div className="text-center">
            <Image className="user-profile-img text-center" src={profileImg} circle />
          </div>
          <small className="text-center"> {location} </small>
        </Col>
        <Col xs={6} md={8}>
          <p className="text-center">User info here</p>
        </Col>
      </Row>
    </Grid>
  );
};

export default UserProfile;
