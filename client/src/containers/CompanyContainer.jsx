import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { Profile } from '../components';
import { toProfile, toJobPosts, toSubmissions } from '../actions/company';

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onProfileClick: () => {
      dispatch(toProfile());
      hashHistory.push('/cprofile');
      location.reload();
    },
    onJobsClick: () => {
      dispatch(toJobPosts());
      hashHistory.push('/jobposts');
      location.reload();
    },
    onSubmissionsClick: () => {
      dispatch(toSubmissions());
      hashHistory.push('/submissions');
      location.reload();
    }
  };
};

const CompanyContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);
export default CompanyContainer;
