import React   from 'react'
import isEmpty from 'lodash/isEmpty'

import InputField from './InputField'
import validate   from '../validations/login'

class LoginForm extends React.Component {
  static propTypes    = { handleSubmit: React.PropTypes.func.isRequired }
  static contextTypes = { router:       React.PropTypes.object.isRequired }

  constructor (props) {
    super(props)
    this.state    = { identifier: ''
                    , password:   ''
                    , errors:     {}
                    , isFetching: false
                    }
    this._onSubmit = this._onSubmit.bind(this)
    this._onChange = this._onChange.bind(this)
  }

  // 사용자 정보가 형식에 맞는지 확인하고 로그인 요청을 보냅니다.
  _onSubmit (e) {
    e.preventDefault()

    // Validate login data and set errors state.
    const { errors, isValid } = validate(this.state)

    isEmpty(errors) || this.setState({ errors })

    if (isValid) {
      this.setState({ errors: {}, isFetching: true })
      this.props.handleSubmit(this)
    }
  }

  // 사용자 정보와 관련된 상태를 업데이트합니다.
  _onChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render () {
    const { identifier, password, errors, isFetching } = this.state

    return (
      <form onSubmit={this._onSubmit}>
        <h2>로그인</h2>

        {errors.form &&
          <div className="alert alert-danger">{errors.form}</div>
        }

        <InputField
          fieldName="identifier"
          label="이름/이메일"
          value={identifier}
          error={errors.identifier}
          onChange={this._onChange}
        />

        <InputField
          type="password"
          fieldName="password"
          label="암호"
          value={password}
          error={errors.password}
          onChange={this._onChange}
        />

      <div className="form-group">
        <button
          className="btn btn-primary btn-lg"
          disabled={isFetching}
        >
          로그인
        </button>
      </div>
      </form>
    )
  }
}

export default LoginForm
