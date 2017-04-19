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
    <div className="profile-info">
      <i className="fa fa-industry" aria-hidden="true"></i>{ renderIndustries }
    </div>
  );
};

export default IndustryList;
