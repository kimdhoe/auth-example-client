import React       from 'react'
import { connect } from 'react-redux'

import LoginForm from '../components/LoginForm'
import { login } from '../actions/auth'

const mapDispatchToProps = dispatch => (
  { handleSubmit: component => dispatch(login(component)) }
)

export default connect(null, mapDispatchToProps)(LoginForm)
