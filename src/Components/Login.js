import React from 'react'
import '../CSS/Login.css'

function Login() {
  return (
    <div className='login_container'>
      <div className="login-card">
  <div className="card-header">
    <h1>Login</h1>
  </div>
  <div className="card-body">
    <form>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input className='login_inp' type="text" id="username" name="username" required/>
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input className='login_inp' type="password" id="password" name="password" required/>
      </div>
      <div className="form-group">
        <button type="submit" className="login-button">Login</button>
      </div>
    </form>
  </div>
</div>

    </div>
  )
}

export default Login
