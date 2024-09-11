import React, { useState, useEffect }  from 'react'
import { useNavigate, useParams } from 'react-router'
import { updateFood, fetchuniqueFood } from '../../../../api/foodApi'

import './UpdateFood.css'
function UpdateFood() {
    const [imageUrl, setImageUrl] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
   
    const navigate = useNavigate()

   
   
   // ncapti el id 
   const {id} = useParams()
console.log(id)
const updatfood = async(id, values) =>{
    await updateFood(id, values)
    await alert ('checked update')
    navigate('/MenuList')
} 

// get unique food

const getuniqfood = async(id)=>{
    const data = await fetchuniqueFood(id)
    console.log(id)
    console.log("data >", data.getfood)
     setImageUrl(data.getfood.imageUrl)
    setName(data.getfood.name)
    setDescription(data.getfood.description)
    setPrice(data.getfood.price)
}

useEffect(()=>{
    if(id){getuniqfood(id)}
},[id])
   
   
     return (
   <>
    <div className='updatee'>
     <form className="formm">
       <span className="title">update</span>
       <label  className="label">
         ImageUrl
       </label>
       <input
         type="text"
         required=""
         className="input"
         value={imageUrl} onChange={(e)=>setImageUrl(e.target.value)}
       />
       <label htmlFor="email" className="label">
         Name
       </label>
       <input type="text" required="" className="input" value={name} onChange={(e)=>setName(e.target.value)} />
       <label className="label">
         Description
       </label>
       <input
         type="text"
         required=""
         className="input"
         value={description} onChange={(e)=>setDescription(e.target.value)}
       />
        <label className="label">
         Price
       </label>
       <input
         type="Number"
         required=""
         className="input"
         value={price} onChange={(e)=>setPrice(e.target.value)}
       />
       <button type='button' onClick={()=>updatfood(id,{imageUrl,name,description,price})}  className="submit">
         update
       </button>
     </form>
     </div>
   </>
     )
}

export default UpdateFood