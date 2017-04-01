import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Card, Icon, Image, Rating, Header, List } from 'semantic-ui-react';
import img from '../../../public/images/mock_company_1_hq.jpg';

const JobPosts = (props) => {
  return (
    <Grid>
      <Row>
        <Col xs={12}>
          <Header as="h3" icon textAlign="center">
            Job Postings
            <Icon link name="briefcase" circular />
          </Header>
          <hr />
          <Card href={`/#/jobposts/${1}`} color="red" link>
            <Image height={200} src={img} />
            <Card.Content>
              <Card.Header className="text-shadow blurry-text">
                <Icon link name="heart" />
              </Card.Header>
              <Card.Meta>
                <span className="date posted_on">
                  posted on : 03/17/2017
                </span>
              </Card.Meta>
              <Card.Description>
                <List>
                  <List.Item icon="globe" content="finance" />
                  <List.Item icon="marker" content="Los Angeles, CA" />
                  <List.Item icon="user" content="Mid-Level Engineer" />
                </List>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Rating icon="star" defaultRating={3} maxRating={4} />
              <br />
              <Icon name="user" />
                15 applicants
            </Card.Content>
          </Card>
        </Col>
      </Row>
    </Grid>
  );
};

export default JobPosts;
