import React       from 'react'
import { connect } from 'react-redux'

import LoginForm from '../components/LoginForm'
import { loginRequest } from '../actions/auth'

const mapDispatchToProps = dispatch => (
  { handleSubmit: component => dispatch(loginRequest(component)) }
)

const LoginFormContainer = connect(null, mapDispatchToProps)(LoginForm)

export default LoginFormContainer
