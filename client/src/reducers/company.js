let initialState = {

}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'PROFILE_SUBMITTED':
      return Object.assign({}, state, {
        companyProfile: action.payload,
    });
  }
  return state;
}