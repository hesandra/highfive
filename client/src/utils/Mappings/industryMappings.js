const industryToIdMappings = {
  Sports: 1,
  Finance: 2,
  Fashion: 3,
  'Ad-Tech': 4,
  Education: 5
};

const idToIndustryMappings = {
  1: 'Sports',
  2: 'Finance',
  3: 'Fashion',
  4: 'Ad-Tech',
  5: 'Education'
};

export const getIndustryId = (industry) => {
  return industryToIdMappings[industry];
};

export const getIndustryName = (id) => {
  return idToIndustryMappings[id];
};

