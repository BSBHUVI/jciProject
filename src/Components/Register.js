import React, { useState } from 'react'
import '../CSS/Register.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Register() {
  const [username,setUserName]=useState(()=>"")
  const [password,setPassword]=useState(()=>"")
  const [confirmPassword,setConfirmPassword]=useState(()=>"")
  const [roles,setRoles]=useState(()=>"")
  const navigate=useNavigate()
  const register=(e)=>{
    e.preventDefault()
    if(password===confirmPassword){
      axios.post("https://localhost:7105/api/Auth/register",{
        UserName: username,
        Password: password
      }).then(()=>{
        axios.post(`https://localhost:7105/api/Auth/userTorole/${roles}/${username}`)

        }).then(()=>{
          navigate("/login")

        })

      .catch((err)=>{
        alert("user already exists")
      })
  }else{
    alert("password mismatch")
  }
  }
  return (
    <div className='login_container'>
      <div className="login-card">
  <div className="card-header">
    <h1>Register</h1>
  </div>
  <div className="card-body">
    <form onSubmit={register} >
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input value={username} onChange={e=>setUserName(e.target.value)}  className='login_inp' type="text" id="username" name="username" required/>
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input value={password} onChange={e=>setPassword(e.target.value)}  className='login_inp' type="password" id="password" name="password" required/>
      </div>
      <div className="form-group">
        <label htmlFor="confirm_password">Confirm Password</label>
        <input value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)} className='login_inp' type="password" id="confirm_password" name="password" required/>
      </div>
      <div className="form-group">
        <label htmlFor="role">Choose Role</label>
        <select value={roles} onChange={e=>setRoles(e.target.value)} className='login_inp' type="text" id="role" required>
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
