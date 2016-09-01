import React     from 'react'
import { Route
       , IndexRoute
       }         from 'react-router'

import App        from './components/App'
import Greetings  from './components/Greetings'
import SignupPage from './components/SignupPage'
import LoginPage  from './components/LoginPage'

const routes =
  <Route path="/" component={App}>
    <IndexRoute component={Greetings} />
    <Route path="signup" component={SignupPage} />
    <Route path="login"  component={LoginPage} />
  </Route>

export default routes
