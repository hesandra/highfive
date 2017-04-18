import React from 'react';
import ReactSelectize from 'react-selectize';

const MultiSelect = ReactSelectize.MultiSelect;
const IndustriesMultiSelect = ({ onSelectChange, industries }) => {
  let defaultIndustries = industries;
  if (industries) {
    defaultIndustries = industries.map((ind) => {
      return {
        label: ind.name,
        value: ind.name
      };
    });
  }
  return (
    <div>
      <MultiSelect
        theme="bootstrap"
        placeholder="Select industries"
        onValuesChange={(value) => {
          onSelectChange({
            property: 'industriesValue',
            data: value
          });
        }}
      >
        <option value="Sports">Sports</option>
        <option value="Finance">Finance</option>
        <option value="Education">Education</option>
        <option value="Fashion">Fashion</option>
        <option value="Transportation">Transporation</option>
      </MultiSelect>
    </div>
  );
};

export default IndustriesMultiSelect;
