import React from 'react'
import { removeReservation } from '../../../api/reservationApi'
function ReservationList({el, getReservation}) {

  console.log('el',el)
  const deletereservation = async()=>{
    await removeReservation(el._id)
    getReservation()
}

  return (
    <div>
               <div className="card">
                <h2>Name</h2>
                <hr></hr>
  <p className="name">{el.name}</p>
  
  <hr></hr>
  <h2>Number</h2>
  <hr></hr>
  <p className="email">{el.number}</p>
<hr></hr>
  <hr></hr>
  <h2>Date</h2>
  <hr></hr>
  <p className="message">{el.date}</p>
  <hr></hr>
  <h2>Time</h2>
  <hr></hr>
  <p className="message">{el.time}</p>
  <hr></hr>
  <h2>Guests</h2>
  <hr></hr>
  <p className="message">{el.guests}</p>
  <hr></hr>
  <p className="message">{el.status}</p>

  <div class="btnn">
      <button className="confirm">confirm</button>
      <button onClick={()=>deletereservation()} className="confirm">remove</button>
      
    </div>
</div>
    </div>
  )
}

export default ReservationList