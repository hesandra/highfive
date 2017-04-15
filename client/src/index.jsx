import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import configureStore from './store/configureStore';
import createRoutes from './routes';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history} routes={createRoutes()} />
  </Provider>,
  document.getElementById('app')
);
