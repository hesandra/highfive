/**
 * Fired when a particular Job post has been clicked
 *  -todo- Grab data from server using redux Thunk 
 */
export const REQUEST_JOB_POST = 'REQUEST_JOB_POST';
export function requestJobPost() {
  return {
    type: 'REQUEST_JOB_POST'
  };
}
