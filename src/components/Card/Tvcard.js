import React from "react";
import "./Tvcard.css"
import { Link } from "react-router-dom";

function Card1({name, price, img,del,off}){
  return(
    <div className="card-container">
      <img src={img} className="tv-images"/>
      <h3 className="name-text">{name}</h3>
      <p className="price-text">₹{price}<del className="delprice"> ₹ {del}</del></p>
     <div className="btn-container">
     <Link to="/place order"> <button className="btn41-43 btn-42" >Buy Now</button></Link>
    </div>
      <p className="symbolicbtn">{off}</p>
    </div>
  )
}
export default Card1;