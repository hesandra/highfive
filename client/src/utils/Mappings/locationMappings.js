const locationToIdMappings = {
  'Los Angeles, CA': 1,
  'Portland, OR': 2
};

const idToLocationMappings = {
  1: 'Los Angeles, CA',
  2: 'Portland, OR'
};



export const getLocationId = (location) => {
  return locationToIdMappings[location];
};

export const getLocationName = (id) => {
  return idToLocationMappings[id];
};
