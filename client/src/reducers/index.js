import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import userAuth from './userAuth';
import companyAuth from './companyAuth';
import companyProfile from './company';
import jobPosts from './jobPosts';
import jobPost from './jobPost';
import interview from './interview';
import browse from './browse';
import userProfile from './userProfile';

const rootReducer = combineReducers({
  routing,
  userAuth,
  userProfile,
  companyAuth,
  companyProfile,
  jobPosts,
  jobPost,
  interview,
  browse,
});

export default rootReducer;
