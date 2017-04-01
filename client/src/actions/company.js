import axios from 'axios';

export function submitProfile(profile) {
  console.log('profile in submitLoc actions', profile);
  return {
    type: 'PROFILE_SUBMITTED',
    payload: profile,
  };
}