import axios from 'axios'

export const signupRequest = user =>
  dispatch => axios.post('/api/users', user)
