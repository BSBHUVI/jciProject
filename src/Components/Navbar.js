import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from '@mui/material';
import '../CSS/Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import PostAddIcon from '@mui/icons-material/PostAdd';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import LogoutIcon from '@mui/icons-material/Logout';
import { useMyDataContext } from '../context/DataContext';

function Navbar() {
  const {isLogged,Logout,user,role,setRole,setUser}=useMyDataContext()

  const [menu,setMenu]=useState(false)
  const [profile,setProfile]=useState(false)
  const toggleMenu=()=>{
    setMenu((prev)=>!prev)

  }
  const toogleProfile=()=>{
    setProfile((prev)=>!prev)
  }
  const logout=()=>{
    setMenu((prev)=>!prev)
    setRole("--------")
    setUser("--------")
     Logout()
  }
  const logoutProfile=()=>{
    setProfile((prev)=>!prev)
    setRole("--------")
    setUser("--------")
     Logout()
  }
  return (
    <>
    <div  className="navbar">
    <IconButton onClick={toggleMenu}>
    <MenuIcon />
</IconButton> 

<Link className='link' to="/"><p className='logo_text'>BS Stores</p></Link>
<div className="search_container">
<SearchIcon/>

<input className='search_box' type="text" placeholder='search furnitures' />
</div>
<div className="buttons_container">
{!isLogged && <Link to="/login"><button className='button'>Login</button></Link>}
{!isLogged && <Link to="/register"><button className='button'>Register</button></Link>}
</div>

<div className="profile">
<Link><IconButton onClick={toogleProfile}><Avatar/></IconButton> </Link>
</div>


    </div>
    {menu && <div className='menu_container'>

<div className="cancel_button">
<IconButton onClick={toggleMenu}>
<CloseIcon/>
</IconButton>
</div>
<div className="menu_contents">
<Link to="/" onClick={toggleMenu} className='link place_icons'><HomeIcon/><h3 className='content'>Home</h3></Link>
{role==="seller" && <Link to="/postfurniture" onClick={toggleMenu} className='link place_icons' ><PostAddIcon/><h3 className='content'>Post Furniture</h3></Link>}
<Link to="/cart" onClick={toggleMenu} className='link place_icons'><ShoppingCartIcon/><h3 className='content'>My Cart</h3></Link>
<Link to="/login" onClick={logout}  className='link place_icons'><LogoutIcon/><h3 className='content'>Logout</h3></Link>

</div>
</div>}


{profile && <div className='profile_container'>
<div className="profile_button">
<IconButton onClick={toogleProfile}>
<CloseIcon/>
</IconButton>
</div>
<div className='place_profile'>
<IconButton><Avatar /></IconButton> 
<h3 style={{marginBottom:"1rem",color:"blue"}}>User Name : {user}</h3>
<h3 style={{color:"blue"}}>Role : {role}</h3>
<Link onClick={logoutProfile} to='/login' style={{marginTop:"0.7rem",cursor:"pointer" ,display:"flex",alignItems:"center",textDecoration:"none"}}><h4  style={{color:"blue"}}>logout</h4><IconButton><LogoutIcon/></IconButton></Link>
</div>

</div>}

      <Outlet/>

      
    </>
  )
}

export default Navbar
