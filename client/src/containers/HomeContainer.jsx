import React from 'react';
import { connect } from 'react-redux';
import { hashHistory, browserHistory } from 'react-router';
import { Home } from '../components';
import { userLoginRequest, userLogoutSuccess, checkUserLogin } from '../actions/userAuth';
import { companyLoginRequest, companyLogoutSuccess } from '../actions/companyAuth';

const mapStateToProps = (state) => {
  const { profile, error } = state.userAuth;
  return {
    isUserAuthenticated: state.userAuth.isAuthenticated,
    isCompanyAuthenticated: state.companyAuth.isAuthenticated,
    profile,
    error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUserLoginClick: () => {
      dispatch(userLoginRequest());
    },
    onAuthedUserLoginClick: () => {
      browserHistory.push('/profile');
    },
    onUserLogoutClick: () => {
      dispatch(userLogoutSuccess());
      browserHistory.push('/');
    },
    onCompanyLoginClick: () => {
      dispatch(companyLoginRequest());
    },
    onAuthedCompanyLoginClick: () => {
      browserHistory.push('/company');
    }
  };
};

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);
export default HomeContainer;
