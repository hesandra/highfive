import React, { Component } from 'react';
import { Link } from 'react-router';
import { Card, Image, Icon, Rating, List, Popup, Button } from 'semantic-ui-react';

import { getLocationName } from '../../utils/Mappings/locationMappings';
import { getIndustryName } from '../../utils/Mappings/industryMappings';
import { getPositionName } from '../../utils/Mappings/positionMappings';

class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  findCardRowLength(length) {
    if (length < 10) {
      return 'two';
    }
    return '4';
  }
  render() {
    let { userSubmissions, filter } = this.props;
    if (!userSubmissions) {
      userSubmissions = [];
    }
    if (!filter) {
      filter = [];
    }
    let jobPosts;
    if (!filter.length) {
      jobPosts = this.props.jobPosts;
    } else {
      jobPosts = this.props.jobPosts.filter((jobpost) => {
        const industry = getIndustryName(jobpost.industry_id);
        if (this.props.filter.includes(industry)) {
          return jobpost;
        }
      });
    }
    const cardList = jobPosts.map((jobPost, index) => {
      const location = getLocationName(jobPost.location_id);
      const industry = getIndustryName(jobPost.industry_id);
      const position = getPositionName(jobPost.level);
      return (
        <Card key={jobPost.id}>
          <Image
            height={200}
            label={{ color: 'blue', content: industry, icon: 'globe', ribbon: true }}
            src={jobPost.company.profile_img}
          />
          <Card.Content>
            <Card.Meta>
              <span className="date posted_on">
                { jobPost.created_at }
              </span>
            </Card.Meta>
            <Card.Description>
              <List>
                <List.Item icon="industry" content={industry} />
                <List.Item icon="marker" content={location} />
                <List.Item icon="user" content={position} />
              </List>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Rating icon="star" defaultRating={0} maxRating={4} />
            <br />
            <Icon name="user" />
            { jobPost.submission.length } applicants
              <br />
            <Link to={`/jobposts/${jobPost.id}`}>
            { userSubmissions.includes(jobPost.id) ? <Button disabled fluid> Already Applied</Button> : <Button color="green" fluid>Apply!</Button>
            }
            </Link>
          </Card.Content>
        </Card>
      );
    });
    return (
      <div>
        { filter.length ?
          <div>
            <h2 className="text-center">Match Found</h2>
            <Card.Group id="single-card-show" itemsPerRow={'one'}>
              { cardList }
            </Card.Group>
          </div>
          :
          <Card.Group doubling itemsPerRow={'two'}>
            { cardList }
          </Card.Group>
        }
      </div>
    );
  }
}

export default CardList;
