import React from 'react'

class SignupForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = { username:             ''
                 , email:                ''
                 , password:             ''
                 , passwordConfirmation: ''
                 }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit (e) {
    e.preventDefault()
    console.log(this.state)
  }

  render () {
    return (
      <form onSubmit={this.onSubmit}>
        <h2>사용자 등록</h2>

        <div className="form-group">
          <label className="control-label" htmlFor="username">이름</label>
          <input
            type="text"
            name="username"
            id="username"
            className="form-control"
            value={this.state.username}
            onChange={this.onChange}
          />
        </div>

        <div className="form-group">
          <label className="control-label" htmlFor="email">이메일</label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            value={this.state.email}
            onChange={this.onChange}
          />
        </div>

        <div className="form-group">
          <label className="control-label" htmlFor="password">암호</label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            value={this.state.password}
            onChange={this.onChange}
          />
        </div>

        <div className="form-group">
          <label className="control-label" htmlFor="passwordConfirmation">
            암호 확인
          </label>
          <input
            type="password"
            name="passwordConfirmation"
            id="passwordConfirmation"
            className="form-control"
            value={this.state.passwordConfirmation}
            onChange={this.onChange}
          />
        </div>

        <div className="form-group">
          <button className="btn btn-primary">등록하기</button>
        </div>
      </form>
    )
  }
}

export default SignupForm
