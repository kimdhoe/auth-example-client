import React           from 'react'
import { render }      from 'react-dom'
import { createStore
       , applyMiddleware
       }               from 'redux'
import { Provider }    from 'react-redux'
import { Router
       , browserHistory
       }               from 'react-router'
import thunkMiddleware from 'redux-thunk'

import routes  from './routes'
import reducer from './reducer'

const store = createStore( reducer
                         , applyMiddleware(thunkMiddleware)
                         )

store.subscribe(() => { console.log(store.getState()) })

render( <Provider store={store}>
          <Router history={browserHistory} routes={routes} />
        </Provider>
      , document.getElementById('app')
      )
