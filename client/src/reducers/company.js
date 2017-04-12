let initialState = {
  createButton: false, 
  senior: false, 
  junior: false, 
  mid: false,
  selectedQuestion: [],
  profileEdited: false,
  profileReload: false,
  showVideos: false,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'PROFILE_SUBMITTED':
      return Object.assign({}, state, {
        companyProfile: action.payload,
        profileEdited: true,
    });
    case 'PROFILE_RELOAD':
      return Object.assign({}, state, {
        companyReload: action.payload,
        profileReload: true,
    });
    case 'GET_POSITIONS':
      return Object.assign({}, state, {
        jobs: action.payload,
    });
    case 'GET_SUBMISSIONS':
      return Object.assign({}, state, {
        submissions: action.payload,
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
        level: 2
    });
    case 'JUNIOR':
      return Object.assign({}, state, {
        junior: true,
        senior: false, 
        mid: false,
        createButton: false,
        level: 0
    });
    case 'MID':
      return Object.assign({}, state, {
        mid: true,
        junior: false, 
        senior: false,
        createButton: false,
        level: 1
    });
    case 'SHOW_VIDEOS':
      return Object.assign({}, state, {
        applicationVideos: action.payload,
        showVideos: true,
    });
    case 'JOBTITLE':
      return Object.assign({}, state, {
        jobTitle: action.payload,
    });
/*    case 'SELECT_QUESTION':
      return Object.assign({}, state, {
        selectedQuestion: action.payload,
    });*/
    case 'SELECT_QUESTION':
      return Object.assign({}, state, {
        selectedQuestion: state.selectedQuestion.concat(action.payload)
    });
    case 'GET_QUESTIONS':
      return Object.assign({}, state, {
        questions: action.payload,
    });
    case 'CLOSE_MODAL':
      return Object.assign({}, state, {
        questions: action.payload,
        showVideos: false,
    });
    case 'REMOVE_QUESTION':
      return Object.assign({}, state, {
        selectedQuestion: state.selectedQuestion.splice(state.selectedQuestion.indexOf(action.payload), 1)   
    });
  }
  return state;
}

