import React           from 'react'
import { render }      from 'react-dom'
import { createStore } from 'redux'
import { Provider }    from 'react-redux'
import { Router
       , browserHistory
       }               from 'react-router'

import routes from './routes'

const store = createStore(() => {})

render( <Provider store={store}>
          <Router history={browserHistory} routes={routes} />
        </Provider>
      , document.getElementById('app')
      )
