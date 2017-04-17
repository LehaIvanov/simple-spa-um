import { CALL_API } from "../middleware/api";

/* tslint:disable:no-inferrable-types */
export const USERS_REQUEST: string = "USERS_REQUEST";
export const USERS_SUCCESS: string = "USERS_SUCCESS";
export const USERS_FAILURE: string = "USERS_FAILURE";
/* tslint:enable:no-inferrable-types */


// Fetches a page of Users for a particular repo.
// Relies on the custom API middleware defined in ../middleware/api.js.
/*
const fetchUsers = (fullName, nextPageUrl) => ({
  fullName,
  [CALL_API]: {
    types: [ USERS_REQUEST, USERS_SUCCESS, USERS_FAILURE ],
    endpoint: nextPageUrl,
  }
})
*/

// Fetches a page of Users for a particular repo.
// Bails out if page is cached and user didn't specifically request next page.
// Relies on Redux Thunk middleware.
/*
export const loadUsers = (fullName, nextPage) => (dispatch, getState) => {
  const {
    nextPageUrl = `repos/${fullName}/Users`,
    pageCount = 0
  } = getState().pagination.UsersByRepo[fullName] || {}

  if (pageCount > 0 && !nextPage) {
    return null
  }

  return dispatch(fetchUsers(fullName, nextPageUrl))
}
*/
