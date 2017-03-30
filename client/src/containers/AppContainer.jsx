import { connect } from 'react-redux';
import { App } from '../components';

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

const AppContainer = connect(
  null, // no mapStateToProps
  mapDispatchToProps
)(App);

export default AppContainer;
