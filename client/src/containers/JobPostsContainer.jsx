import { connect } from 'react-redux';
import { JobPosts } from '../components';
import { checkUserLogin } from '../actions/userAuth';
import { checkCompanyLogin } from '../actions/companyAuth';
import { fetchJobPostsData } from '../actions/jobPosts';

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
    requestJobPosts: () => dispatch(fetchJobPostsData()),
    checkUserLogin: () => dispatch(checkUserLogin()),
    checkCompanyLogin: () => dispatch(checkCompanyLogin()),
    onJobPostClick: id => dispatch(requestJobPost(id))
  };
};

const JobPostsContainer = connect(mapStateToProps, mapDispatchToProps)(JobPosts);
export default JobPostsContainer;
