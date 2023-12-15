import React from 'react'
import "./Home.css"
import Card from '../../components/Card/Tvcard';
import Navbar from '../../components/Navbar/Navbar'
import HomeImg1 from "./img/Mi-Diwali-Offers.jpg"
import HomeImg2 from "./img/diwali mi 2.jpg"
import HomeImg3 from "./img/redmi-note-3.jpg"
import HomeImg4 from "./img/xiaomi-diwali4.jpg"
import HomeImg5 from "./img/image6.jpg"
import HomeImg6 from "./img/image7.jpg"
import HomeImg7 from "./img/image8.jpeg"
import HomeImg8 from "./img/image9.jpg"
import HomeImg9 from "./img/image10.jpg"
import HomeImg10 from "./img/image5.jpg"
import Tv1 from './Tv img/tv1.jpg';
import Tv2 from './Tv img/tv2.jpg';
import Tv3 from './Tv img/tv3.png';
import Tv4 from './Tv img/tv4.jpg';
import Phone1 from './smartphone img/m1.webp'
import Phone2 from './smartphone img/m2.webp';
import Phone3 from './smartphone img/m3.webp';
import Phone4 from './smartphone img/m44.webp'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'


function Home() {
  return (
    <>
       <Navbar/>
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">

                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                    <img src={HomeImg1} class="d-block w-100"/>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                    <img src={HomeImg2}class="d-block w-100"/>
                    </div>
                    <div class="carousel-item">
                    <img src={HomeImg3} class="d-block w-100"/>
                    </div>
                    <div class="carousel-item">
                    <img src={HomeImg4} class="d-block w-100"/>
                    </div>
                    <div class="carousel-item">
                    <img src={HomeImg5} class="d-block w-100"/>
                    </div>
                    <div class="carousel-item">
                    <img src={HomeImg6} class="d-block w-100"/>
                    </div>
                    <div class="carousel-item">
                    <img src={HomeImg7} class="d-block w-100"/>
                    </div>
                    <div class="carousel-item">
                    <img src={HomeImg8} class="d-block w-100"/>
                    </div>
                    <div class="carousel-item">
                    <img src={HomeImg9} class="d-block w-100"/>
                    </div>
                    <div class="carousel-item">
                    <img src={HomeImg10} class="d-block w-100"/>
                    </div>
                    
                    
                    

                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>

        </div>
        <br/>
        <div>

          <h1 className='text-center'>Xiaomi TV's</h1>
           
          <div>
            <Card img={Tv1} price={10499} del={24999} off="58% off" name="Xiomi Smart TV A 32 (80cm)"/>
            <Card img={Tv2} price={61999} del={89999} off="31% off" name="Xiaomi Smart TV X 65 (163.9cm)"/>
            <Card img={Tv3} price={21999} del={29999} off="26% off" name="Mi TV 4A 108cm (43) "/>
            <Card img={Tv4} price={43999} del={69999} off="37% off" name="Mi TV 5X 55"/>
          </div>
           
        </div>
          <br/>
        <div>
        <h1 className='text-center'>Smartphone</h1>
        <div>

          <Card img={Phone1} price={14499} del={16999} off="10% off" name="Redmi Note 12 5G"/>
            <Card img={Phone2} price={19999} del={21999} off="20% off" name="Xiaomi Note12 Pro"/>
            <Card img={Phone3} price={21999} del={25999} off="29% off" name="MI 10i"/>
            <Card img={Phone4} price={16999} del={18999} off="35% off" name="MI 10"/>

        </div>
        </div>

        

             <Footer/>


                  
    </>              

  )
}

export default Home