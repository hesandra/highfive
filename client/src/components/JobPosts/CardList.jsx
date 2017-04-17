import React, { Component } from 'react';
import { Card, Image, Icon, Rating, List, Popup, Button } from 'semantic-ui-react';

import Infinite from 'react-infinite';


import { getLocationName } from '../../utils/Mappings/locationMappings';
import { getIndustryName } from '../../utils/Mappings/industryMappings';
import { getPositionName } from '../../utils/Mappings/positionMappings';

class InfiniteScroll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: this.buildElements(0, 10),
      isInfiniteLoading: false
    };
    this.buildElements = this.buildElements.bind(this);
    this.handleInfiniteLoad = this.handleInfiniteLoad.bind(this);
  }
  handleInfiniteLoad() {
    setTimeout(() => {
      var elemLength = this.state.elements.length,
        newElements = this.buildElements(elemLength, elemLength + 10);
      this.props.onScroll(2);
    }, 2500);
    console.log('go FETCH');
  }
  buildElements(start, end) {
    var elements = [];
    for (var i = start; i < end; i++) {
      elements.push(<li key={i}>{i}</li>);
    }
    return elements;
  }
  infiniteLoading() {
    return (<div>Loading...</div>);
  }
  findCardRowLength(length) {
    if (length < 10) {
      return 'two';
    }
    return '4';
  }
  render() {
    let jobPosts;
    console.log(this.state);
    if (!this.props.filter.length) {
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
        <Card key={jobPost.id} href={`/jobposts/${jobPost.id}`} color="red" link>
          <Image
            height={200}
            label={{ color: 'blue', content: industry, icon: 'globe', ribbon: true }}
            src={jobPost.company.profile_img}
          />
          <Card.Content>
            <Card.Meta>
              <span className="date posted_on">
                posted on : 03/17/2017
              </span>
            </Card.Meta>
            <Card.Description>
              <List>
                <List.Item icon="globe" content={industry} />
                <List.Item icon="marker" content={location} />
                <List.Item icon="user" content={position} />
              </List>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Rating icon="star" defaultRating={3} maxRating={4} />
            <br />
            <Icon name="user" />
              15 applicants
              <br />
            <Button color="green" fluid>Apply!</Button>
          </Card.Content>
        </Card>
      );
    });
    return (
      <div>
        <Card.Group doubling itemsPerRow={'two'}>
          { cardList }
        </Card.Group>
      </div>
    );
  }
}

export default InfiniteScroll;
