import { connect } from 'react-redux';
import { App } from '../components';
import { checkUserLogin } from '../actions/userAuth';
import { checkCompanyLogin } from '../actions/companyAuth';

const mapDispatchToProps = (dispatch) => {
  return {
    checkUserLogin: () => dispatch(checkUserLogin()),
    checkCompanyLogin:() => dispatch(checkCompanyLogin())
  };
};

const AppContainer = connect(
  null, // no mapStateToProps
  mapDispatchToProps
)(App);

export default AppContainer;
