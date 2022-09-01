/**
 * A mock function to retrieve the user's logged in status
 * This would typically be a call to a backend API to verify
 * an access token saved in localStorage
 *
 * For demo purposes, we just assume the user is NOT logged in.
 */
export const userLoggedIn = () => true

/** A mock function to check whether user has admin role */
export const userIsAdmin = () => true
