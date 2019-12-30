import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FullRoster from './FullRoster'
import Player from './Player'
import Resume from './Resume'
import Schedule from './Schedule' 

// The Roster component matches one of two different routes
// depending on the full pathname
const Roster = () => (
  <Switch>
    <Route exact path='/roster' component={FullRoster}/>
    <Route path='/roster/:number' component={Player}/>
    <Route path='/resume/:name' component={Resume}/>
    <Route path='/schedule' component={Schedule}/>
  </Switch>
)

export default Roster