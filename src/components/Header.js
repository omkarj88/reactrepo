import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <header>
      <ul className="nav nav-pills">
        <li className=''><Link to='/'>Login</Link></li>
        <li className=''><Link to='/roster'>Employee List</Link></li>
      </ul>
  </header>
)

export default Header
