import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { default as swal } from 'sweetalert2';
import { AppContainer, HomeContainer, UserProfileContainer, CompanyContainer } from './containers';
import { Home, UserProfile } from './components';

import UserAuthService from './utils/userAuthService';

const requireAuth = (nextState, replace) => {
  if (!UserAuthService.loggedIn()) {
    swal({
      title: 'Please Login',
      text: 'Login to access',
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
      <Route path="/company" component={CompanyContainer} />
      <Route path="/user" component={UserProfileContainer} onEnter={requireAuth} />
      <Route path="*" component={NotFoundPage} />
    </Route>
  );
}
