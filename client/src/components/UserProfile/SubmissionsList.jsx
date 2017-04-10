import React from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import { List } from 'semantic-ui-react';
import SubmissionItem from './SubmissionItem';

const SubmissionsList = ({ submissions }) => {
  const submissionList = submissions.map((submission, i) => {
    return <SubmissionItem key={submission.id} submission={submission} />;
  });
  return (
    <List divided className="submissions-list">
      { submissionList }
    </List>
  );
};

export default SubmissionsList;
