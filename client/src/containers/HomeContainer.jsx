import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { Home } from '../components';
import { userLoginRequest, userLogoutSuccess } from '../actions/userAuth';
import { companyLoginRequest, companyLogoutSuccess } from '../actions/companyAuth';

const mapStateToProps = (state) => {
  const { isAuthenticated, profile, error } = state.userAuth;
  return {
    isAuthenticated,
    profile,
    error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUserLoginClick: () => {
      dispatch(userLoginRequest());
    },
    onUserLogoutClick: () => {
      dispatch(userLogoutSuccess());
      hashHistory.push('/');
      location.reload();
    },
    onCompanyLoginClick: () => {
      dispatch(companyLoginRequest());
    }
  };
};

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);
export default HomeContainer;
