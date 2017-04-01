import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import userAuth from './userAuth';
import companyAuth from './companyAuth';
import companyProfile from './company';

const rootReducer = combineReducers({
  routing,
  userAuth,
  companyAuth, 
  companyProfile,
});

export default rootReducer;
