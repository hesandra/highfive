import React from 'react';
import ReactSelectize from 'react-selectize';

const SimpleSelect = ReactSelectize.SimpleSelect;

const LocationsMultiSelect = () => {
  return (
    <div>
      <SimpleSelect
        className="location-dropdown-select"
        theme="bootstrap"
        placeholder="Select A Location"
        onValueChange={(value) => {
          console.log(value);
        }}
      >
        <option value="select">Los Angeles, CA</option>
        <option value="select">New York, NY</option>
        <option value="select">Portland, OR</option>
        <option value="select">San Fransisco, CA</option>
      </SimpleSelect>
    </div>
  );
};

export default LocationsMultiSelect;
