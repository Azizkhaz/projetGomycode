import React, {useEffect} from 'react'
import ReservationList from './ReservationList'
import { useSelector, useDispatch } from 'react-redux'
import { setReservation } from '../../../redux/reservationSlice'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { fetchReservation } from '../../../api/reservationApi'
import './ReservationAdmin.css'

function ReservationAdmin() {

    const Reservation = useSelector(state=> state.reservation)
    const dispatch = useDispatch()
    console.log("all reservation =>", Reservation)

    const getReservation = async()=>{
        const data = await fetchReservation()
        dispatch(setReservation(data.reservations))
        console.log("data =>", data.reservations)
      }
      useEffect(()=>{
        getReservation()
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
        Reservation.map((el)=> <ReservationList el={el} getReservation={getReservation} />)
    }
    </div>
  )
}

export default ReservationAdmin