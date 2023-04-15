import React, { useState } from 'react'
import '../CSS/PostFurniture.css'
import defaultimg from '../images/default.jpg'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useMyDataContext } from '../context/DataContext';
function PostFurniture() {
  const {toggleData}=useMyDataContext()
  const navigate=useNavigate();
  const [furnitureName,setFurnitureName]=useState(()=>"")
  const [furnitureType,setFurnitureType]=useState(()=>"")
  const [furnitureDescription,setFurnitureDescription]=useState(()=>"")
  const [furniturePrice,setFurniturePrice]=useState(()=>"")
  const [img1,setImg1]=useState(()=>({
    imageName:"",
    imageSrc:defaultimg,
    imageFile:null

  }))
  const [img2,setImg2]=useState(()=>({
    imageName:"",
    imageSrc:defaultimg,
    imageFile:null

  }))
  const [img3,setImg3]=useState(()=>({
    imageName:"",
    imageSrc:defaultimg,
    imageFile:null

  }))
  const [img4,setImg4]=useState(()=>({
    imageName:"",
    imageSrc:defaultimg,
    imageFile:null

  }))
  const showimage1=(e)=>{
    if(e.target.files && e.target.files[0]){
      let imageFile=e.target.files[0];
      const reader =new FileReader();
      reader.onload=x=>{
      
        setImg1({
          ...img1,
          imageFile:imageFile,
          imageSrc:x.target.result
          
        })
      }
      reader.readAsDataURL(imageFile);
    }else{
      setImg1({
        ...img1,
        imageFile:null,
        imageSrc:defaultimg
        
      })
    }

  }
  const showimage2=(e)=>{
    if(e.target.files && e.target.files[0]){
      let imageFile=e.target.files[0];
      const reader =new FileReader();
      reader.onload=x=>{
      
        setImg2({
          ...img2,
          imageFile:imageFile,
          imageSrc:x.target.result
          
        })
      }
      reader.readAsDataURL(imageFile);
    }else{
      setImg2({
        ...img2,
        imageFile:null,
        imageSrc:defaultimg
        
      })
    }

  }
  const showimage3=(e)=>{
    if(e.target.files && e.target.files[0]){
      let imageFile=e.target.files[0];
      const reader =new FileReader();
      reader.onload=x=>{
      
        setImg3({
          ...img3,
          imageFile:imageFile,
          imageSrc:x.target.result
          
        })
      }
      reader.readAsDataURL(imageFile);
    }else{
      setImg3({
        ...img3,
        imageFile:null,
        imageSrc:defaultimg
        
      })
    }

  }
  const showimage4=(e)=>{
    if(e.target.files && e.target.files[0]){
      let imageFile=e.target.files[0];
      const reader =new FileReader();
      reader.onload=x=>{
      
        setImg4({
          ...img4,
          imageFile:imageFile,
          imageSrc:x.target.result
          
        })
      }
      reader.readAsDataURL(imageFile);
    }else{
      setImg4({
        ...img4,
        imageFile:null,
        imageSrc:defaultimg
        
      })
    }

  }
const handleSubmit=(e)=>{
  e.preventDefault();
  const formdata=new FormData();
  formdata.append("furnitureName",furnitureName);
  formdata.append("furnitureType",furnitureType);
  formdata.append("furnitureDescription",furnitureDescription)
  formdata.append("furniturePrice",furniturePrice)

  formdata.append("furnitureImg1File",img1.imageFile)
  formdata.append("imageName1","imageName1")
  formdata.append("imageName2","imageName2")
  formdata.append("imageName3","imageName3")
  formdata.append("imageName4","imageName4")

  formdata.append("furnitureImg2File",img2.imageFile)

  formdata.append("furnitureImg3File",img3.imageFile)

  formdata.append("furnitureImg4File",img4.imageFile)

axios.post("https://localhost:7105/api/Furniture",formdata).then(()=>{
  toggleData()
}).then(()=>{
  navigate("/")
}).catch((err)=>{
  alert(err.message)
})

}

  return (
    <div className='post_container'>
      <form onSubmit={handleSubmit} className='post_form_container form'>
 <h2 className='post_furniture_heading'>Post Furniture</h2>
 <input value={furnitureName} onChange={e=>setFurnitureName(e.target.value)} type='text' placeholder='Enter the name of furniture' required/>

 <select value={furnitureType} onChange={e=>setFurnitureType(e.target.value)} required>
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
<input id='img1' onChange={showimage1}  type='file' accept='image/**' required/>
</div>
<div>
<label htmlFor='img2'><AddPhotoAlternateIcon/></label>
<input   id='img2' onChange={showimage2} type='file' accept='image/**' required/>
</div>
<div>
<label htmlFor='img3'><AddPhotoAlternateIcon/></label>
<input  id='img3' onChange={showimage3}  type='file' accept='image/**' required/>
</div>
<div>
<label htmlFor='img4'><AddPhotoAlternateIcon/></label>
<input   id='img4' onChange={showimage4} type='file' accept='image/**' required/>
 </div>

 <input type='text' value={furnitureDescription} onChange={e=>setFurnitureDescription(e.target.value)} placeholder='Enter the Description' required/>
 <input type='text' value={furniturePrice} onChange={e=>setFurniturePrice(e.target.value)} placeholder='Enter the Price' required/>
 <button className='upload'>Upload</button>
      </form>

      <div className='post_form_container form chooseImgContainer'>
      <h1 style={{textAlign:"center",marginTop:"1.6rem",marginBottom:"1.6rem"}}>Preview Uploaded images</h1>
     
      <div className='choosenImage'>
        <img  alt='img1' src={img1.imageSrc}/>
        </div>
        <div className='choosenImage'>
        <img  alt='img2' src={img2.imageSrc}/>
        </div>
        <div className='choosenImage'>
        <img  alt='img3' src={img3.imageSrc}/>
        </div>
        <div className='choosenImage'>
        <img  alt='img4' src={img4.imageSrc}/>
        </div>
      </div>
    </div>
  )
}

export default PostFurniture
