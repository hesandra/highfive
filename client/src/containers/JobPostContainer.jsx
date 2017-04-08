import { connect } from 'react-redux';
import { JobPost } from '../components';
import { checkUserLogin } from '../actions/userAuth';
import { checkCompanyLogin } from '../actions/companyAuth';
import { initJobInterview } from '../actions/jobPost';

// import jobPosts from '../utils/mockdata/jobposts';

const mapStateToProps = (state) => {
  const { isAuthenticated, profile } = state.userAuth;
  const { jobPosts } = state.jobPosts;
  return {
    isAuthenticated,
    profile,
    jobPosts
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkUserLogin: () => dispatch(checkUserLogin()),
    checkCompanyLogin: () => dispatch(checkCompanyLogin()),
    onJobInterviewClick: id => dispatch(initJobInterview(id))
  };
};

const JobPostsContainer = connect(mapStateToProps, mapDispatchToProps)(JobPost);
export default JobPostsContainer;
