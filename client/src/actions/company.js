import axios from 'axios';

export function submitProfile(profile) {
  console.log('profile in submitProfile actions???????????????', profile);
  return {
    type: 'PROFILE_SUBMITTED',
    payload: profile,
  };
}

/*export function submitProfile(profile){
  return (dispatch) => {
    axios.put('http://localhost:3000/api/companies')
      .then((result) => {
        dispatch(updateCompany(result));
      })
      .catch((err) => {
        console.error(err);
      });
  };
}*/

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
  console.log('in QUESTIONS');
  return (dispatch) => {
    console.log('below dispatch')
    axios.get('http://localhost:3000/api/questions')
      .then((result) => {
        dispatch(getAll(result.data.questions));
      })
      .catch((err) => {
        console.error(err);
      });
  };
}