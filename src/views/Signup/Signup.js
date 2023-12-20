// src/SignupForm.js
import React, { useState } from 'react';
import showToast from 'crunchy-toast';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import SignupImg from './img/signup-img.jpg';
import './Signup.css';

function  Signup  () {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    mobile:'',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save user data to local storage
    localStorage.setItem('userData', JSON.stringify(formData));
    if(!formData)
    {
      alert ("Fill information First");
    }
    showToast('Signup Sucessfully', 'success', 3000);
    window.location.href="/login"

    
  };

  return (

    <div>
            <Navbar/>
                    <div className="main-class2">
                      <img src={SignupImg} className="loginimg2"/>
                          <div className="signup-container">
                            <h2 className="text-center">Signup</h2>
                            <form onSubmit={handleSubmit}>
                                <label>
                                Name:
                                <input
                                    placeholder="Enter Name"
                                    className="input-text"
                                    type="text"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    required
                                />
                                </label>
                                <br />
                                <label>
                                Email:
                                <input
                                    placeholder="Enter Email"
                                    className="input-text"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                </label>
                                <br />
                                <label>
                                Mobile:
                                <input
                                    placeholder="Enter Number"
                                    className="input-text"
                                    type="text"
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    required
                                />
                                </label>
                                <br/>
                                <label>
                                Password:
                                <input
                                    placeholder="Enter Password"
                                    className="input-text"
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                                </label>
                                <br />
                                
                                <button type="submit" className="signup-btn">Signup</button>
                            </form>
                            <p className="text-center">Already User? Please <a href="/login">Login</a></p>
                          </div>
                    </div>
                    <Footer/>
                  
        </div>            
      );
    };

    

export default Signup;
