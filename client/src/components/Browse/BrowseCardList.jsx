import React from 'react';
import { Card, Image, Icon, Rating, List, Popup, Button } from 'semantic-ui-react';
import img from '../../../public/images/mock_company_1_hq.jpg';

const BrowseCardList = (props) => {
  const usersData = props.users;
  const cardList = usersData.map((jobPost, index) => {
    return (
      <Card key={jobPost.id} color="blue">
        <Image
          height={200}
          src={jobPost.profile_img}
        />
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
              <List.Item icon="globe" content={jobPost.name} />
              <List.Item icon="marker" content={jobPost.github_url} />
              <List.Item icon="user" content={jobPost.linkedin_url} />
            </List>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
        </Card.Content>
      </Card>
    );
  });
  return (
    <div>
      <Card.Group doubling itemsPerRow={'four'}>
        {cardList}
      </Card.Group>
    </div>
  );
};

export default BrowseCardList;
