import React       from 'react'
import { connect } from 'react-redux'

import { showFlashMessage } from '../actions/flashMessages'

// 입력받은 컴포넌트로 사용자 인증을 요구하는 컨테이너를 만들어 반환합니다.
const requireAuth = ComposedComponent => {
  class Authenticate extends React.Component {
    static propTypes    = { showFlashMessage: React.PropTypes.func.isRequired
                          , isUserLoggedIn:   React.PropTypes.bool.isRequired
                          }
    static contextTypes = { router: React.PropTypes.object.isRequired }

    // 로그아웃 상태에서 보호된 페이지 접근시 로그인 페이지로 보냅니다.
    componentWillMount () {
      if (!this.props.isUserLoggedIn) {
        this.context.router.push('/login')
        this.props.showFlashMessage({ type: 'danger'
                                    , text: '로그인이 필요한 페이지입니다.'
                                    }
                                   )
      }
    }

    // 보호된 페이지에서 로그아웃할 경우 홈페이지로 보냅니다.
    componentWillUpdate (nextProps) {
      if (!nextProps.isUserLoggedIn)
        this.context.router.push('/')
    }

    render () {
      return (
        <ComposedComponent {...this.props} />
      )
    }
  }

  const mapStateToProps = ({ isUserLoggedIn }) => (
    { isUserLoggedIn }
  )

  return connect(mapStateToProps, { showFlashMessage })(Authenticate)

}

export default requireAuth
