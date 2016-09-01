import { SET_CURRENT_USER } from '../constants'

const isUserLoggedIn = (state = false, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return true
    default:
      return state
  }
}

export default isUserLoggedIn
