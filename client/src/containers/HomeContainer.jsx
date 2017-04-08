import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
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
      hashHistory.push('/profile');
    },
    onUserLogoutClick: () => {
      dispatch(userLogoutSuccess());
      hashHistory.push('/');
    },
    onCompanyLoginClick: () => {
      dispatch(companyLoginRequest());
    },
    onAuthedCompanyLoginClick: () => {
      hashHistory.push('/company');
    }
  };
};

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);
export default HomeContainer;
