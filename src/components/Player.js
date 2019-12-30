import React, {Component} from 'react'
import PlayerAPI from '../api'
import { Link } from 'react-router-dom'
import '../App.css';
import Resume from './Resume'

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: "",
      bgColor2:'none'
    }
  }

  boxClick = (e) => {
    console.log('test');
    this.setState({
      bgColor: "none",
      bgColor2: 'block'
    })
  }

  player =  PlayerAPI.get(
    parseInt(this.props.match.params.number, 10)
  )
  // if (!player) {
  //   return <div>Sorry, but the player was not found</div>
  // }
  render() {
  return (
    <div className='container-fluid'>
    <div className='details' style={{display: this.state.bgColor}}>
      <Link to='/roster' className='backbtn'><b>&#706;</b></Link> 
      <h4 className='text-center'>Employee Details of {this.player.name} {this.player.lname}</h4>
      
      <div>
      <h4 className='empid'>Employee ID : {this.player.number}</h4>
    
      {/* <Link to={`/resume/${this.player.name}`} name='name'><b>Flip to Resume</b></Link> */}
      <Link onClick={this.boxClick}><b>Flip to Resume</b></Link>
         
      </div>
      <hr/>
   
      <div className='col-md-offset-2 col-md-10 playertable'>
      <table >
        <tbody>
        <tr>
          <td>First Name :</td>
          <td>{this.player.name}</td>
        </tr>
        <tr>
          <td>Last Name :</td>
          <td>{this.player.lname}</td>
        </tr>
        <tr>
          <td>Address :</td>
          <td>{this.player.address}</td>
        </tr>
        <tr>
          <td>City :</td>
          <td>{this.player.city}</td>
        </tr>
        <tr>
          <td>Postal Code :</td>
          <td>{this.player.postal}</td>
        </tr>
        <tr>
          <td>Phone (Home) :</td>
          <td><a href='#'>{this.player.phone}</a></td>
        </tr>
        <tr>
          <td>Country :</td>
          <td>{this.player.country}</td>
        </tr>
        </tbody>        
      </table>
      <p>{this.player.image}</p>
      </div>
      <hr/>
      </div>
      
      <div className='res' style={{display: this.state.bgColor2}}><Resume name={this.player.name}/></div>
    </div>  
  )
     } 
}

export default Player
