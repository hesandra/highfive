const locationToIdMappings = {
  'Los Angeles, CA': 1,
  'Portland, OR': 2,
  'New York, NY': 3,
  'San Diego, CA': 4,
  'Columbus, OH': 5,
  'Chicago, IL': 6,
  'Gangnam, Seoul': 7,
  'Kansas City, MI': 8,
  'Santa Monica, CA': 9,
  'Irvine, CA': 10
};

const idToLocationMappings = {
  1: 'Los Angeles, CA',
  2: 'Portland, OR',
  3: 'New York, NY',
  4: 'San Diego, CA',
  5: 'Columbus, OH',
  6: 'Chicago, IL',
  7: 'Gangnam, Seoul',
  8: 'Kansas City, MI',
  9: 'Santa Monica, CA',
  10: 'Irvine, CA'
};



export const getLocationId = (location) => {
  return locationToIdMappings[location];
};

export const getLocationName = (id) => {
  return idToLocationMappings[id];
};
