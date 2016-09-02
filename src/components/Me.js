import React from 'react'

class Me extends React.Component {
  static propTypes = { fetchUser: React.PropTypes.func.isRequired }

  constructor (props) {
    super(props)
    this.state = { username: ''
                 , email:    ''
                 }
  }

  componentWillMount () {
    this.props.fetchUser()
      .then(({ data: { user: { username, email }}}) => {
        this.setState({ username, email })
      })
  }

  render() {
    return (
      <div>
        <h2>사용자 정보</h2>

        <h3>이름</h3>
        <p>{this.state.username}</p>

        <h3>이메일</h3>
        <p>{this.state.email}</p>
      </div>
    )
  }
}

export default Me
