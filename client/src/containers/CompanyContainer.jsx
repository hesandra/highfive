import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { Home } from '../components';
import { loginRequest, logoutSuccess } from '../actions/users_auth';

const mapStateToProps = (state) => {
  // const { isAuthenticated, profile, error } = state.auth;
  return {
    // isAuthenticated,
    // profile,
    // error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginClick: () => {
      dispatch(loginRequest());
    },
    onLogoutClick: () => {
      dispatch(logoutSuccess());
      hashHistory.push('/');
      location.reload();
    }
  };
};

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);
export default HomeContainer;
