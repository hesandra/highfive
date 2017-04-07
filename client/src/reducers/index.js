import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import userAuth from './userAuth';
import companyAuth from './companyAuth';
import companyProfile from './company';
import jobPosts from './jobPosts';
import interview from './interview';
import browse from './browse';

const rootReducer = combineReducers({
  routing,
  userAuth,
  companyAuth,
  companyProfile,
  jobPosts,
  interview,
  browse
});

export default rootReducer;
