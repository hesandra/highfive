const initialState = {
  createButton: false, 
  senior: false, 
  junior: false, 
  mid: false,
  selectedQuestion: [],
  profileEdited: false,
  profileReload: false,
  showVideos: false,
  showJobModal: false,
  applUpdate: false,
  renderStatus: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'PROFILE_SUBMITTED':
      return Object.assign({}, state, {
        companyProfile: action.payload,
        profileEdited: true,
    });
/*    case 'PROFILE_RELOAD':
      return Object.assign({}, state, {
        companyReload: action.payload,
        profileReload: true,
    });*/
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
        showJobModal: true,
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
    case 'DESCRIPTION':
      return Object.assign({}, state, {
        jobDescription: action.payload,
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
        //showJobModal: false,
    });
      case 'CLOSE_POST_MODAL':
      return Object.assign({}, state, {
        showJobModal: false,
    });
    case 'REMOVE_QUESTION':
    //console.log('index in remove question reducers', state.selectedQuestion )
    //console.log('index in remove question reducers', state.selectedQuestion.indexOf(action.payload))
    const idx = state.selectedQuestion.indexOf(action.payload);
      return Object.assign({}, state, {
        selectedQuestion: state.selectedQuestion.slice(0, idx).concat(state.selectedQuestion.slice(idx+1))
    });
     case 'CREATE_JOBPOST':
      return Object.assign({}, state, {
        createdJob: action.payload
    });
/*    case 'GET_INDUSTRIES':
      return Object.assign({}, state, {
        industries: action.payload
    });
    case 'GET_LOCATIONS':
      return Object.assign({}, state, {
        locations: action.payload
    });*/
    case 'UPDATE_PICTURE':
      return Object.assign({}, state, {
        picture: action.payload
    });
    case 'OPEN_MODAL':
      return Object.assign({}, state, {
        applUpdate: true
    });
    case 'CLOSE_APPL_MODAL':
      return Object.assign({}, state, {
        applUpdate: false,
        renderStatus: true,
    });
    case 'UPDATE_STATUS':
      return Object.assign({}, state, {
        status: action.payload,
    });
    case 'HIDE_POST_MODAL':
      return Object.assign({}, state, {
        createButton: false,
        showJobModal: false,
    }); 
  }
  return state;
}

