import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Card, Icon, Image, Rating, Header, List, Statistic } from 'semantic-ui-react';
import { browserHistory } from 'react-router';

import CardList from './CardList';
import JobPostLoader from './JobPostLoader';
import InfiniteScroll from './InfiniteScroll';

class JobPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      perPage: 10,
      initialPage: 1
    };
    this.handlePageClick = this.handlePageClick.bind(this);
    this.decrementPage = this.decrementPage.bind(this);
    this.incrementPage = this.incrementPage.bind(this);
  }
  componentDidMount() {
    const { jobPosts, backend_profile, requestJobPosts } = this.props;
    const { page } = this.props.params;
    if (!jobPosts.length) {
      const { requestJobPosts } = this.props;
      console.log('refetching');
      console.log(this.props);
    }
    requestJobPosts(page);
  }
  componentDidUpdate(prevProps) {
    const { requestJobPosts } = this.props;
    if (prevProps.params.page !== this.props.params.page) {
      requestJobPosts(this.props.params.page);
    }
  }
  handlePageClick(data) {
    console.log(data);
    const { requestJobPosts } = this.props;
    const selected = data.selected;
    requestJobPosts(data.selected);
  }
  decrementPage() {
    const { requestJobPosts } = this.props;
    const { page } = this.props.params;
    browserHistory.push(`/jobposts/page/${parseInt(page) - 1}`);
  }
  incrementPage() {
    const { requestJobPosts } = this.props;
    const { page } = this.props.params;
    browserHistory.push(`/jobposts/page/${parseInt(page) + 1}`);
  }
  render() {
    const { jobPosts, isFetching, backend_profile } = this.props;
    const filters = backend_profile.industry.map((obj) => {
      return obj.name;
    });
    console.log(this.state);
    return (
      <Grid>
        <Row>
          <Col md={12}>
            { !isFetching ?
              <div className="text-center">
                <Header as="h3" icon textAlign="center">
                  Job Postings
                  <Icon link name="briefcase" circular />
                </Header>
                <div className="text-center">
                  <Statistic>
                    <Statistic.Value>{`${jobPosts.results.length} out of ${jobPosts.total}`}</Statistic.Value>
                    <Statistic.Label>Job Postings </Statistic.Label>
                    page: {this.props.params.page}
                  </Statistic>
                </div>
                <Icon size="large" onClick={this.decrementPage} name="arrow left" />
                <Icon size="large" onClick={this.incrementPage} name="arrow right" />
              </div>
                  : '' }
            <hr />
            { !isFetching ?
              <div>
                <CardList
                  jobPosts={jobPosts.results}
                  filter={filters}
                  onScroll={this.props.requestJobPosts}
                />
                <hr />
              </div>
            : <JobPostLoader /> }
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default JobPosts;
