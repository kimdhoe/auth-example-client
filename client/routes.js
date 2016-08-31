import React     from 'react'
import { Route
       , IndexRoute
       }         from 'react-router'

import App                 from './components/App'
import Greetings           from './components/Greetings'
import SignupPageContainer from './containers/SignupPageContainer'

const routes =
  <Route path="/" component={App}>
    <IndexRoute component={Greetings} />
    <Route path="signup" component={SignupPageContainer} />
  </Route>

export default routes
