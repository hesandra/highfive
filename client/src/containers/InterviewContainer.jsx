import { connect } from 'react-redux';
import io from 'socket.io-client';
import { Interview } from '../components';
import { checkUserLogin } from '../actions/userAuth';
import { checkCompanyLogin } from '../actions/companyAuth';
import { getUserMedia, createSubmission } from '../actions/interview';

const socket = io('https://52.88.174.194:443:3001');
const mapStateToProps = (state) => {
  const { isAuthenticated, profile, backend_profile } = state.userAuth;
  const { stream, submission, isCreatingSubmission } = state.interview;
  const { jobPost } = state.jobPost;
  return {
    isAuthenticated,
    profile,
    backend_profile,
    jobPost,
    stream,
    socket,
    submission,
    isCreatingSubmission,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createSubmission: submissionData => dispatch(createSubmission(submissionData)),
    checkUserLogin: () => dispatch(checkUserLogin()),
    checkCompanyLogin: () => dispatch(checkCompanyLogin()),
    requestUserMedia: () => dispatch(getUserMedia())
  };
};

const InterviewContainer = connect(mapStateToProps, mapDispatchToProps)(Interview);
export default InterviewContainer;
