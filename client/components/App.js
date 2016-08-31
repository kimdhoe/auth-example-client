import React from 'react'

import Navigation             from './Navigation'
import FlashMessagesContainer from '../containers/FlashMessagesContainer'

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Navigation />
        <FlashMessagesContainer />
        {this.props.children}
      </div>
    )
  }
}

export default App
