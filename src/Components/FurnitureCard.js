import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/FurnitureCard.css'

function FurnitureCard({val}) {
  console.log(val);
  return (
    <div>
    <div className="card">
 <div className="image">
    <img alt='table' className='table_img' src={val.ImageSrc1}/>
 </div>
  <div className="content">
   
      <span style={{display:"block"}} className="title">
      Posted By : {val.FurnitureName}
      </span>
      <span style={{display:"block"}} className="title">
     Type : {val.FurnitureType}
      </span>
      <span style={{display:"block"}} className="title">
      Price : {val.FurniturePrice}
      </span>
      
      <p style={{display:"block",opacity:"0.6",fontSize:"small"}} className="title">
      Description : {val.FurnitureDescription}
      </p>
    
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
