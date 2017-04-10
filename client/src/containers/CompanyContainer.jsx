import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { Company } from '../components';
import { toProfile, toJobPosts, toSubmissions } from '../actions/company';

const mapStateToProps = (state) => {
  //console.log('state.companyProfile', state.companyProfile)
  return {
    state: state.companyProfile,
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

const CompanyContainer = connect(mapStateToProps, mapDispatchToProps)(Company);
export default CompanyContainer;
