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
        <option value="Fashion">Fashion</option>
        <option value="Gaming">Gaming</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Electronic">Electronics</option>
        <option value="Aviation">Aviation</option>
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Transportation">Transporation</option>
        <option value="Space Aviation">Space</option>
        <option value="Beauty">Beauty</option>
        <option value="Fitness">Fitness</option>
        <option value="Social Media">Social Media</option>
        <option value="Healthcare">Healthcare</option>
        <option value="Arts">Arts</option>
        
        
      </MultiSelect>
    </div>
  );
};

export default IndustriesMultiSelect;
