import axios from 'axios'

import config from '../config'

export const fetchUser = () => dispatch =>
  axios.get(config.api + '/api/me')
