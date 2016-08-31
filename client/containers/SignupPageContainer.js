import React       from 'react'
import { connect } from 'react-redux'

import SignupPage from '../components/SignupPage'
import { signupRequest
       , showFlashMessage
       }          from '../actions'

const mapDispatchToProps = dispatch => (
  { signupRequest: user => dispatch(signupRequest(user))
  , showWelcome:   message => dispatch(showFlashMessage(message))
  }
)

const SignupPageContainer = connect( null
                                   , mapDispatchToProps
                                   )(SignupPage)

export default SignupPageContainer
