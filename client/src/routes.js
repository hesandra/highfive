import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { AppContainer } from './containers';
import { Home } from './components';

import AuthService from './utils/AuthService';

const requireAuth = (nextState, replace) => {
  if (!AuthService.loggedIn()) {
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
      <IndexRoute component={Home} />
      <Route path="*" component={NotFoundPage} />
    </Route>
  );
}
