import axios   from 'axios'
import shortid from 'shortid'

import { ADD_FLASH_MESSAGE
       , REMOVE_FLASH_MESSAGE } from '../constants'
import config                   from '../config'

export const signupRequest = user =>
  dispatch => axios.post(config.api + '/api/users', user)

export const addFlashMessage = message => (
  { type:    ADD_FLASH_MESSAGE
  , message: { ...message
             , id: shortid.generate()
             }
  }
)

export const removeFlashMessage = id => (
  { type: REMOVE_FLASH_MESSAGE
  , id
  }
)

// 입력받은 message를 store에 저장했다가 일정 시간 후 없애는 thunk 액션을 반환합니다.
export const showFlashMessage = message =>
  dispatch => {
    const addAction = addFlashMessage(message)

    // 플래시 문구를 띄웁니다.
    dispatch(addAction)

    // 3초 후 플래시 문구를 없앱니다.
    setTimeout( () => dispatch(removeFlashMessage(addAction.message.id))
              , 3000
              )
  }
