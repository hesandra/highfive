const idToPositionMappings = {
  0: 'Junior Software Engineer',
  1: 'Software Engineer',
  2: 'Senior Software Engineer'
};

export const getPositionName = (id) => {
  return idToPositionMappings[id];
};
