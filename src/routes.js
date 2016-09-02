import React from 'react'
import { Route
       , IndexRoute
       }     from 'react-router'

import App           from './components/App'
import Greetings     from './components/Greetings'
import SignupPage    from './components/SignupPage'
import LoginPage     from './components/LoginPage'
import ProtectedPage from './components/ProtectedPage'
import MePage        from './components/MePage'
import requireAuth   from './utils/requireAuth'

const routes =
  <Route path="/" component={App}>
    <IndexRoute              component={Greetings} />
    <Route path="signup"     component={SignupPage} />
    <Route path="login"      component={LoginPage} />
    <Route path="protected"  component={requireAuth(ProtectedPage)} />
    <Route path="me"         component={requireAuth(MePage)} />
  </Route>

export default routes
