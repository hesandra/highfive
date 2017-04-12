import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { NavigationBar } from '../components';
import { userLoginRequest, userLogoutSuccess } from '../actions/userAuth';
import { companyLoginRequest, companyLogoutSuccess } from '../actions/companyAuth';

const mapStateToProps = (state) => {
  const { isAuthenticated, profile, error, isFetching } = state.userAuth;
  return {
    user: {
      isAuthenticated,
      profile,
      error
    },
    company: {
      isAuthenticated: state.companyAuth.isAuthenticated,
      profile: state.companyAuth.profile,
      error: state.companyAuth.error
    }
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onUserLoginClick: () => {
      dispatch(userLoginRequest());
    },
    onUserLogoutClick: () => {
      dispatch(userLogoutSuccess());
      hashHistory.push('/');
    },
    onCompanyLoginClick: () => {
      dispatch(companyLoginRequest());
    },
    onCompanyLogoutClick: () => {
      dispatch(companyLogoutSuccess());
      hashHistory.push('/');
    }
  };
};

const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
export default NavBarContainer;
