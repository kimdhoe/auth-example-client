import React       from 'react'
import { connect } from 'react-redux'

import LoginForm from '../components/LoginForm'
import { login } from '../actions/auth'

const mapDispatchToProps = dispatch => (
  { handleSubmit: component => dispatch(login(component)) }
)

const LoginFormContainer = connect(null, mapDispatchToProps)(LoginForm)

export default LoginFormContainer
