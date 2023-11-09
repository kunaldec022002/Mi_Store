import React from 'react'
import "./Smartphone.css"
import Phone from "./../../components/Card/Phone"
import Img1 from "./img/poster1.jpg"
import Img2 from "./img/poster2.jpg"
import Img3 from "./img/poster11.jpg"
import ImgTablet from "./img/redmi1.jpg"
import Img from "./img/image1.webp"
import Phones from "./img/image4.webp"
import Images from "./img/image3.webp"
import Image2 from "./img/image2.webp"
import Image5 from "./img/image8.jpg"
import Image6 from "./img/image6.jpg"
import Image7 from "./img/image7.jpg"
import Image8 from "./img/image8.jpg"

import Navbar from "./../../components/Navbar/Navbar"
import Footer from "./../../components/Footer/Footer"




function Smartphone() {
  return (
    <div>
      <Navbar/>
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
        </div>

        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={Img1} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={Img2} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={Img3} class="d-block w-100" alt="..." />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <p className='main-title'>MI Smartphones</p>
      <div className='container'>
      <Phone img={ImgTablet} price={14499} name="Redmi Note 12 5G"/>
      <Phone img={Img} price={20999} name="Redmi 12 5G "/>
      <Phone img={Phones} price={19500} name="Redmi Note 12 Pro"/>
      <Phone img={Images} price={16999} name="Xiaomi 12 Pro 5G"/>
      </div>
      <br/>
      <div className='container'>
      <Phone img={Image2} price={14000} name="Redmi 12C"/>
      <Phone img={Image5} price={20999} name="Mi 10i "/>
      <Phone img={Image6} price={19500} name="Mi 11 X"/>
      <Phone img={Image7} price={16999} name="Mi 10"/>
      </div>
      <br/>
      <h3 className=' main-title-2'>Redmi Series..❤</h3>

      <div className='second-card-container'>
        <div className='first-card'>
        <img  src={Image8}className='img-1'/>
          <h4 className='title-txt-1'>Redmi 12</h4>
          <p className='txt-1'>Octa Core Processor | 200mp + OIS</p>
          <p className='txt-1'>From ₹14,499</p>
          <button className='btn41-43 btn-42'> Buy Now</button>
          </div>
        <div className='second-card'>
        <img src="" className='img-1'/>
          <h4 className='title-txt-1'>Redmi A2 +</h4>
          <p className='txt-1'>Octa Core Processor | Up to 7GB Ram..</p>
          <p className='txt-1'>From ₹15,499</p>
          <button className='btn41-43 btn-42'> Buy Now</button>
        </div>
        </div>
        <div className='second-card-container'>
        <div className='first-card'>
        <img  src="" className='img-1'/>
          <h4 className='title-txt-1'>Redmi Note 12</h4>
          <p className='txt-1'>Super Note. Super Design</p>
          <p className='txt-1'>From ₹11,999</p>
          <button className='btn41-43 btn-42'> Buy Now</button>
        </div>
        <div className='second-card'>
        <img src="" className='img-1'/>
          <h4 className='title-txt-1'>Redmi Note 12 Pro+ 5G</h4>
          <p className='txt-1'>200MP + OIS</p>
          <p className='txt-1'>From ₹27,999</p>
          <button className='btn41-43 btn-42'> Buy Now</button>
         </div>
         </div>
       <h3 className='main-title-service'>Our Services..⭐</h3>
       <p className='main-title-33'>Trusted. Secure. Reliable</p>
      <div className='third-card-container'>
        <div className='third-card'>
          <h4 className='main-title-3'>Mi Screen Protect</h4>
           <p className='main-title-33'> Screen Protection against Accidental, Liquid Damage<br/>
               Avail 2 Claims Per year</p>
               <img  src="" className='img-11'/>

        </div>
        <div className='third-card'>
          <h4 className='main-title-3'>Mi Complete Protect</h4>
          <p className='main-title-33'>Safeguard your smartphone Against Accidental & <br/>Liquid Damages</p>
          <img  src="" className='img-11'/>
        </div>
      </div>
         <Footer/>
    </div>
     

  )
}

export default Smartphone