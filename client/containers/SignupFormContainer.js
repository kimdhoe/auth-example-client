import React       from 'react'
import { connect } from 'react-redux'

import SignupForm from '../components/SignupForm'
import { signupRequest
       , showFlashMessage
       }          from '../actions'

const mapDispatchToProps = dispatch => (
  { signupRequest: user    => dispatch(signupRequest(user))
  , showWelcome:   message => dispatch(showFlashMessage(message))
  }
)

const SignupFormContainer = connect(null, mapDispatchToProps)(SignupForm)

export default SignupFormContainer
