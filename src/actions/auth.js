'use strict'

export const USER_LOGGED_IN = 'USER_LOGGED_IN'
export const USER_LOGGED_OUT = 'USER_LOGGED_OUT'


export function userLoggedIn(user) {

  return {
  	user: user,
    type: USER_LOGGED_IN
  }
}

export function userLoggedOut() {

  return {
    user: null,
    type: USER_LOGGED_OUT
  }
}
