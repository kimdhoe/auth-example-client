import React       from 'react'
import { connect } from 'react-redux'

import Navigation from '../components/Navigation'
import { logout } from '../actions/auth'

const mapStateToProps = ({ isUserLoggedIn, username }) => (
  { isUserLoggedIn, username }
)

export default connect(mapStateToProps, { logout })(Navigation)
