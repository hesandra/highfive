import React from 'react';
import { connect } from 'react-redux';
import { hashHistory, browserHistory } from 'react-router';
import { Company } from '../components';
import { toProfile, toJobPosts, toSubmissions } from '../actions/company';

const mapStateToProps = (state) => {
  return {
    state: state.companyProfile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onProfileClick: () => {
      dispatch(toProfile());
      browserHistory.push('/cprofile');
      location.reload();
    },
    onJobsClick: () => {
      dispatch(toJobPosts());
      browserHistory.push('/jobposts');
      location.reload();
    },
    onSubmissionsClick: () => {
      dispatch(toSubmissions());
      browserHistory.push('/submissions');
      location.reload();
    }
  };
};

const CompanyContainer = connect(mapStateToProps, mapDispatchToProps)(Company);
export default CompanyContainer;
