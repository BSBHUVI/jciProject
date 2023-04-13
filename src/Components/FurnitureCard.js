import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/FurnitureCard.css'

function FurnitureCard({image}) {
  return (
    <div>
    <div className="card">
 <div className="image">
    <img alt='table' className='table_img' src='https://tse2.mm.bing.net/th/id/OIP.bTu__qeMAOCkQS8hxrmATgHaHa?w=202&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7'/>
 </div>
  <div className="content">
    <Link className='link' to="/">
      <span style={{display:"block"}} className="title">
       write the description and details of the furniture and the uses 
      </span>
    </Link>
    <Link className='link action' to="/productDetails" >
      Find out more
      <span aria-hidden="true">
        →
      </span>
    </Link>
  </div>
</div>
      
    </div>
  )
}

export default FurnitureCard
