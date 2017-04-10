import axios from 'axios';

export function updateCompany(profile) {
  return {
    type: 'PROFILE_SUBMITTED',
    payload: profile,
  };
}

export function submitProfile(profile){
  return (dispatch) => {
    const id = profile.companyId;
    console.log('ID', id)
    const updatedProfile = profile.updatedProfile;
    axios.put('http://localhost:3000/api/companies/' + id, updatedProfile)
      .then((company) => {
        console.log('result in company actions', JSON.parse(company.config.data));
        dispatch(updateCompany(JSON.parse(company.config.data)));
      })
      .catch((err) => {
        console.error(err);
      });
  };
}

export function refreshCompany(profile){
console.log('profile in refreshCompany actions???????????????', profile);
  return {
    type: 'PROFILE_RELOAD',
    payload: profile,
  };
}

export function getCompany(companyId){
  console.log('in GET COMPANY')
  const id = companyId;
  return (dispatch) => {
    axios.get('http://localhost:3000/api/companies/' + id)
      .then((company) => {
        console.log('company in actions getcompany', company)
        dispatch(refreshCompany(company.data.company));
      })
      .catch((err) => {
        console.error(err);
      });
  };  
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