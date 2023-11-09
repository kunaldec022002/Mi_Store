import React from "react";
import "./Login.css";
import Navbar from "./../../components/Navbar/Navbar"
import Footer from "./../../components/Footer/Footer"
 
function Login() {
    return (
        <>
        <Navbar/>
        <div className="containerforlogin">
            <p className="titles">Login Form</p>
            <form className="Apps"/>
            
                <input className="inputs" placeholder="username"  type="text" required />
                <br/>
                
                <input className="inputs"  placeholder= "email"   type="email" required/>
                <br/>
                
                <input className="inputs" placeholder="password" type="password"  required/>
                <br/>
                
            
                <input  type={"submit"} className="buttons"
                    style={{ backgroundColor: "black" }} />
            <form/>
            </div>
            <Footer/>
        </>
    );
}
 
export default Login;