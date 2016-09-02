import React from 'react'

import FlashMessage from './FlashMessage'

const FlashMessages = ({ messages, removeFlashMessage }) =>
  <div>
    {messages.map(message =>
      <FlashMessage
        key={message.id}
        id={message.id}
        type={message.type}
        text={message.text}
        removeFlashMessage={removeFlashMessage}
      />
    )}
  </div>

FlashMessages.propTypes =
  { messages:           React.PropTypes.array.isRequired
  , removeFlashMessage: React.PropTypes.func.isRequired
  }

export default FlashMessages
