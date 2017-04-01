import { connect } from 'react-redux';
import { App } from '../components';
import { checkUserLogin } from '../actions/userAuth';
import { checkCompanyLogin } from '../actions/companyAuth';

const mapStateToProps = (state) => {
  const { isAuthenticated } = state.userAuth;
  return {
    isAuthenticated
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    checkUserLogin: () => dispatch(checkUserLogin()),
    checkCompanyLogin: () => dispatch(checkCompanyLogin())
  };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppContainer;
