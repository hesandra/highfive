let initialState = {
  createButton: false, 
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
  }
  return state;
}

