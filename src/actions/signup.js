import axios from 'axios'

import config from '../config'

export const signupRequest = user =>
  dispatch => axios.post(config.api + '/api/users', user)
