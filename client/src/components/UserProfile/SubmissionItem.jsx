import React from 'react';
import { Link } from 'react-router';
import { List } from 'semantic-ui-react';
import SubmissionModal from './SubmissionModal';
import { getPositionName } from '../../utils/Mappings/positionMappings';
import { Card, Icon } from 'semantic-ui-react';

const Submission = ({ submission }) => {
  return (
    <div>
      <Card color="blue">
        <Card.Content>
          <Card.Header>
            <List.Icon name="folder" size="large" verticalAlign="middle" /> {submission.status ? 'Seen' : 'Pending'}
          </Card.Header>
          <Card.Meta>
            <span>{ submission.created_at }</span>
          </Card.Meta>
          <Card.Description>
            { getPositionName(submission.jobpost.level) }
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <SubmissionModal questions={submission.jobpost.question} videos={submission.video} />
        </Card.Content>
      </Card>
    </div>
  );
};

export default Submission;
