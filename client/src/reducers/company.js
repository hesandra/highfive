let initialState = {
  createButton: false, 
  senior: false, 
  junior: false, 
  mid: false,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'PROFILE_SUBMITTED':
      return Object.assign({}, state, {
        companyProfile: action.payload,
    });
    case 'CREATE_INTERVIEW':
      return Object.assign({}, state, {
        createButton: true,
    });
    case 'SENIOR':
      return Object.assign({}, state, {
        senior: true,
        junior: false,
        mid: false,
        createButton: false,
    });
    case 'JUNIOR':
      return Object.assign({}, state, {
        junior: true,
        senior: false, 
        mid: false,
        createButton: false,
    });
    case 'MID':
      return Object.assign({}, state, {
        mid: true,
        junior: false, 
        senior: false,
        createButton: false,
    });
    case 'JOBTITLE':
      return Object.assign({}, state, {
        jobTitle: action.payload,
    });
    case 'SELECT_QUESTION':
      return Object.assign({}, state, {
        question: action.payload,
    });
  }
  return state;
}

