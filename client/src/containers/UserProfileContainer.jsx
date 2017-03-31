import { connect } from 'react-redux';
import { UserProfile } from '../components';
import { checkUserLogin } from '../actions/userAuth';
import { checkCompanyLogin } from '../actions/companyAuth';


const mapStateToProps = (state) => {
  const { isAuthenticated, profile } = state.userAuth;
  return {
    isAuthenticated,
    profile
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkUserLogin: () => dispatch(checkUserLogin())
  };
};

const UserProfileContainer = connect(mapStateToProps, mapDispatchToProps)(UserProfile);

export default UserProfileContainer;
