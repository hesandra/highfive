import React from 'react';
import ReactSelectize from 'react-selectize';

const SimpleSelect = ReactSelectize.SimpleSelect;

const LocationsMultiSelect = ({ onSelectChange, location }) => {
  const locationItem = { label: location, value: location };
  return (
    <div>
      <SimpleSelect
        theme="bootstrap"
        defaultValue={locationItem}
        placeholder="Select location"
        onValueChange={(selection) => {
          if (selection) {
            onSelectChange({
              property: 'locationValue',
              data: selection
            });
          }
        }}
      >
        <option value="Los Angeles, CA">Los Angeles, CA</option>
        <option value="Portland, OR">Portland, OR</option>
      </SimpleSelect>
    </div>
  );
};

export default LocationsMultiSelect;
