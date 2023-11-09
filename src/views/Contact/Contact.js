import React, { useState } from 'react';
import "./Contact.css"
import showToast from "crunchy-toast";
import Image from './contact.jpg'
import Navbar from "./../../components/Navbar/Navbar"
import Footer from "./../../components/Footer/Footer"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    ContactNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const [name, setName] = useState('');
  const [ContactNumber, setcontact] = useState('');
  const [email, setEmail] = useState('');


  const handleSubmit = (e) => {
  
        
        showToast('Thanku For Contacting Us🙏','success', 3000);


  };
      
  return (
    <div>
      <Navbar/>
    <h1 className='heading'>Contact Us</h1>
    <p className='speech'>LETS CONNECT:WE'RE HERE TO HELP,AND WE'D LOVE TO HEAR FOR YOU! WHETHER YOU HAVE A QUESTION COMMENT OR JUST WANT TO CHAT,YOU 
      CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE,OR BY EMAIL,PHONE OR SOCIAL MEDIA.
    </p>
<div className='Container'>
    <form onSubmit={handleSubmit} className='form-border'>
      <button className='support'>💬 VIA SUPPORT CHAT</button>
      <button className='support'>📞VIA CALL</button>
      <button className='email'>📩 VIA EMAIL FORM</button>
      <div className='form-control'>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      </div>

      <div className='form-control'>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      </div>

      <div className='form-control'>
       <label htmlFor="Contactnumber">Contact Number:</label>
      <input
        id="number"
        name="number"
        value={formData.number}
        onChange={handleChange}
        required
      />
      </div>

      <div className='form-control'>
      <label htmlFor="message">Message:</label>
      <textarea className='massage'
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
      />
      </div>

      <button type="submit" className='btn-2'>Submit</button>
    </form>
    <img src={Image} className='imgofcontact'/>
    </div>
    <Footer/>
    </div>
    
  );
};

export default Contact;
