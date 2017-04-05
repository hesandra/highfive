import React from 'react';
import ReactSelectize from 'react-selectize';

const SimpleSelect = ReactSelectize.SimpleSelect;

const IndustriesMultiSelect = () => {
  return (
    <div>
      <SimpleSelect
        theme="bootstrap"
        placeholder="Select A Location"
        onValueChange={(value) => {
          console.log(value);
        }}
      >
        <option value="apple">apple</option>
        <option value="mango">mango</option>
        <option value="orange">orange</option>
        <option value="banana">banana</option>
      </SimpleSelect>
    </div>
  );
};

export default IndustriesMultiSelect;
