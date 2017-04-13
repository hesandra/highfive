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
      console.log('jobposts in getPostiions', jobposts)
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

export function submitDescription(description){
  console.log('title in ACtion handlers', description)
  return {
    type: 'DESCRIPTION',
    payload: description,
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

export function closeModal(){
  return {
    type: 'CLOSE_MODAL',
  }
}

export function deleteJob(jobId){
  return (dispatch) => {
    axios.delete('http://localhost:3000/api/jobposts/' + jobId)
  }
}

export function removeQuestion(item){
  //console.log('item in removeQuestion', data.itemToRemove, data.currentQuestions )
  return {
    type: 'REMOVE_QUESTION',
    payload: item,
  }
}

export function createJob(jobpost){
  return{
    type: 'CREATE_JOBPOST',
    payload: jobpost
  }
}

export function createJobPost(jobpost){
  console.log('JOBPOST IN CREATE JOBPOST', jobpost)
 return (dispatch) => {
   console.log('after dispatch')
    axios.post('http://localhost:3000/api/jobposts', jobpost)
      .then((result) => {
        console.log('result', result)
        dispatch(createJob(result));
      })
      .catch((err) => {
        console.error(err);
      });
  };
}

export function saveInterview(data){
  console.log('in saveInterview')
  return (dispatch) => {
    const postId = data.postId;
    axios.put('http://localhost:3000/api/jobposts/' + postId, data.questions)
    .then((jobpost) => {
      console.log('jobpost in saveInterview', jobpost)
    })
    .catch((err) => {
        console.error(err);
      });
  }
}
export function getAllIndustries(industries){
  return{
    type: 'GET_INDUSTRIES',
    payload: industries,
  }
}

export function getIndustries(){
  return(dispatch) => {
  axios.get('http://localhost:3000/api/industries')
  .then((result) =>{
    console.log('industries in getIndustries', result)
    dispatch(getAllIndustries(result.data.industries))
  })
    .catch((err) => {
        console.error(err);
  });
  }
}

export function getAllLocations(locations){
  return{
    type: 'GET_LOCATIONS',
    payload: locations,
  }
}

export function getLocations(){
  return(dispatch) => {
  axios.get('http://localhost:3000/api/locations')
  .then((result) =>{
    console.log('industries in getIndustries', result)
    dispatch(getAllLocations(result.data.locations))
  })
    .catch((err) => {
        console.error(err);
  });
  }
}


