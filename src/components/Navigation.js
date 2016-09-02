import React    from 'react'
import { Link } from 'react-router'

const Navigation = ({ isUserLoggedIn, username, logout }) => {
  const onClick = e => {
    e.preventDefault()
    logout()
  }

  const userLinks  = <ul className="nav navbar-nav navbar-right">
                       <li><a href="#">{username}</a></li>
                       <li><a href="#" onClick={onClick}>Logout</a></li>
                     </ul>
  const guestLinks = <ul className="nav navbar-nav navbar-right">
                       <li><Link to="/signup">Sign up</Link></li>
                       <li><Link to="/login">Login</Link></li>
                     </ul>

  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">SPA Authentication Example</Link>
        </div>

        <div className="coljapse navbar-collapse">
          {isUserLoggedIn ? userLinks : guestLinks}
        </div>
      </div>
    </nav>
  )
}

Navigation.propTypes =
  { isUserLoggedIn: React.PropTypes.bool.isRequired
  , username:       React.PropTypes.string.isRequired
  , logout:   React.PropTypes.func.isRequired
  }

export default Navigation
