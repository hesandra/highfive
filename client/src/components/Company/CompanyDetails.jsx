
import React from 'react';

const CompanyDetails = (props) => {
  console.log('props in CompanyDetails', props)
  return (
    <h1>{props.name}</h1>
  );
};

export default CompanyDetails;


