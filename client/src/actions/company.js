import axios from 'axios';

export function submitProfile(profile) {
  console.log('profile in submitLoc actions', profile);
  return {
    type: 'PROFILE_SUBMITTED',
    payload: profile,
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
const allQuestions = [];
export function saveQuestion(question){
  allQuestions.push(question)
  return {
    type: 'SELECT_QUESTION',
    payload: allQuestions.concat([]),
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
        console.log(result.data.questions, 'QUESSSSSSSTIONSSSSSSSSSSSSSSSSSSSS');
        dispatch(getAll(result.data.questions));
      })
      .catch((err) => {
        console.error(err);
      });
  };
}