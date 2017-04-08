import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Card, Icon, Image, Rating, Header, List, Statistic } from 'semantic-ui-react';
import img from '../../../public/images/mock_company_1_hq.jpg';
import CardList from './CardList';

class JobPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  componentDidMount() {
    const { requestJobPosts } = this.props;
    requestJobPosts();
  }
  render() {
    const { jobPosts } = this.props;
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
                { jobPosts ?
                  <Statistic.Value>{ jobPosts.length } </Statistic.Value>
                  : '' }
                <Statistic.Label>Job Postings </Statistic.Label>
              </Statistic>
            </div>
            <hr />
            { jobPosts ?
              <CardList
                jobPosts={jobPosts}
              />
            : '' }
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default JobPosts;
