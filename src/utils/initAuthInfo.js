import setAuthToken       from './setAuthToken'
import { setCurrentUser } from '../actions/auth'

const initAuthToken = dispatch => {
  if (localStorage.jwt) {
    // 이후의 모든 HTTP 요청에 토큰이 실려가도록 설정합니다.
    setAuthToken(localStorage.jwt)

    // Redux store에 사용자 이름을 저장합니다.
    dispatch(setCurrentUser(localStorage.username))
  }
}

export default initAuthToken
