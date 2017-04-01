import React from 'react';
import { Card, Image, Icon, Rating, List, Popup, Button } from 'semantic-ui-react';
import img from '../../../public/images/mock_company_1_hq.jpg';

const CardList = (props) => {
  const jobPostsData = props.jobPosts;
  const cardList = jobPostsData.map((jobPost, index) => {
    return (
      <Card key={jobPost.id} onClick={() => { props.onJobPostClick(jobPost.id); }} href={`/#/jobposts/${jobPost.id}`} color="red" link>
        <Image height={200} src={img} />
        <Card.Content>
          <Card.Header className="text-shadow blurry-text">
            <Popup
              trigger={<Icon onClick={() => { console.log('click'); }} name="heart" />}
              content="Add job to favorites"
            />
          </Card.Header>
          <Card.Meta>
            <span className="date posted_on">
              posted on : 03/17/2017
            </span>
          </Card.Meta>
          <Card.Description>
            <List>
              <List.Item icon="globe" content={jobPost.industry} />
              <List.Item icon="marker" content={jobPost.location} />
              <List.Item icon="user" content={jobPost.position} />
            </List>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Rating icon="star" defaultRating={3} maxRating={4} />
          <br />
          <Icon name="user" />
            15 applicants
            <br />
          <Button fluid>Apply!</Button>
        </Card.Content>
      </Card>
    );
  });
  return (
    <div>
      <Card.Group doubling itemsPerRow={'four'}>
        { cardList }
      </Card.Group>
    </div>
  );
};

export default CardList;
