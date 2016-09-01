import axios from 'axios'

import { SET_CURRENT_USER } from '../constants'
import setAuthToken         from '../utils/setAuthToken'

export const setCurrentUser = username => (
  { type: SET_CURRENT_USER
  , username
  }
)

export const login = component => dispatch => {
  axios
    .post( '/auth'
         , { identifier: component.state.identifier
           , password:   component.state.password
           }
         )
    .then(res => {
      const { token, username } = res.data
      console.dir(res.data)

      // 토큰과 이름을 저장합니다.
      localStorage.setItem('jwt',      token)
      localStorage.setItem('username', username)

      // 이후의 모든 HTTP 요청에 토큰이 실려가도록 설정합니다.
      setAuthToken(token)

      // Redux store에 사용자 이름을 저장합니다.
      dispatch(setCurrentUser(username))

      // 홈페이지로 리다이렉트합니다.
      component.context.router.push('/')
    })
    .catch(err => component.setState({ errors:     err.response.data.errors
                                     , isFetching: false
                                     }
                                    )
          )
}
