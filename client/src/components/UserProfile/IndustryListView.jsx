import React from 'react';
import { Icon, Label } from 'semantic-ui-react';

const IndustryListView = ({ industry, onUserDeleteIndustry }) => {
  return (
    <Label color="blue" size="small">{ industry.name }
      <Icon name="delete" onClick={() => { onUserDeleteIndustry(industry.id) }} />
    </Label>
  );
};

    // <Label color="blue" size="small">
      //   Finance
      // <Icon name='delete' onClick={() => { onUserDeleteIndustry(1, 4); }} />
      // </Label>

export default IndustryListView;
