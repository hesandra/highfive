import { connect } from 'react-redux';
import { Interview } from '../components';
import { checkUserLogin } from '../actions/userAuth';
import { checkCompanyLogin } from '../actions/companyAuth';

import jobPosts from '../utils/mockdata/jobposts';

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

const InterviewContainer = connect(mapStateToProps, mapDispatchToProps)(Interview);
export default InterviewContainer;
