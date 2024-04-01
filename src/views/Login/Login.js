import React, { useState } from "react";
import showToast from 'crunchy-toast';
import './Login.css';
import LogImg from './img/web-student-login-img.png';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";


function Login( {img}){

    const [formData, setFormData] = useState({
        username:'',
        password:'',
    });
     const [error, setError] = useState('');

     const handleChange = (e)=>{
        const {name, value} = e.target;
        setFormData ((preData)=>({
            ...preData,
            [name]:value,
        }));
     };

     const handleLogin = ()=> {
        if (!formData.username || !formData.password) {
            showToast('All fiels are required','warning',3000);
            return;
        }


        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(
            (u)=> u.username===formData.username && u.password===formData.password
        );

        if (!user)
        {
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            setError(' ');
            showToast('Login Successful','success', 3000);
           
        }

        else 
        {
            setError('Invalid username or password');
            window.location.href='/';
        }
     }

     
    return(

        <div>
            <Navbar/>

                <div className="main-class">

                    <img src={LogImg} className="loginimg"/>

                    <div className="signup-container">


                        <h2 className="text-center">Login</h2>
                                
                                    <label>
                                    Username:
                                    <input
                                        placeholder="Enter Username"
                                        className="input-text"
                                        type="text"
                                        name="username"
                                        value={formData.username}
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
                                    <button type="button"
                                    className="signup-btn"
                                    onClick={handleLogin}
                                    > Login</button>

                                    <p className="text-center">New User ? please <a href="/signup">Signup</a>
                                       
                                    </p>
                                
                            
                        
                    </div>  
                </div>
                <Footer/>
        </div>

        
    )
}

export default Login;