import React,{useState} from 'react';
import "./Phone.css"
import { Link } from 'react-router-dom';

function Phone({img,name,price,id}) { 
  return (
    <div className="cards-container">
    <img src={img} className="tablet-images"/>
    <h3  className="description">{name}</h3>
    <p className="description-1">{price}/-</p>
    <Link to="/place order"> <button className="btn41-43 btn-42">Buy Now</button> </Link>
    
  
  </div>
)
}

export default Phone