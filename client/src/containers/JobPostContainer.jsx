import { connect } from 'react-redux';
import { JobPost } from '../components';
import { checkUserLogin } from '../actions/userAuth';
import { checkCompanyLogin } from '../actions/companyAuth';

import jobPosts from '../utils/mockdata/companies';

const mapStateToProps = (state) => {
  const { isAuthenticated, profile } = state.userAuth;
  return {
    isAuthenticated,
    profile,
    jobPosts
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkUserLogin: () => dispatch(checkUserLogin()),
    checkCompanyLogin: () => dispatch(checkCompanyLogin())
  };
};

const JobPostsContainer = connect(mapStateToProps, mapDispatchToProps)(JobPost);
export default JobPostsContainer;
