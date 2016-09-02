import React       from 'react'
import { connect } from 'react-redux'

import ProtectedForm         from '../components/ProtectedForm'
import { sendProtectedForm } from '../actions/protected'

export default connect(null, { sendProtectedForm })(ProtectedForm)
