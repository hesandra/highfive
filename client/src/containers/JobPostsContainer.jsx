import { connect } from 'react-redux';
import { JobPosts } from '../components';
import { checkUserLogin } from '../actions/userAuth';
import { checkCompanyLogin } from '../actions/companyAuth';
import { fetchJobPosts } from '../actions/jobPosts';

// import jobPosts from '../utils/mockdata/jobposts';

const mapStateToProps = (state) => {
  const { isAuthenticated, profile } = state.userAuth;
  const { jobPosts, isFetching } = state.jobPosts;
  return {
    isAuthenticated,
    profile,
    jobPosts
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestJobPosts: () => dispatch(fetchJobPosts()),
    checkUserLogin: () => dispatch(checkUserLogin()),
    checkCompanyLogin: () => dispatch(checkCompanyLogin()),
  };
};

const JobPostsContainer = connect(mapStateToProps, mapDispatchToProps)(JobPosts);
export default JobPostsContainer;
