import React from 'react'

import InputField from './InputField'

class ProtectedForm extends React.Component {
  static propTypes = { sendProtectedForm: React.PropTypes.func.isRequired }

  constructor (props) {
    super(props)
    this.state = { name:       ''
                 , errors:     {}
                 , isFetching: false
                 }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit (e) {
    e.preventDefault()

    this.props.sendProtectedForm(this.state.name)
  }

  render () {
    const { name, errors, isFetching } = this.state

    return (
      <form onSubmit={this.onSubmit}>
        <h2>Protected Form</h2>

        <InputField
          fieldName="name"
          label="이름"
          name="name"
          value={name}
          onChange={this.onChange}
          error={errors.name}
        />

      <button type="submit" className="btn btn-primary btn-lg">보내기</button>
    </form>
    )
  }
}

export default ProtectedForm
