import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'
const MyContext=createContext()

function DataContext({children}) {

   const [isLogged,SetIsLogged]=useState(false)
   const [user,setUser]=useState("---------")
   const [role,setRole]=useState("---------")
   const [toggle,setToggle]=useState(false)
   const toggleData=()=>{
    setToggle((prev)=>!prev)
   }
   const [table,setTables]=useState([])
   useEffect(()=>{
    axios.get("https://localhost:7105/api/Furniture").then((res)=>{
        setTables(res.data)
    }).catch((err)=>{
        console.log(err.message);
    })
   },[toggle])
const LoggedIn=()=>{
    SetIsLogged(true)
}

const Logout=()=>{
    SetIsLogged(false)
}
   
  return (
   <MyContext.Provider value={{isLogged,LoggedIn,Logout,user,setUser,role,setRole,table,toggleData}}>
    {children}
   </MyContext.Provider>
  )
}


export function useMyDataContext(){
    return useContext(MyContext)
}

export default DataContext
