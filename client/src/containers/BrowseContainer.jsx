import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { Browse } from '../components';
import { fetchUsersData } from '../actions/browse';

const mapStateToProps = (state) => {
  const { profile, error } = state.userAuth;
  const { users } = state.browse;
  return {
    isUserAuthenticated: state.userAuth.isAuthenticated,
    isCompanyAuthenticated: state.companyAuth.isAuthenticated,
    profile,
    users,
    error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => {
      dispatch(fetchUsersData());
    }
  };
};

const BrowseContainer = connect(mapStateToProps, mapDispatchToProps)(Browse);
export default BrowseContainer;
