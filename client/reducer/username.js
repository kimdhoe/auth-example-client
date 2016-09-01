import { SET_CURRENT_USER } from '../constants'

const username = (state = '', action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return action.username
    default:
      return state
  }
}

export default username
