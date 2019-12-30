// import React from 'react'
// import '../App.css'

// const Resume = () => {
//   return   (
//     <div>
//      <ul class='nav nav-pills'>
//        <li>Info</l  i>
//        <li>Projects</li>
//        <li>Hobbies</li>
//        <li>Notes</li>
//      </ul>
//     </div>
//   )
// }

// export default Resume

import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


function Resume(props) {
  return (
    <Router>
     <Link><b>&#706;</b></Link> 
      <h4 className='text-center'>Resume of {props.name}</h4>
      <div>
        <ul className='nav nav-tabs'>
          <li>
            <Link to="/info">Info</Link>
          </li>
          <li>
            <Link to="/project">Project</Link>
          </li>
          <li>
            <Link to="/hobbies">Hobbies</Link>
          </li>
          <li>
            <Link to="/notes">Notes</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/info" component={Info} />
          <Route path="/project" component={Project} />
          <Route path="/hobbies" component={Hobbies} />
          <Route path="/notes" component={Notes} />
        </Switch>
      </div>
    </Router>
  );
}

function Info(){
  return <h5>Info</h5>;
} 
function Project(){
  return <h5>Project</h5>;
}
function Notes(){
  return <h5>Notes</h5>;
}
function Hobbies(){
  return (
  <div>
    <h5>Hobbies</h5>
  </div>    
  );
}
export default Resume;