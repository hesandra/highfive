import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { default as swal } from 'sweetalert2';
import { AppContainer, HomeContainer, UserProfileContainer, CompanyContainer, JobPostsContainer, JobPostContainer } from './containers';

import UserAuthService from './utils/userAuthService';
import CompanyAuthService from './utils/companyAuthService';

const requireUserAuth = (nextState, replace) => {
  if (!UserAuthService.loggedIn()) {
    swal({
      title: 'Please Login',
      text: 'Login as a applicant to access',
      type: 'error'
    });
    replace({ pathname: '/' });
  }
};

const requireCompanyAuth = (nextState, replace) => {
  if (!CompanyAuthService.loggedIn()) {
    swal({
      title: 'Please Login',
      text: 'Login as a company to access',
      type: 'error'
    });
    replace({ pathname: '/' });
  }
};

const NotFoundPage = () => {
  return (<h1>HELLO</h1>);
};

export default function createRoutes() {
  return (
    <Route path="/" component={AppContainer}>
      <IndexRoute component={HomeContainer} />
      <Route path="/company" component={CompanyContainer} onEnter={requireCompanyAuth} />
      <Route path="/profile" component={UserProfileContainer} onEnter={requireUserAuth} />
      <Route path="/jobposts" component={JobPostsContainer} onEnter={requireUserAuth} />
      <Route path="/jobposts/:id" component={JobPostContainer} onEnter={requireUserAuth} />
      <Route path="*" component={NotFoundPage} />
    </Route>
  );
}
