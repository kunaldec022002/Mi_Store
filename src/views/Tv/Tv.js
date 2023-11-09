import React from 'react';
import Img1 from "./img/img1.jpg";
import Img2 from "./img/img2.jpg";
import Img3 from "./img/img3.jpg";
import "./Tv.css";
import Card from "./../../components/Card/Tvcard";
import Tv1 from "./img/tv1.jpg";
import Tv2 from "./img/tv2.jpg";
import Tv3 from "./img/tv3.png";
import Tv4 from "./img/tv4.jpg";
import Tv5 from "./img/tv5.jpg";
import Tv6 from "./img/tv6.jpg";
import Tv7 from "./img/tv7.jpg";
import Tv8 from "./img/tv8.jpg";
import Tv9 from "./img/tv9.jpg";
import Tv10 from "./img/tv10.jpg";
import Tv11 from "./img/tv11.jpg";
import Tv12 from "./img/tv12.jpg";
import Smarttv from "./img/smarttv.webp"
import Smarttv1 from "./img/smarttv1.webp"
import Navbar from "./../../components/Navbar/Navbar";
import Footer from "./../../components/Footer/Footer";

function Tv(){
  return (
    <>
    <Navbar/>
  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Img1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={Img2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={Img3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
   <div>
   <h1 className="heading">Xiaomi Smart TV</h1> 
    <h3 className="banner-heading">WATCH,PLAY,CELEBRATE<br/> WITH SMART TV's</h3>
   </div>
   <div className="tv-container">
      <Card img={Tv1} price={10499} del={24999} off="58% off" name="Xiomi Smart TV A 32 (80cm)"/>
      <Card img={Tv2} price={61999} del={89999} off="31% off" name="Xiaomi Smart TV X 65 (163.9cm) 2023 Edition"/>
      <Card img={Tv3} price={21999} del={29999} off="26% off" name="Mi TV 4A 108cm (43) Horizon Edition"/>
      <Card img={Tv4} price={43999} del={69999} off="37% off" name="Mi TV 5X 55"/>
      </div>
      <div className="tv-container">
      <Card img={Tv5} price={39999} del={59999} off="33% off" name="Xiaomi Smart TV X Pro 1.25m (50)"/>
      <Card img={Tv6} price={9999} del={19999} off="50% off" name="Mi LED TV 4C 80CM (32)"/>
      <Card img={Tv7} price={34999} del={54999} off="36% off" name="Xiomi Smart TV X 55 (139cm)"/>
      <Card img={Tv8} price={29499} del={44999} off="34% off"name="Xiomi Smart TV X 50 (126cm)"/>
      </div>
      <div className="tv-container">
      <Card img={Tv9} price={23999} del={42999} off="44% off" name="Xiomi Smart TV X43 (108cm)"/>
      <Card img={Tv10} price={12999} del={25999} off="50% off" name="Xiomi Smart TV 5A Pro 32 (80cm)"/>
      <Card img={Tv11} price={21499} del={35999} off="40% off" name="Xiomi Smart TV 5A 108cm (43 inch) Full.."/>
      <Card img={Tv12} price={29999} del={49999} off="40% off" name="Mi TV 5X 43"/>
      </div>
      <div>
        <h2 className="heading">Premium Metal Bezel-less Design</h2>
        <p className="para-text">Your entertainment now knows no limits with fullscreen viewing encased<br/> in a gorgeous metal frame.</p>
        <img src={Smarttv} className="img-fluid mx-auto d-block" alt="..."/>
      </div>
      <div className="containerforimgtext">
       <div className="textcontainertv">
       <h2 className="heading">A Millionaire Display</h2>
        <p className="para-text1">Experience life like picture on a Full HD display with<br/> deeper colors thanks to a richer colour gamut capable<br/>of displaying over 16 million colours.</p>
       </div>
      <img src={Smarttv1} className="smarttvimg" alt="..."/>
      </div>
      <div className="containerforimgtext1">
       
       <h2 className="heading">Vivid Picture Engine</h2>
        <p className="para-text">Pictures come alive with our proprietary picture engine which tunes<br/> colour, contrast and depth to precision with every visual.</p>
      </div>
      <div className="banner-heading1">
        <h6 className="heading-6">With Vivid Picture Engine</h6>
        <h6 className="headingg-6">Without Vivid Picture Engine</h6>
      </div>
      <Footer/>
  </>
  );
}

export default Tv;