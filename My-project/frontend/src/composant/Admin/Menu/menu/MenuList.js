import React from 'react'
import MenuCard from './MenuCard'
import {useDispatch,useSelector} from 'react-redux'
import { setFood } from '../../../../redux/foodSlice'
import { fetchFood } from '../../../../api/foodApi'
import { useEffect } from 'react'
import './MenuList.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function MenuList() {

  const Food = useSelector(state=> state.food)
  const dispatch = useDispatch()
  console.log('listet l mekla', Food)

  const getFood = async()=>{
   const data = await fetchFood()
   dispatch(setFood(data.food))
   console.log("data=> ", data)
  }
  useEffect(()=>{
    getFood()
    },[])
       
    const navigate = useNavigate()

    const Logout=()=>{
      localStorage.removeItem('token')
      navigate('/login')
      }
  return (
    
   <>
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
    
    <div className='menuu' >
   {
    Food.map((el)=> <MenuCard el={el} getFood={getFood} />)
   }
   </div>
   </>
  )
}

export default MenuList