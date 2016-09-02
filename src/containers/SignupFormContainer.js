import React       from 'react'
import { connect } from 'react-redux'

import SignupForm           from '../components/SignupForm'
import { signupRequest }    from '../actions/signup'
import { showFlashMessage } from '../actions/flashMessages'

const mapDispatchToProps = dispatch => (
  { signupRequest: user    => dispatch(signupRequest(user))
  , showWelcome:   message => dispatch(showFlashMessage(message))
  }
)

const SignupFormContainer = connect(null, mapDispatchToProps)(SignupForm)

export default SignupFormContainer
