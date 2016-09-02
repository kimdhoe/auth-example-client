import axios from 'axios'
import config from '../config'

export const sendProtectedForm = name => dispatch => {
  axios.post(config.api + '/api/protected', name)
}
