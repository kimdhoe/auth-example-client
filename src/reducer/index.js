import { combineReducers } from 'redux'

import flashMessages  from './flashMessages'
import username       from './username'
import isUserLoggedIn from './isUserLoggedIn'

// type State        = { isUserLoggedIn: boolean
//                     , username:       string
//                     , flashMessages:  Array<FlashMessage>
//                     }
//
// type FlashMessage = { type: string
//                     , text: string
//                     }

const reducer = combineReducers({ flashMessages, username, isUserLoggedIn })

export default reducer
