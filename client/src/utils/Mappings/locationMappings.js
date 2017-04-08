const locationToIdMappings = {
  'Los Angeles, CA': 1,
  'Portland, OR': 2,
  'New York, NY': 3,
};

const idToLocationMappings = {
  1: 'Los Angeles, CA',
  2: 'Portland, OR',
  3: 'New York, NY'
};



export const getLocationId = (location) => {
  return locationToIdMappings[location];
};

export const getLocationName = (id) => {
  return idToLocationMappings[id];
};
