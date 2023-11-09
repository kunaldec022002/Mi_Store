import React,{useState} from 'react';
import "./Phone.css"

function Phone({img,name,price}) { 
  return (
    <div className="cards-container">
    <img src={img} className="tablet-images"/>
    <h3  className="description">{name}</h3>
    <p className="description-1">{price}/-</p>
    <button className="btn41-43 btn-42">Buy Now</button>
  
  </div>
)
}

export default Phone