import React from 'react'
import './HomePage.css'
import Home from './Home'
import { useNavigate } from 'react-router'

function HomePage() {
    const navigate = useNavigate()

    const Login = () =>{
        navigate('/login')
    }

    const SignUp=()=>{
        navigate('/register')
    }
  return (
    <>
    <header>
      <nav className="navbar">
      <div className="navbar-brand">
        
        <span>Restaurant</span>
      </div>
      <div className="navbar-links">
      <a href="#hero-section" className="navbar-link">Home</a>
        <a href="#about" className="navbar-link">About</a>
        <a href="#testimonial" className="navbar-link">Reviews</a>
      </div>
      <div className="navbar-buttons">
        <button onClick={()=>Login()} className="navbar-button">Login</button>
        <button onClick={()=>SignUp()} className="navbar-button signup-button">Sign Up</button>
      </div>
    </nav>
    </header>
    <main>
        <Home/>
    </main>
    </>
      
  )
}

export default HomePage