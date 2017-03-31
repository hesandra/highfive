import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { UserProfile } from '../components';
import { checkUserLogin } from '../actions/userAuth';
import { checkCompanyLogin } from '../actions/companyAuth';
import { requestJobPosts } from '../actions/userProfile';

const mapStateToProps = (state) => {
  const { isAuthenticated, profile } = state.userAuth;
  return {
    isAuthenticated,
    profile
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkUserLogin: () => dispatch(checkUserLogin()),
    // fetch JobPosts here
    onJobPostsClick: () => {
      dispatch(requestJobPosts());
      hashHistory.push('/jobposts');
    }
  };
};

const UserProfileContainer = connect(mapStateToProps, mapDispatchToProps)(UserProfile);
export default UserProfileContainer;
