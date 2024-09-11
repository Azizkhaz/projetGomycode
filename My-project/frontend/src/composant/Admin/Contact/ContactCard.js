import React from 'react'
import { removeContact } from '../../../api/contactApi'
function ContactCard({el, getContact}) {

    const deleteContact = async()=>{
        await removeContact(el._id)
        getContact()
    }
  return (
    <div>
        <div className="card">
  <h2>Name</h2>
  <hr></hr>
  <p className="name">{el.name}</p>
  <hr></hr>
  <h2>Email</h2>
  <hr></hr>
  <p className="email">{el.email}</p>
  <hr></hr>
  <h2>Message</h2>
  <hr></hr>
  <p className="message">{el.message}</p>
  <div class="btnn">
      <button onClick={()=>deleteContact()} className="remove">remove</button>
      <button className="update">Confirm Message</button>
    </div>
</div>

    </div>
  )
}

export default ContactCard