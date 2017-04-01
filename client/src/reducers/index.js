import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import userAuth from './userAuth';
import companyAuth from './companyAuth';
import companyProfile from './company';
import jobPosts from './jobPosts';

const rootReducer = combineReducers({
  routing,
  userAuth,
  companyAuth,
  companyProfile,
  jobPosts
});

export default rootReducer;
