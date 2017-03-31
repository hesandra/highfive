import { connect } from 'react-redux';
import { App } from '../components';
import { checkLogin } from '../actions/auth';

const mapDispatchToProps = (dispatch) => {
  return {
    checkLogin: () => dispatch(checkLogin())
  };
};

const AppContainer = connect(
  null, // no mapStateToProps
  mapDispatchToProps
)(App);

export default AppContainer;
