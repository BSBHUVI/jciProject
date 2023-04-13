import React from 'react'
import '../CSS/Register.css'

function Register() {
  return (
    <div className='login_container'>
      <div className="login-card">
  <div className="card-header">
    <h1>Register</h1>
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
        <label htmlFor="confirm_password">Confirm Password</label>
        <input className='login_inp' type="password" id="confirm_password" name="password" required/>
      </div>
      <div className="form-group">
        <label htmlFor="role">Choose Role</label>
        <select className='login_inp' type="text" id="role" required>
<option >customer</option>
<option>seller</option>
        </select>
      </div>
      <div className="form-group">
        <button type="submit" className="login-button">Register</button>
      </div>
    </form>
  </div>
</div>

    </div>
  )
}

export default Register
