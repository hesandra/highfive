import { connect } from 'react-redux';
import { JobPost } from '../components';
import { checkUserLogin } from '../actions/userAuth';
import { checkCompanyLogin } from '../actions/companyAuth';
import { initJobInterview, fetchJobPostData } from '../actions/jobPost';

const mapStateToProps = (state) => {
  const { isAuthenticated, profile } = state.userAuth;
  const { jobPosts } = state.jobPosts;
  const { jobPost, isFetching } = state.jobPost;
  return {
    isAuthenticated,
    isFetching,
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
