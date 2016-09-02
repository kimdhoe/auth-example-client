import React       from 'react'
import { connect } from 'react-redux'

import FlashMessages          from '../components/FlashMessages'
import { removeFlashMessage } from '../actions/flashMessages'

const mapStateToProps = ({ flashMessages }) => (
  { messages: flashMessages }
)

const mapDispatchToProps = dispatch => (
  { removeFlashMessage: id => dispatch(removeFlashMessage(id)) }
)

const FlashMessagesContainer = connect( mapStateToProps
                                      , mapDispatchToProps
                                      )(FlashMessages)

export default FlashMessagesContainer
