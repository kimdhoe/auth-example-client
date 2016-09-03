import { SET_CURRENT_USER
       , REMOVE_CURRENT_USER } from '../constants'

const isUserLoggedIn = (state = false, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:    return true
    case REMOVE_CURRENT_USER: return false
    default:                  return state
  }
}

export default isUserLoggedIn
