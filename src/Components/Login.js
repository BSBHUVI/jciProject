import React, { useState } from "react";
import "../CSS/Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useMyDataContext } from "../context/DataContext";

function Login() {
  const [username, setUserName] = useState(() => "");
  const [password, setPassword] = useState(() => "");
  const { LoggedIn, setUser, setRole } = useMyDataContext();
  const navigate = useNavigate();
  const login = (e) => {
    e.preventDefault();
    axios
      .post("https://localhost:7105/api/Auth/login", {
        UserName: username,
        Password: password,
      })
      .then(() => {
        LoggedIn();
      })
      .then(() => {
        setUser(username);
      })
      .then(() => {
        axios
          .get(`https://localhost:7105/api/auth/getRoles/${username}`)
          .then((res) => {
            setRole(res.data[0]);
          });
      })
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        alert("Invalid Credentails");
      });
  };
  return <div className="login_container">
     <div className="login-card">
  <div className="card-header">
    <h1>Login</h1>
  </div>
  <div className="card-body">
    <form onSubmit={login} >
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input value={username} onChange={e=>setUserName(e.target.value)} className='login_inp' type="text" id="username" name="username" required/>
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input value={password} onChange={e=>setPassword(e.target.value)} className='login_inp' type="password" id="password" name="password" required/>
      </div>
      <div className="form-group">
        <button type="submit" className="login-button">Login</button>
      </div>
    </form>
  </div>
</div>
  </div>;
}

export default Login;
