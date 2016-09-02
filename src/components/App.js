import React from 'react'

import NavigationContainer    from '../containers/NavigationContainer'
import FlashMessagesContainer from '../containers/FlashMessagesContainer'

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <NavigationContainer />
        <FlashMessagesContainer />
        {this.props.children}
      </div>
    )
  }
}

export default App
