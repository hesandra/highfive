export const industryToIdMappings = {
  Sports: 1,
  Finance: 2,
  Fashion: 3,
  'Ad-Tech': 4,
  Gaming: 5,
  Entertainment: 6,
  Electronic: 7,
  Aviation: 8,
  Food: 9,
  Travel: 10,
  Transportation: 11, 
  'Space Aviation': 12,
  Beauty: 13,
  Fitness: 14, 
  'Social Media': 15, 
  Healthcare: 16, 
  Arts: 17
};

const idToIndustryMappings = {
  1: 'Sports',
  2: 'Finance',
  3: 'Fashion',
  4: 'Ad-Tech',
  5: 'Gaming',
  6: 'Entertainment',
  7: 'Electronic',
  8: 'Aviation',
  9: 'Food',
  10: 'Travel', 
  11: 'Transportation', 
  12: 'Space Aviation',
  13: 'Beauty',
  14: 'Fitness',
  15: 'Social Media',
  16: 'Healthcare',
  17: 'Arts'
};

export const getIndustryId = (industry) => {
  return industryToIdMappings[industry];
};

export const getIndustryName = (id) => {
  return idToIndustryMappings[id];
};