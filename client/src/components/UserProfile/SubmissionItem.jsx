import React from 'react';
import { Link } from 'react-router';
import { List } from 'semantic-ui-react';
import SubmissionModal from './SubmissionModal';
import { getPositionName } from '../../utils/Mappings/positionMappings';

const Submission = ({ submission }) => {
  return (
    <div>
      <List.Item>
        <List.Icon name="folder" size="large" verticalAlign="middle" /><br /> <small> { submission.created_at } </small>
        <List.Content>
          <List.Header>{ getPositionName(submission.jobpost.level) }</List.Header>
          <List.Description>{submission.status ? 'seen' : 'pending'}</List.Description>
        </List.Content>
      </List.Item>
      <SubmissionModal questions={submission.jobpost.question} videos={submission.video} />
    </div>
  );
};

export default Submission;
