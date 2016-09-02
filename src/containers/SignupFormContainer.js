import React       from 'react'
import { connect } from 'react-redux'

import SignupForm           from '../components/SignupForm'
import { signupRequest }    from '../actions/signup'
import { login }            from '../actions/auth'
import { showFlashMessage } from '../actions/flashMessages'

const mapDispatchToProps = dispatch => (
  { signupRequest: user              => dispatch(signupRequest(user))
  , login:         (token, username) => dispatch(login(token, username))
  , showWelcome:   message           => dispatch(showFlashMessage(message))
  }
)

const SignupFormContainer = connect(null, mapDispatchToProps)(SignupForm)

export default SignupFormContainer
