import React from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import { List } from 'semantic-ui-react';
import SubmissionItem from './SubmissionItem';
import SubmissionModal from './SubmissionModal';

const SubmissionsList = ({ submissions }) => {
  const submissionList = submissions.map((submission) => {
    return <SubmissionItem key={submission.id} submission={submission} />;
  });
  return (
    <div>
      <List divided className="submissions-list">
        { submissionList.length ?
          <div>
            ({ submissions.length })
            { submissionList.reverse() }
          </div>
          :
          'No submissions!'
        }
      </List>
    </div>
  );
};

export default SubmissionsList;
