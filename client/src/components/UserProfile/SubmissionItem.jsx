import React from 'react';
import { List } from 'semantic-ui-react';

const Submission = ({ submission }) => {

  return (
    <List.Item>
      <List.Icon name="folder" size="large" verticalAlign="middle" />
      <List.Content>
        <List.Header>{ submission.jobpost.title }</List.Header>
        <List.Description>{submission.status ? 'seen' : 'pending'}</List.Description>
      </List.Content>
    </List.Item>
  );
};

export default Submission;
