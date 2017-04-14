export const industryToIdMappings = {
  Sports: 1,
  Finance: 2,
  Fashion: 3,
  'Ad-Tech': 4,
  Education: 5,
  Entertainment: 6,
  Electronic: 7,
  Aviation: 8,
  Food: 9,
  Fishing: 10
};

const idToIndustryMappings = {
  1: 'Sports',
  2: 'Finance',
  3: 'Fashion',
  4: 'Ad-Tech',
  5: 'Education',
  6: 'Entertainment',
  7: 'Electronic',
  8: 'Aviation',
  9: 'Food',
  10: 'Fishing'
};

export const getIndustryId = (industry) => {
  return industryToIdMappings[industry];
};

export const getIndustryName = (id) => {
  return idToIndustryMappings[id];
};

