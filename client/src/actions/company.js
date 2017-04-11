import axios from 'axios';

export function updateCompany(profile) {
  return {
    type: 'PROFILE_SUBMITTED',
    payload: profile,
  };
}

export function submitProfile(profile){
  console.log('submitProfile')
  return (dispatch) => {
    const id = profile.companyId;
    //console.log('profile in sumbitProfile', profile)
    const updatedProfile = profile.updatedProfile;
    const industryId = parseInt(updatedProfile.industry_id);
    const locationId = parseInt(updatedProfile.location_id);
    updatedProfile.industry_id = industryId;
    updatedProfile.location_id = locationId;
    //console.log('updatedProfile', updatedProfile);
    //console.log('updatedProfile', profile.updatedProfile);
    //console.log('parseInt', parseInt(profile.updatedProfile.industry_id))
    //console.log('parseInt', parseInt(profile.updatedProfile.industry_id))
    axios.put('http://localhost:3000/api/companies/' + id, updatedProfile)
      .then((company) => {
        console.log('result in company actions', company);
        dispatch(updateCompany(JSON.parse(company.config.data)));
      })
      .catch((err) => {
        console.error(err);
      });
  };
}

export function refreshCompany(profile){
//console.log('profile in refreshCompany actions???????????????', profile);
  return {
    type: 'PROFILE_RELOAD',
    payload: profile,
  };
}

export function getCompany(companyId){
  //console.log('in GET COMPANY')
  const id = companyId;
  return (dispatch) => {
    axios.get('http://localhost:3000/api/companies/' + id)
      .then((company) => {
        //console.log('company in actions getcompany', company)
        dispatch(refreshCompany(company.data.company));
      })
      .catch((err) => {
        console.error(err);
      });
  };  
}

export function getJobs(jobs){
  return {
    type: 'GET_POSITIONS',
    payload: jobs
  }
}

export function getPositions(){
  console.log('in get positions');
  //const company_id = companyId; 
  return (dispatch) => {
    axios.get('http://localhost:3000/api/jobposts')
    .then((jobposts) => {
      //console.log('jobposts in getPostiions', jobposts)
      dispatch(getJobs(jobposts.data.jobposts))
    })
    .catch((err) => {
      console.error(err);
    });
  }
}

export function getSubs(submissions){
  return {
    type: 'GET_SUBMISSIONS',
    payload: submissions
  }
}

/*export function getSubmissions(companyId){
  return (dispatch) => {
    axios.get('http://localhost:3000/api/submissions' + companyId)
    .then((submissions) => {
      console.log('in submissions', submissions)
      dispatch(getSubs(submissions))
    })
    .catch((err) => {
      console.error(err);
    });
  }
}*/

/*export function getSubmissions(postId){
  return (dispatch) => {
    axios.get('http://localhost:3000/api/submissions/jobpost/' + postId)
    .then((submissions) => {
      console.log('submissions in getSubmissions', submissions);
      dispatch(getSubs(submissions))
    })
    .catch((err) => {
      console.error(err)
    });
  }
}*/

export function getSubmissions(postId){
  return (dispatch) => {
    axios.get('http://localhost:3000/api/submissions/jobpost/' + postId)
    .then((submission) => {
      console.log('submissions in getSubmissions', submission);
      dispatch(getSubs(submission.data.submission))
    })
    .catch((err) => {
      console.error(err);
    });
  }
}

export function showVideos(videos){
  return {
    payload: videos,
    type: 'SHOW_VIDEOS',
    showVideos: true
  }
}

export function createInterview(){
  return {
    type: 'CREATE_INTERVIEW'
 };
}

export function senPos(){
  return {
    type: 'SENIOR'
 };
}

export function junPos(){
  return {
    type: 'JUNIOR'
 };
}

export function midPos(){
  return {
    type: 'MID'
 };
}

export function submitTitle(title){
  return {
    type: 'JOBTITLE',
    payload: title,
 };
}
//const allQuestions = [];
export function saveQuestion(question){
  //allQuestions.push(question)
  return {
    type: 'SELECT_QUESTION',
    payload: question
 };
}

export function getAll(questions) {
  return {
    type: 'GET_QUESTIONS',
    payload: questions,
  };
}

export function getQuestions(){
  return (dispatch) => {
    axios.get('http://localhost:3000/api/questions')
      .then((result) => {
        dispatch(getAll(result.data.questions));
      })
      .catch((err) => {
        console.error(err);
      });
  };
}