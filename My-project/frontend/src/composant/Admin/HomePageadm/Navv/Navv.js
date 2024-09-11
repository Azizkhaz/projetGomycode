import React from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
function Navv() {
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
  )
}

export default Navv