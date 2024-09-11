import React from 'react'
import './ButtonLog.css'
import Homme from './Homme/Homme'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
function User({Logout , auth}) {
 console.log('auth=>',auth)

 const authUser = useSelector(state=>state.auth)
 console.log('authUser user account =>', authUser)
  return (
<>
<header>
      <nav className="navbar">
      <div className="navbar-brand">
        
        <span>{authUser.name}</span>
      </div>
      <div className="navbar-links">
        <Link to='/user' className="navbar-link" >Home</Link>
        <Link to='/menuclist' className="navbar-link"> Menu </Link> 
        <Link></Link>
        <Link  to={`/reservation/${authUser._id}`} className="navbar-link">
          Reservation
        </Link>
        <a href="#testimonial" className="navbar-link">Reviews</a>
        <Link to='/contact' className="navbar-link">Contact</Link>        
        
      </div>
      <div className="navbar-buttons">
        <button onClick={()=>Logout()} className="navbar-button">Logout</button>
      </div>
    </nav>
    </header>
    <main>
        <Homme/>
    </main>

</>

  )
}

export default User