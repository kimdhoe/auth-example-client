import axios from 'axios'

import { SET_CURRENT_USER 
       , REMOVE_CURRENT_USER } from '../constants'
import setAuthToken            from '../utils/setAuthToken'
import config                  from '../config'

import { addFlashMessage } from './flashMessages'

export const setCurrentUser = username => (
  { type: SET_CURRENT_USER
  , username
  }
)

export const removeCurrentUser = () => (
  { type: REMOVE_CURRENT_USER }
)

export const login = (token, username) => dispatch => {
  // 토큰과 이름을 저장합니다.
  localStorage.setItem('jwt',      token)
  localStorage.setItem('username', username)

  // 이후의 모든 HTTP 요청에 토큰이 실려가도록 설정합니다.
  setAuthToken(token)

  // Redux store에 사용자 이름을 저장합니다.
  dispatch(setCurrentUser(username))
}

export const loginRequest = component => dispatch => {
  axios
    .post( config.api + '/auth'
         , { identifier: component.state.identifier
           , password:   component.state.password
           }
         )
    .then(res => {
      const { token, username } = res.data

      dispatch(login(token, username))

      // 홈페이지로 리다이렉트합니다.
      component.context.router.push('/')
    })
    .catch(err => component.setState({ errors:     err.response.data.errors
                                     , isFetching: false
                                     }
                                    )
          )
}

export const logout = () => dispatch => {
  // 저장된 토큰과 이름을 없앱니다.
  localStorage.removeItem('jwt')
  localStorage.removeItem('username')

  // 이후의 HTTP 요청 header에 토큰이 포함되지 않도록 설정합니다.
  setAuthToken(false)

  // Redux store에 저장된 사용자 이름을 없앱니다.
  dispatch(removeCurrentUser())
}
