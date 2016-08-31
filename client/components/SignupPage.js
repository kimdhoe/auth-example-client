import React from 'react'

import SignupForm from './SignupForm'

class SignupPage extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <SignupForm signupRequest={this.props.signupRequest} />
        </div>
      </div>
    )
  }
}

SignupPage.propTypes =
  { signupRequest: React.PropTypes.func.isRequired }

export default SignupPage
