import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import userAuth from './userAuth';
import companyAuth from './companyAuth';

const rootReducer = combineReducers({
  routing,
  userAuth,
  companyAuth
});

export default rootReducer;
