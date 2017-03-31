import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { AppContainer, HomeContainer, CompanyContainer } from './containers';
import { Home } from './components';

import UserAuthService from './utils/userAuthService';

const requireAuth = (nextState, replace) => {
  if (!UserAuthService.loggedIn()) {
    alert('Please log in first!');
    replace({ pathname: '/' });
  }
};

const NotFoundPage = () => {
  return <h1>HELLO</h1>
};

export default function createRoutes() {
  return (
    <Route path="/" component={AppContainer}>
      <IndexRoute component={HomeContainer} />
      <Route path="/company" component={CompanyContainer}/>
      <Route path="*" component={NotFoundPage} />
    </Route>
  );
}
