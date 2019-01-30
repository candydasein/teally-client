import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

const authenticatedOptions = (
  <React.Fragment>
    <Link to='/create-tasting'>New Tasting</Link>
    <Link to='/get-recommendations'>Get a Recommendation</Link>
    <Link to='/tastings-index'>All My Tastings</Link>
    <Link to='/tasting-show'>One Tasting</Link>
    <Link to='/tasting-delete/'>Delete a Tasting</Link>
    <Link to='/update-tasting/'>Update a Tasting</Link>
    <Link to='/teas/'>View Teas</Link>
           
        
    <Link to="/change-password">Change Password</Link>
    <Link to="/sign-out">Sign Out</Link>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <Link to="/sign-up">Sign Up</Link>
    <Link to="/sign-in">Sign In</Link>
  </React.Fragment>
)

const alwaysOptions = (
  <React.Fragment>
    <Link to="/">Home</Link>
  </React.Fragment>
)

const Header = ({ user }) => (
  <header className="main-header">
    <h1>
      Teally
    </h1>
    <nav>
      {/* { user && <span>Welcome, {user.email}</span>} */}
      { user ? authenticatedOptions : unauthenticatedOptions }
      { alwaysOptions }
    </nav>
  </header>
)

export default Header
