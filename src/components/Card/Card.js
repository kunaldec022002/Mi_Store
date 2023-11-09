import React, {useState} from "react";
import "./Card.css"
import {Link} from "react-router-dom"


export default function Card({img, price, name, id, button}){
  return(
    <div className="cards-container">
      <button className="Small-Button">{button}/-Off</button>
      <img src={img} className="tablet-images"/>
      <h1 className="description">{name}</h1>
      <h2 className="description-1"> Just Rs. {price}/-</h2>
      <Link to={`/laptop/showdetails/${id}`}><button className="btn41-43 btn-42 btn-top">Buy Now</button>
      </Link>

    </div>
  )
}




export  function Lifestylecard({img,title,price,description,btn,offer}) {
  return (
    <div className="lifestylecardcontainer">

      <img className="lifestyle-image-card" src={img}/>
      <h2 className="lifestyle-card-title">{title}</h2>
      <p className="lifestyle-card-title " >{price}</p>
      <p className="lifestyle-card-dec">{description}</p>
       <button className="lifestyle-card-btnn">{btn}</button>
       <p className="lifestyle-card-offer">{offer}</p>
      
    </div>
  )
}




export  function Lifestylecardaudio({img,title,price}) {
  return (
    <div className="audiocardcontainer">
      <img className="lifestyle-image-card-audio" src={img}/>
      <h2 className="lifestyle-audio-title">{title}</h2>
      <p className="lifestyle-audio-price">₹ {price}</p>
      <button className="lifestyle-audio-btnn">Buy Now</button>
    </div>
  )
}
