import { combineReducers } from 'redux'

import flashMessages  from './flashMessages'
import username       from './username'
import isUserLoggedIn from './isUserLoggedIn'

const reducer = combineReducers({ flashMessages, username, isUserLoggedIn })

export default reducer
