import React from 'react'
import FurnitureCard from './FurnitureCard'
import '../CSS/Home.css'
import { useMyDataContext } from '../context/DataContext';

function Home() {
  const {table}=useMyDataContext();
  return (
    <div className='home_container'>

   {table.length!==0 && table.map((val,idx)=>(
    <FurnitureCard key={idx} val={val}/>
   ))}
   
    
    </div>
  )
}

export default Home
