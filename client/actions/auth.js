import axios from 'axios'

export const login = component => dispatch => {
  axios
    .post( '/auth'
         , { identifier: component.state.identifier
           , password:   component.state.password
           }
         )
    .then(()   => component.context.router.push('/'))
    .catch(err => component.setState({ errors:     err.response.data.errors
                                     , isFetching: false
                                     }
                                    )
          )
}