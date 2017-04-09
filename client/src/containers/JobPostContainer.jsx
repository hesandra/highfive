import { connect } from 'react-redux';
import { JobPost } from '../components';
import { checkUserLogin } from '../actions/userAuth';
import { checkCompanyLogin } from '../actions/companyAuth';
import { initJobInterview, fetchJobPostData } from '../actions/jobPost';

// import jobPosts from '../utils/mockdata/jobposts';

const mapStateToProps = (state) => {
  const { isAuthenticated, profile } = state.userAuth;
  const { jobPosts } = state.jobPosts;
  const { jobPost } = state.jobPost;
  return {
    isAuthenticated,
    profile,
    jobPosts,
    jobPost
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkUserLogin: () => dispatch(checkUserLogin()),
    checkCompanyLogin: () => dispatch(checkCompanyLogin()),
    onJobInterviewClick: id => dispatch(initJobInterview(id)),
    fetchJobPostData: id => dispatch(fetchJobPostData(id))
  };
};

const JobPostsContainer = connect(mapStateToProps, mapDispatchToProps)(JobPost);
export default JobPostsContainer;
