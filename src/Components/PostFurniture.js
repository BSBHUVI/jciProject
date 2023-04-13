import React from 'react'
import '../CSS/PostFurniture.css'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
function PostFurniture() {
  return (
    <div className='post_container'>
      <form className='post_form_container form'>
 <h2 className='post_furniture_heading'>Post Furniture</h2>
 <input type='text' placeholder='Enter the name of furniture' required/>

 <select required>
 <option>Choose The Type of Furniture</option>
    <option>chair</option>
    <option>Dinning Table</option>
    <option>Study Table</option>
    <option>stool</option>
    <option>Bed</option>
 </select>

 <h3 style={{opacity:"0.6",marginTop:"0.7rem"}}>Upload images of the furniture</h3>
 <div>
 <label htmlFor='img1'><AddPhotoAlternateIcon/></label>
<input id='img1'  type='file' required/>
</div>
<div>
<label htmlFor='img2'><AddPhotoAlternateIcon/></label>
<input   id='img2'  type='file' required/>
</div>
<div>
<label htmlFor='img3'><AddPhotoAlternateIcon/></label>
<input  id='img3'  type='file' required/>
</div>
<div>
<label htmlFor='img4'><AddPhotoAlternateIcon/></label>
<input   id='img4'  type='file' required/>
 </div>

 <input type='text' placeholder='Enter the Description' required/>
 <input type='number' placeholder='Enter the Price' required/>
 <button className='upload'>Upload</button>
      </form>
    </div>
  )
}

export default PostFurniture
