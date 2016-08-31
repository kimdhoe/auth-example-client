import React       from 'react'
import { connect } from 'react-redux'

import SignupPage        from '../components/SignupPage'
import { signupRequest } from '../actions'

const mapDispatchToProps = dispatch => (
  { signupRequest: (user) => dispatch(signupRequest(user)) }
)

const SignupPageContainer = connect( null
                                   , mapDispatchToProps
                                   )(SignupPage)

export default SignupPageContainer
