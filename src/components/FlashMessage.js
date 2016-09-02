import React from 'react'

const FlashMessage = ({ id, type, text, removeFlashMessage }) =>
  <div className={`alert alert-${type}`}>
    {text}
    <button
      className="close"
      onClick={() => removeFlashMessage(id) }
    >
      <span>&times;</span>
    </button>
  </div>

FlashMessage.propTypes =
  { id:                 React.PropTypes.string.isRequired
  , type:               React.PropTypes.string.isRequired
  , text:               React.PropTypes.string.isRequired
  , removeFlashMessage: React.PropTypes.func.isRequired
  }

export default FlashMessage
