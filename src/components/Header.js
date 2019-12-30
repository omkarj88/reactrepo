import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    {/* <nav> */}
      <ul className="nav nav-pills">
        <li className=''><Link to='/'>Login</Link></li>
        <li className=''><Link to='/roster'>Employee List</Link></li>
        {/* <li className=''><Link to='/schedule'>Schedule</Link></li> */}
        {/* <li className=''><Link to='/schedule'>Show Employee </Link></li> */}
      </ul>
    {/* </nav> */}
  </header>
)

export default Header
