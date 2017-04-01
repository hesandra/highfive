import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Header, Icon, Card, List, Rating, Button, Image, Confirm } from 'semantic-ui-react';
import img from '../../../public/images/mock_company_1_hq.jpg';

import ApplyConfirmModal from './ApplyConfirmModal';

const JobPost = (props) => {
  console.log('props passed to jobPost', props);
  const { onJobInterviewClick } = props;
  const { id } = props.params;
  const { jobPosts } = props;
  const jobPost = jobPosts.filter((post, i) => {
    if (post.id === Number(id)) {
      return post;
    }
  });
  return (
    <Grid>
      <Row>
        <Col xs={12} md={12}>
          <Header as="h3" icon textAlign="center">
            Job Post # {id}
            <Icon link name="briefcase" circular />
          </Header>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6} mdOffset={3}>
          <Card color="red" centered>
            <Image height={200} src={img} />
            <Card.Content>
              <Card.Header className="text-shadow blurry-text">
              </Card.Header>
              <Card.Meta>
                <span className="date posted_on">
                  posted on : 03/17/2017
                </span>
              </Card.Meta>
              <Card.Description>
                <List>
                  <List.Item icon="globe" content={jobPost[0].industry} />
                  <List.Item icon="marker" content={jobPost[0].location} />
                  <List.Item icon="user" content={jobPost[0].position} />
                </List>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Rating icon="star" defaultRating={3} maxRating={4} />
              <br />
              <Icon name="user" />
              15 applicants
              <br />
            </Card.Content>
          </Card>
          <ApplyConfirmModal
            id={id}
            onJobInterviewClick={onJobInterviewClick}
          />
          <p className="text-center">please review our terms and conditions</p>
        </Col>
      </Row>
    </Grid>
  );
};

export default JobPost;
