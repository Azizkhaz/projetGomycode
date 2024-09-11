import React, { useEffect } from 'react'
import { fetchContact } from '../../../api/contactApi'
import { useSelector, useDispatch } from 'react-redux'
import { setContact } from '../../../redux/contactSlice'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import ContactCard from './ContactCard'
import './Contact.css'
function Contact() {
 
    const Contact = useSelector(state=> state.contact)
    const dispatch = useDispatch()
    console.log('all contact', Contact)

  const getContact = async()=>{
    const data = await fetchContact()
    dispatch(setContact(data.contact))
    console.log("data =>", data)
  }
  useEffect(()=>{
    getContact()
  },[])
  const navigate = useNavigate()
  const Logout=()=>{
    localStorage.removeItem('token')
    navigate('/login')
    }
  return (
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
    {
      Contact.map((el)=> <ContactCard el={el} getContact={getContact} />)
    }
    </div>
  )
}

export default Contact