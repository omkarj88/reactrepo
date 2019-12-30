import React from 'react'

const Home = () => (
  <div className="loginpad">
    <h2>Login</h2>
    <br/>
    <form>
    <label htmlFor="username">Username</label>
    <br/>
    <input type="text" className="form-control form-group form-ln" name="password" required/>
    <br/>
    <label htmlFor="username">Password</label>
    <br/>
    <input type="password" className="form-control form-group form-ln" name="password" required/>
    <br/>
    <button className="btn btn-primary">Login</button>
    </form>
                        
  </div>
)

export default Home