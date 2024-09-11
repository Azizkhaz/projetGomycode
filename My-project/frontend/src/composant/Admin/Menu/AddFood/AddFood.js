import React, {useState} from 'react'
import './AddFood.css'
import { useNavigate } from 'react-router'
import { addFood } from '../../../../api/foodApi'
import { Link } from 'react-router-dom'
function AddFood() {
 const [imageUrl, setImageUrl] = useState('')
 const [name, setName] = useState('')
 const [description, setDescription] = useState('')
 const [price, setPrice] = useState(0)

 const navigate = useNavigate()

 const add = async (value) =>{
    try{
      await addFood(value)
      alert("Food added successfully")
      navigate('/MenuList')
    }catch(err){
      console.log("error adding food",err)
      alert('Failed to add Food');
    }
 }
  const Logout=()=>{
    localStorage.removeItem('token')
    navigate('/login')
    }


  return (
<div className='add'>
<div>

  
    <div>
        <header>
      <nav className="navbar">
      <div className="navbar-brand">
        
        <span>Admin</span>
      </div>
      <div className="navbar-links">
      <Link to='/admin' className="navbar-link" >Home</Link>
      <Link to='/addfood' className="navbar-link" > Add Menu </Link>
        <Link to='/menulist' className="navbar-link" > Menu</Link>
        <Link to='/contactt' className="navbar-link" > Contact</Link>

        
      </div>
      <div className="navbar-buttons">
        <button onClick={()=>Logout()} className="navbar-button" >Logout</button>
      </div>
    </nav>
    </header>
    </div>
</div>
<div className='maain'>
<main className='mainn'>
  <form className="form">
    <span className="title">Add Menu</span>
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
    <button onClick={()=>add({imageUrl,name,description,price})}  className="submit">
      Add
    </button>
  </form>
  </main>
  </div>
  </div>
  )
}

export default AddFood