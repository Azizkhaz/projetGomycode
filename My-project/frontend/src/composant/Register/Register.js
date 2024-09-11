import React, {useState} from 'react'
import './Register.css'
import { useNavigate } from 'react-router-dom'
import {postauthUser} from '../../api/authApi'
function Register() {

const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

// navigation to Login
const navigate = useNavigate()
  const Login = async (value)=>{
    await postauthUser(value)
   navigate('/login')
  }
  return (
    <div className='register'>
       
     
  <div className="main">
    <input type="checkbox" id="chk" aria-hidden="true" />
    <div className="signup">
      <form>
        <label htmlFor="chk" aria-hidden="true">
          Sign up
        </label>
        <input type="name" name="txt" placeholder="User name" required="" value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type="email" name="email" placeholder="Email" required="" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" name="pswd" placeholder="Password" required="" value={password} onChange={(e)=>setPassword(e.target.value)} />
      </form>
      
<button className='button' onClick={()=>Login({name,email,password})}>
    Resigter
   
</button>

    </div>
    
  </div>



    </div>
  )
}

export default Register