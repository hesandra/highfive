import React from 'react';
import { Icon, Label } from 'semantic-ui-react';

const IndustryListView = ({ industry, onUserDeleteIndustry }) => {
  return (
    <Label color="blue" size="tiny">{ industry.name }
      <Icon name="delete" onClick={() => { onUserDeleteIndustry(industry.id); }} />
    </Label>
  );
};
export default IndustryListView;
