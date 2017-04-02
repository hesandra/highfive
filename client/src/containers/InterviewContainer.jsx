import { connect } from 'react-redux';
import io from 'socket.io-client';
import { Interview } from '../components';
import { checkUserLogin } from '../actions/userAuth';
import { checkCompanyLogin } from '../actions/companyAuth';
import { getUserMedia } from '../actions/interview';
import jobPosts from '../utils/mockdata/jobposts';


const socket = io('http://localhost:3001');

const mapStateToProps = (state) => {
  const { isAuthenticated, profile } = state.userAuth;
  const { stream } = state.interview;
  return {
    isAuthenticated,
    profile,
    jobPosts,
    stream,
    socket
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkUserLogin: () => dispatch(checkUserLogin()),
    checkCompanyLogin: () => dispatch(checkCompanyLogin()),
    requestUserMedia: () => dispatch(getUserMedia())
  };
};

const InterviewContainer = connect(mapStateToProps, mapDispatchToProps)(Interview);
export default InterviewContainer;
