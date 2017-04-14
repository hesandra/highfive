import { connect } from 'react-redux';
import { JobPosts } from '../components';
import { checkUserLogin } from '../actions/userAuth';
import { checkCompanyLogin } from '../actions/companyAuth';
import { fetchJobPosts } from '../actions/jobPosts';

const mapStateToProps = (state) => {
  const { isAuthenticated, profile, backend_profile } = state.userAuth;
  const { jobPosts, isFetching } = state.jobPosts;
  return {
    isAuthenticated,
    isFetching,
    profile,
    jobPosts,
    backend_profile
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestJobPosts: (page) => dispatch(fetchJobPosts(page)),
    checkUserLogin: () => dispatch(checkUserLogin()),
    checkCompanyLogin: () => dispatch(checkCompanyLogin()),
  };
};

const JobPostsContainer = connect(mapStateToProps, mapDispatchToProps)(JobPosts);
export default JobPostsContainer;
