// src/Contact.js
import React, { useState } from "react";
import "./Contact.css";
import {addContact} from '../../../api/contactApi'
import { useNavigate } from "react-router";
function Contact() {
 
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const navigate = useNavigate()

  const AddContact = async (value)=>{
    await addContact(value)
    alert ("you send message")
    navigate('/user')
  }
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button onClick={()=>AddContact({name,email,message})} className="btte" type="button">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;

