import React from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
function NavBar() {
  const navigate = useNavigate()
  const Logout=()=>{
    localStorage.removeItem('token')
    navigate('/login')
    }
  return (
    <div>
        <header>
      <nav className="navbar">
      <div className="navbar-brand">
        
        <span>User</span>
      </div>
      <div className="navbar-links">
      <Link to='/user' className="navbar-link" >Home</Link>
      <Link to='/menuclist' className="navbar-link" > Menu </Link>
        <a href="#about" className="navbar-link">About</a>
        <a href="#testimonial" className="navbar-link">Reviews</a>
       <Link to='/contact' className="navbar-link">Contact</Link>        
      </div>
      <div className="navbar-buttons">
        <button onClick={()=>Logout()} className="navbar-button" >Logout</button>
      </div>
    </nav>
    </header>
    </div>
  )
}

export default NavBar