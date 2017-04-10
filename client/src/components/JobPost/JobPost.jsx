import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Header, Icon, Card, List, Rating, Button, Image, Confirm } from 'semantic-ui-react';
import { getLocationName } from '../../utils/Mappings/locationMappings';
import { getIndustryName } from '../../utils/Mappings/industryMappings';
import { getPositionName } from '../../utils/Mappings/positionMappings';

import ApplyConfirmModal from './ApplyConfirmModal';

class JobPost extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  componentDidMount() {
    const { id } = this.props.params;
    const { jobPosts } = this.props;
    const { fetchJobPostData } = this.props;
    // send ajax action to grab jobpost if we don't have it in our store.
    if (!jobPosts.length) {
      fetchJobPostData(id);
    }
  }
  render() {
    console.log(this.props);
    const { onJobInterviewClick, jobPost } = this.props;
    const { id } = this.props.params;
    let location;
    let industry;
    let position;

    if (jobPost) {
      location = getLocationName(jobPost.location_id);
      industry = getIndustryName(jobPost.industry_id);
      position = getPositionName(jobPost.level);
    }
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
          { jobPost ?
            <div>
            <Card color="red" centered>
              <Image
                height={200}
                src={jobPost.company.profile_img}
                label={{ color: 'blue', content: industry, icon: 'globe', ribbon: true }}
              />
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
              </Card.Content>
            </Card>
              <ApplyConfirmModal
                id={id}
                onJobInterviewClick={onJobInterviewClick}
              />
              <p className="text-center">please review our terms and conditions</p>
            </div>
            : '' }
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default JobPost;
