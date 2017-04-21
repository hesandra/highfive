import React from 'react';
import { Link } from 'react-router';
import { Card, Icon, Label, List } from 'semantic-ui-react';
import SubmissionModal from './SubmissionModal';
import { getPositionName } from '../../utils/Mappings/positionMappings';
import { getIndustryName } from '../../utils/Mappings/industryMappings';

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
            <i className="fa fa-industry" aria-hidden="true" /><span><Label>{ getIndustryName(submission.jobpost.industry_id) }</Label></span>
            <br />
            { getPositionName(submission.jobpost.level) }
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <SubmissionModal submission={submission} questions={submission.jobpost.question} videos={submission.video} />
        </Card.Content>
      </Card>
    </div>
  );
};

export default Submission;
