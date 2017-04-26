import axios from 'axios';
import NotificationSystem from 'react-notification-system';
import { BASE_URL } from '../utils/constants';

export function updateCompany(profile) {
  return {
    type: 'PROFILE_SUBMITTED',
    payload: profile,
  };
}

export function submitProfile(profile) {
  return (dispatch) => {
    const id = profile.companyId;
    const updatedProfile = profile.updatedProfile;
    const industryId = parseInt(updatedProfile.industry_id);
    const locationId = parseInt(updatedProfile.location_id);
    updatedProfile.industry_id = industryId;
    updatedProfile.location_id = locationId;
    axios.put(`${BASE_URL}/api/companies/${id}`, updatedProfile)
      .then((company) => {
        dispatch(updateCompany(JSON.parse(company.config.data)));
      })
      .then(() => {
        dispatch(getCompany(id));
      })
      .catch((err) => {
        console.error(err);
      });
  };
}

export function refreshCompany(profile) {
  return {
    type: 'PROFILE_RELOAD',
    payload: profile,
  };
}

export function getCompany(companyId) {
  const id = companyId;
  return (dispatch) => {
    axios.get(`${BASE_URL}/api/companies/${id}`)
      .then((company) => {
        dispatch(refreshCompany(company.data.company));
      })
      .catch((err) => {
        console.error(err);
      });
  };
}

export function getJobs(jobs) {
  return {
    type: 'GET_POSITIONS',
    payload: jobs
  };
}

export function getPositions() {
  return (dispatch) => {
    axios.get(`${BASE_URL}/api/jobposts`)
      .then((jobposts) => {
        dispatch(getJobs(jobposts.data.jobposts));
      })
      .catch((err) => {
        console.error(err);
      });
  };
}

export function getSubs(submissions) {
  return {
    type: 'GET_SUBMISSIONS',
    payload: submissions
  };
}

export function getSubmissions(postId) {
  return (dispatch) => {
    axios.get(`${BASE_URL}/api/submissions/jobpost/${postId}`)
      .then((submission) => {
        dispatch(getSubs(submission.data.submission));
      })
      .catch((err) => {
        console.error(err);
      });
  };
}

export function showVideos(videos) {
  return {
    payload: videos,
    type: 'SHOW_VIDEOS',
  };
}

export function createInterview() {
  return {
    type: 'CREATE_INTERVIEW'
  };
}

export function senPos() {
  return {
    type: 'SENIOR'
  };
}

export function junPos() {
  return {
    type: 'JUNIOR'
  };
}

export function midPos() {
  return {
    type: 'MID'
  };
}

export function submitDescription(description) {
  return {
    type: 'DESCRIPTION',
    payload: description,
  };
}

export function saveQuestion(question) {
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

export function getQuestions() {
  return (dispatch) => {
    axios.get(`${BASE_URL}/api/questions`)
      .then((result) => {
        dispatch(getAll(result.data.questions));
      })
      .catch((err) => {
        console.error(err);
      });
  };
}

export function closeModal() {
  return {
    type: 'CLOSE_MODAL',
  };
}

export function closePostModal() {
  return {
    type: 'CLOSE_POST_MODAL',
  };
}

export function closeApplModal() {
  return {
    type: 'CLOSE_APPL_MODAL'
  };
}

export function deleteJob(jobId) {
  return (dispatch) => {
    axios
      .delete(`${BASE_URL}/api/jobposts/${jobId}`)
      .then((res) => { console.log('res', res); })
      .catch((e) => { console.log(e); });
  };
}

export function removeQuestion(item) {
  return {
    type: 'REMOVE_QUESTION',
    payload: item,
  };
}

export function createJob(jobpost) {
  return {
    type: 'CREATE_JOBPOST',
    payload: jobpost
  };
}

export function createJobPost(jobpost) {
  return (dispatch) => {
    axios.post(`${BASE_URL}/api/jobposts`, jobpost)
      .then((result) => {
        dispatch(createJob(result));
      })
      .then(() => {
        console.log('in close Modal');
        dispatch(closePostModal());
      })
      .catch((err) => {
        console.error(err);
      });
  };
}

export function saveInterview(data) {
  return (dispatch) => {
    const postId = data.postId;
    axios.put(`${BASE_URL}/api/jobposts/${postId}`, data.questions)
      .catch((err) => {
        console.error(err);
      });
  };
}
export function getAllIndustries(industries) {
  return {
    type: 'GET_INDUSTRIES',
    payload: industries,
  };
}

export function getIndustries() {
  return (dispatch) => {
    axios.get(`${BASE_URL}/api/industries`)
      .then((result) => {
        dispatch(getAllIndustries(result.data.industries));
      })
      .catch((err) => {
        console.error(err);
      });
  };
}

export function getAllLocations(locations) {
  return {
    type: 'GET_LOCATIONS',
    payload: locations,
  };
}

export function getLocations() {
  return (dispatch) => {
    axios.get(`${BASE_URL}/api/locations`)
      .then((result) => {
        dispatch(getAllLocations(result.data.locations));
      })
      .catch((err) => {
        console.error(err);
      });
  };
}

export function updateSubmission(data) {
  const id = data.subId;
  const jobPostId = data.jobPostId;
  return (dispatch) => {
    axios.put(`${BASE_URL}/api/submissions/${id}`, data)
      .then((result) => {
        const status = JSON.parse(result.config.data);
        dispatch(updateStatus(status));
      })
      .then(() => {
        dispatch(saveAppUpdate());
      })
      .then(() => {
        dispatch(getSubmissions(jobPostId));
      });
  };
}

export function updateStatus(data) {
  return {
    type: 'UPDATE_STATUS',
    payload: data,
  };
}


export function saveAppUpdate() {
  return {
    type: 'OPEN_MODAL'
  };
}

export function dropPic(picture) {
  return {
    type: 'UPDATE_PICTURE',
    payload: picture.profile_img
  };
}

export function updatePicture(data) {
  const id = data.companyId;
  return (dispatch) => {
    axios.put(`${BASE_URL}/api/companies/picture/${id}`, data)
      .then((result) => {
        dispatch(dropPic(JSON.parse(result.config.data)));
      })
      .catch((err) => {
        console.error(err);
      });
  };
}

export function hidePostModal() {
  return {
    type: 'HIDE_POST_MODAL',
  };
}


