import findIndex from 'lodash/findIndex'

import { ADD_FLASH_MESSAGE
       , REMOVE_FLASH_MESSAGE
       } from '../constants'

const flashMessages = (messages = [], action) => {
  switch (action.type) {
    case ADD_FLASH_MESSAGE:
      return [ ...messages
             , action.message
             ]
    case REMOVE_FLASH_MESSAGE:
      const i = findIndex(messages, { id: action.id })
      return i >= 0 ? [ ...messages.slice(0, i)
                      , ...messages.slice(i + 1)
                      ]
                    : messages
    default:
      return messages
  }
}

export default flashMessages
