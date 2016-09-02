import React       from 'react'
import { connect } from 'react-redux'

import Me            from '../components/Me'
import { fetchUser } from '../actions/user'

const MeContainer = connect(null, { fetchUser })(Me)

export default MeContainer
