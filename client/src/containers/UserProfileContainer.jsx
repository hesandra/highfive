import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { UserProfile } from '../components';
import { checkUserLogin, updateUserProfile } from '../actions/userAuth';
import { checkCompanyLogin } from '../actions/companyAuth';
import { requestJobPosts, fetchJobSubmissions } from '../actions/userProfile';

const mapStateToProps = (state) => {
  const { isAuthenticated, profile, backend_profile } = state.userAuth;
  const { submissions } = state.userProfile;
  return {
    isAuthenticated,
    profile,
    backend_profile,
    submissions
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkUserLogin: () => dispatch(checkUserLogin()),
    // fetch JobPosts here
    onJobPostsClick: () => {
      dispatch(requestJobPosts());
      hashHistory.push('/jobposts');
    },
    onUpdateUserProfile: (profile) => {
      dispatch(updateUserProfile(profile));
    },
    onSubmissionsClick: (id) => {
      dispatch(fetchJobSubmissions(id));
    }
  };
};

const UserProfileContainer = connect(mapStateToProps, mapDispatchToProps)(UserProfile);
export default UserProfileContainer;
