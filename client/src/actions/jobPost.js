import { hashHistory } from 'react-router';
/**
 * Actions fired when on a particular Job posting
 */

export const INIT_JOB_INTERVIEW = 'INIT_JOB_INTERVIEW';
export function initJobInterview(id) {
  hashHistory.push(`/interview/${id}`);
  return {
    type: INIT_JOB_INTERVIEW
  };
}
