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
        <option value="New York, NY">New York, NY</option>
        <option value="San Diego, CA">San Diego, CA</option>
        <option value="Columbus, OH">Columbus, OH</option>
        <option value="Chicago, IL">Chicago, IL</option>
        <option value="Gangnam, Seol">Gangnam, Seoul</option>
        <option value="Kansas City, MI">Kansas City, MI</option>
        <option value="Santa Monica, CA">Santa Monica, CA</option>
        <option value="Irvine, CA">Irvine, CA</option>
        <option value="Washington, DC">Washington, DC</option>
        <option value="Seattle, WA">Seattle, WA</option>
        <option value="Houston, TX">Houston, TX</option>
        <option value="St. Louis, MO">St. Louis, MO</option>
        <option value="Miami, FL">Miami, FL</option>
        <option value="Philadelphia, PA">Philadelphia, PA</option>
        <option value="San Francisco, CA">San Francisco, CA</option>
      </SimpleSelect>
    </div>
  );
};

export default LocationsMultiSelect;
