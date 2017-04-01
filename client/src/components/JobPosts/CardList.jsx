import React from 'react';
import { Card, Image, Icon, Rating, List } from 'semantic-ui-react';
import img from '../../../public/images/mock_company_1_hq.jpg';

const CardList = (props) => {
  const companyData = props.companies;
  const cardList = companyData.map((company, index) => {
    return (
      <Card key={company.id} onClick={() => { props.onJobPostClick(company.id); }} href={`/#/jobposts/${company.id}`} color="red" link>
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
              <List.Item icon="globe" content={company.industry} />
              <List.Item icon="marker" content={company.location} />
              <List.Item icon="user" content={company.position} />
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
