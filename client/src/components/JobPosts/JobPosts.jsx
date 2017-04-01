import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Card, Icon, Image, Rating, Header, List, Statistic } from 'semantic-ui-react';
import img from '../../../public/images/mock_company_1_hq.jpg';
import CardList from './CardList';

const JobPosts = (props) => {
  const { onJobPostClick, companies } = props;
  return (
    <Grid>
      <Row>
        <Col md={12}>
          <Header as="h3" icon textAlign="center">
            Job Postings
            <Icon link name="briefcase" circular />
          </Header>
          <div className="text-center">
            <Statistic>
              <Statistic.Value>{ companies.length } </Statistic.Value>
              <Statistic.Label>Job Postings </Statistic.Label>
            </Statistic>
          </div>
          <hr />
          <CardList
            companies={companies}
            onJobPostClick={onJobPostClick}
          />
        </Col>
      </Row>
    </Grid>
  );
};

export default JobPosts;

  // <Card onClick={onJobPostClick} href={`/#/jobposts/${1}`} color="red" link>
          //   <Image height={200} src={img} />
          //   <Card.Content>
          //     <Card.Header className="text-shadow blurry-text">
          //       <Icon link name="heart" />
          //     </Card.Header>
          //     <Card.Meta>
          //       <span className="date posted_on">
          //         posted on : 03/17/2017
          //       </span>
          //     </Card.Meta>
          //     <Card.Description>
          //       <List>
          //         <List.Item icon="globe" content="finance" />
          //         <List.Item icon="marker" content="Los Angeles, CA" />
          //         <List.Item icon="user" content="Mid-Level Engineer" />
          //       </List>
          //     </Card.Description>
          //   </Card.Content>
          //   <Card.Content extra>
          //     <Rating icon="star" defaultRating={3} maxRating={4} />
          //     <br />
          //     <Icon name="user" />
          //       15 applicants
          //   </Card.Content>
          // </Card>