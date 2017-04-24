import React from 'react';
import IndustryListView from './IndustryListView';

const IndustryList = ({ onUserDeleteIndustry, industries, addNotification }) => {
  const renderIndustries = industries.map((industry, i) => {
    return (
      <IndustryListView
        key={industry.id}
        industry={industry}
        onUserDeleteIndustry={onUserDeleteIndustry}
        addNotification={addNotification}
      />
    );
  });
  return (
    <div className="profile-info">
      <i className="fa fa-industry" aria-hidden="true"></i>{ !renderIndustries.length ? <small>select industries</small> : renderIndustries }
    </div>
  );
};

export default IndustryList;
