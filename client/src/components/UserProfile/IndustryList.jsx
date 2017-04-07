import React from 'react';
import IndustryListView from './IndustryListView';

const IndustryList = ({ onUserDeleteIndustry, industries }) => {
  const renderIndustries = industries.map((industry, i) => {
    return (
      <IndustryListView
        key={industry.id}
        industry={industry}
        onUserDeleteIndustry={onUserDeleteIndustry}
      />
    );
  });
  return (
    <div>
      { renderIndustries }
    </div>
  );
};

export default IndustryList;
