import { connect } from 'react-redux';
import { JobPosts } from '../components';
import { checkUserLogin } from '../actions/userAuth';
import { checkCompanyLogin } from '../actions/companyAuth';

const mapStateToProps = (state) => {
  return {
    test: 'test'
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkUserLogin: () => dispatch(checkUserLogin()),
    checkCompanyLogin: () => dispatch(checkCompanyLogin())
  };
};

const JobPostsContainer = connect(mapStateToProps, mapDispatchToProps)(JobPosts);
export default JobPostsContainer;
