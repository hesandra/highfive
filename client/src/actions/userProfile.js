import UserAuthService from '../utils/userAuthService';

export const REQUEST_JOB_POSTS = 'REQUEST_JOB_POSTS';
export const requestJobPosts = () => {
  return {
    type: REQUEST_JOB_POSTS
  };
};


export const UPDATE_USER_PROFILE = 'UPDATE_USER_PROFILE';
export const updateUserProfile = (profile) => {
  UserAuthService.setBackEndProfile(profile);
  return {
    type: UPDATE_USER_PROFILE,
    profile
  };
};
