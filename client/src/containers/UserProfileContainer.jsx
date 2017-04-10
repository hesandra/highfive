import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { UserProfile } from '../components';
import { checkUserLogin, updateUserProfile } from '../actions/userAuth';
import { checkCompanyLogin } from '../actions/companyAuth';
import { fetchJobSubmissions, deleteUserIndustry, updateProfile } from '../actions/userProfile';
import { fetchJobPosts } from '../actions/jobPosts';

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
      dispatch(fetchJobPosts());
      hashHistory.push('/jobposts');
    },
    onUpdateUserProfile: (id, data) => {
      dispatch(updateProfile(id, data));
    },
    onSubmissionsClick: (id) => {
      dispatch(fetchJobSubmissions(id));
    },
    onDeleteIndustryClick: (userId, industryId) => {
      dispatch(deleteUserIndustry(userId, industryId));
    }
  };
};

const UserProfileContainer = connect(mapStateToProps, mapDispatchToProps)(UserProfile);
export default UserProfileContainer;
