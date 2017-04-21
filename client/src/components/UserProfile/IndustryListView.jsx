import React from 'react';
import { Icon, Label } from 'semantic-ui-react';

const IndustryListView = ({ industry, onUserDeleteIndustry, addNotification }) => {
  return (
    <Label color="blue" size="small">{ industry.name }
      <Icon name="delete" onClick={() => { addNotification(); onUserDeleteIndustry(industry.id); }} />
    </Label>
  );
};
export default IndustryListView;
