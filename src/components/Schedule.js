import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: ""
    }
  }

  boxClick = (e) => {
    console.log('test');
    this.setState({
      bgColor: "none"
    })
  }

  render() {
  return (
    <Router>
      <div>
        <ul id='sch'>
          <li>
            <Link to="/about">About Us (static)</Link>
          </li>
          <li>
            <Link to="/company">Company (static)</Link>
          </li>
          <li>
            <Link to="/kimj">Kim (dynamic)</Link>
          </li>
          <li>
            <Link to="/chris">Chris (dynamic)</Link>
          </li>
        </ul>
        <button style={{display: this.state.bgColor}} onClick={this.boxClick}>click</button>
    
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/company" component={Company} />
          <Route path="/:user" component={User} />
        </Switch>
      </div>
    </Router>
  );
}
}

function About() {
  return <h2>About</h2>;
}

function Company() {
  return <h2>Company</h2>;
}

function User({ match }) {
  return (
    <div>
      <h2>User: {match.params.user}</h2>
    </div>
    
  );
}
export default Schedule;
