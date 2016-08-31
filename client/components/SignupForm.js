import React      from 'react'
import classnames from 'classnames'

import InputField from './InputField'
import validate   from '../../shared/validations/signup'

class SignupForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = { username:             ''
                 , email:                ''
                 , password:             ''
                 , passwordConfirmation: ''
                 , errors:               {}
                 , isFetching:           false
                 }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  // Event -> void
  // Effect - 입력받은 이벤트 객체의 target 정보로 사용자 관련 상태를 채워넣습니다.
  onChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  // -> Boolean
  // 사용자 정보가 올바른지 여부를 반환합니다.
  // Effect - 정보가 올바르지 않은 경우 this.state.errors에 해당정보를 채워넣습니다.
  validateUser () {
    const { errors, isValid } = validate(this.state)

    if (!isValid)
      this.setState({ errors })

    return isValid
  }

  // Event -> void
  // effect - 사용자 정보가 올바른지 확인하고 오류 상태를 채워넣습니다.
  //          서버에 사용자 등록 요청을 보내고 응답을 받아 처리합니다.
  onSubmit (e) {
    e.preventDefault()

    if (this.validateUser()) {
      this.setState({ errors:     {}
                    , isFetching: true
                    }
                   )
      this.props.signupRequest(this.state)
        .then(() => {})
        .catch(err => this.setState({ errors:     err.response.data
                                    , isFetching: false
                                    }
                                   )
              )
    }
  }

  render () {
    const { errors } = this.state

    return (
      <form onSubmit={this.onSubmit}>
        <h2>사용자 등록</h2>

        <InputField
          fieldName="username"
          label="이름"
          value={this.state.username}
          error={errors.username}
          onChange={this.onChange}
        />

        <InputField
          type="email"
          fieldName="email"
          label="이메일"
          value={this.state.email}
          error={errors.email}
          onChange={this.onChange}
        />

        <InputField
          type="password"
          fieldName="password"
          label="암호"
          value={this.state.password}
          error={errors.password}
          onChange={this.onChange}
        />

        <InputField
          type="password"
          fieldName="passwordConfirmation"
          label="암호 확인"
          value={this.state.passwordConfirmation}
          error={errors.passwordConfirmation}
          onChange={this.onChange}
        />

        <div className="form-group">
          <button
            disabled={this.state.isFetching}
            className="btn btn-primary btn-lg"
          >
            등록하기
          </button>
        </div>
      </form>
    )
  }
}

SignupForm.propTypes =
  { signupRequest: React.PropTypes.func.isRequired }

export default SignupForm
