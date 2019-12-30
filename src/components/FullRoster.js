import React from 'react'
import PlayerAPI from '../api'
import { Link } from 'react-router-dom'
import '../App.css';

// The FullRoster iterates over all of the players and creates
// a link to their profile page.
const FullRoster = () => (
  <div className='container-fluid'>
    <h4 className='text-center'>Employee List</h4>

    <h5>List of all employees</h5> 
    <ul className='playlist nav nav-pills nav-stacked'>
      {
        PlayerAPI.all().map(p => (
          <li key={p.number}>
            <Link to={`/roster/${p.number}`} className="bigblue">{p.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
)

export default FullRoster
