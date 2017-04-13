import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Card, Icon, Image, Rating, Header, List, Statistic } from 'semantic-ui-react';
import ReactPaginate from 'react-paginate';

import img from '../../../public/images/mock_company_1_hq.jpg';
import CardList from './CardList';
import JobPostLoader from './JobPostLoader';

class JobPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      perPage: 1
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }
  componentDidMount() {
    const { jobPosts } = this.props;
    if (!jobPosts.length) {
      const { requestJobPosts } = this.props;
      console.log('refetching');
      requestJobPosts(0);
    }
  }
  handlePageClick(data) {
    console.log(data);
    const { requestJobPosts } = this.props;
    const selected = data.selected;
    // const offset = Math.ceil(selected * this.state.perPage);
    // this.setState({
    //   offset
    // });
    // console.log(this.state.offset);
    requestJobPosts(data.selected);
  }
  render() {
    console.log(this.state);
    const { jobPosts, isFetching } = this.props;
    return (
      <Grid>
        <Row>
          <Col md={12}>
            { !isFetching ?
              <div>
                <Header as="h3" icon textAlign="center">
                  Job Postings
                  <Icon link name="briefcase" circular />
                </Header>
                <div className="text-center">
                  <Statistic>
                    <Statistic.Value>{ jobPosts.length } </Statistic.Value>
                    <Statistic.Label>Job Postings </Statistic.Label>
                  </Statistic>
                </div>
              </div>
                  : '' }
              <hr />
            { !isFetching ?
              <div>
                <CardList
                  jobPosts={jobPosts}
                />
                <hr />
              </div>
            : <JobPostLoader /> }
            <div className="text-center">
          <ReactPaginate
            previousLabel={'previous'}
            nextLabel={'next'}
            breakClassName={'break-me'}
            pageCount={5}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
          />
        </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default JobPosts;
