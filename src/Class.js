import React,{ Component } from "react";

class Class extends Component{
constructor(){
super();
this.state = {
month: 'Sept'
}
}

monthchange= (e) => {
    this.setState ({
        month:'Oct'
    })
}

render(){
   return(
       <div className='text-center'>This is Class componenmt
        <h5>Today is {this.props.day} {this.state.month}</h5>
        <button onClick={this.monthchange}>click</button>
       </div>
   ) 
}
}

export default Class