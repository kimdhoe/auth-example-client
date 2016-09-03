import React          from 'react'
import { connect }    from 'react-redux'
import { withRouter } from 'react-router'

const requireGuest = ComposedComponent => {
  class ForGuest extends React.Component {
    static propTypes    = { isUserLoggedIn: React.PropTypes.bool.isRequired }

    // 로그인 상태에서 접근시 리다이렉트합니다.
    protectRoute () {
      if (this.props.isUserLoggedIn)
        this.props.router.push('/')
    }

    componentWillMount  () { this.protectRoute() }
    componentWillUpdate () { this.protectRoute() }

    render () {
      return <ComposedComponent {...this.props} />
    }
  }

  const mapStateToProps = ({ isUserLoggedIn }) => (
    { isUserLoggedIn }
  )

  return withRouter(connect(mapStateToProps)(ForGuest))
}

export default requireGuest
