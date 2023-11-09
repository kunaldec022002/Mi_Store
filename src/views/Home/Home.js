import React from 'react'
import "./Home.css"
import Card from '../../components/Card/Card'
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
import TabImg  from "./img/tab1.jpeg"
import TabImg2 from "./img/tab2.jpg"
import TabImg3 from "./img/tab3.jpg"
import { Link } from 'react-router-dom'
import MobileImg from "./img/mobile 1.jpg"
import MobileImg2 from "./img/mobile2.jpg"
import MobileImg3 from "./img/mobile3.jpg"
import LaptopImg from "./img/Laptop1.jpg"
import LaptopImg2 from "./img/laptop2.jpg"
import LaptopImg3 from "./img/laptop3.png"
import TvImg from "./img/tv1.png"
import TvImg2 from "./img/tv3.jpg"
import TvImg3 from "./img/tv3.jpg"
import GitImg from "./img/ICON/github-sign.png"
import GmailImg from "./img/ICON/gmail (1).png"
import GoogleImg from "./img/ICON/google-maps.png"
import InstaImg from "./img/ICON/instagram (3).png"
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

        

                <div className='Brand-Head'>
                  <h1>Tablets</h1>
                </div>

                 
                  <br/>

               <div className=" text-center">

                <div className="row">
                    <div className="col">
                        
                        <div class="card" index="width: 18rem;">
                            <img src={TabImg} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Xiaomi Pad 6</h5>
                                <p class="card-text">Snapdragon 870 | Quad Speakers up to ₹3,250* off with bank offers</p>
                                <p className="card-text">From ₹22,999</p>
                            </div>

                            <div class="card-body">
                               
                            </div>
                        </div>

                    </div>

                    <div className="col">
                        
                    <div class="card" index="width: 18rem;">
                            <img src={TabImg2} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Xiaomi Pad 5</h5>
                                <p class="card-text">2.5k Resolution | 120Hz Refresh Rate...</p>
                                <p class="card-text">From ₹23,999 </p>

                            </div>

                            <div className="card-body">
                               
                            </div>
                        </div>

                    </div>

                    <div className="col">

                    <div className="card" index="width: 18rem;">
                            <img src={TabImg3} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 className="card-title">Redmi Pad</h5>
                                <p className="card-text">MediaTek HelioG99 | 2k Resolution..New Launch2023</p>
                                <p className="card-text">From ₹14,499</p>
                            </div>

                            <div className="card-body">
                               
                            </div>
                        </div>

                     </div>

              </div>
           </div>
          
                    <Link to="/laptop" className="btn41-43 btn-42">
                        View More
                    </Link>
                    <br/>

           <div className='Brand-Head'>
                  <h1>SmartPhones</h1>
                </div>

                 
                  <br/>
             <div className="container text-center">

                <div className="row">
                    <div className="col">
                        
                        <div class="card" index="width: 18rem;">
                            <img src={MobileImg} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Xiaomi 13 Pro</h5>
                                <p class="card-text"> Bonus upto ₹5,000</p>
                                <p className="card-text">From ₹74,999</p>
                            </div>

                            <div class="card-body">
                               
                            </div>
                        </div>

                    </div>

                    <div className="col">
                        
                    <div class="card" index="width: 18rem;">
                            <img src={MobileImg3} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Xiaomi 11i 5G</h5>
                                <p class="card-text"> 120Hz Refresh Rate...</p>
                                <p class="card-text">From ₹17,999 </p>

                            </div>

                            <div className="card-body">
                               
                            </div>
                        </div>

                    </div>

                    <div className="col">

                    <div className="card" index="width: 18rem;">
                            <img src={MobileImg2} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 className="card-title">Xiaomi 12 Pro</h5>
                                <p className="card-text">5k Resolution..</p>
                                <p className="card-text">From ₹39,999</p>
                            </div>

                            <div className="card-body">
                               
                            </div>
                        </div>

                     </div>

              </div>
           </div>
               <br/>

        <Link to="/laptop" className="btn12-07 btn-08">
                 View More
        </Link>

        <br/>

        <div className='Brand-Head'>
                  <h1>Laptops</h1>
                </div>

                 
                  <br/>
             <div className="container text-center">

                <div className="row">
                    <div className="col">
                        
                        <div class="card" index="width: 18rem;">
                            <img src={LaptopImg} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Xiaomi Notebook Pro 120G</h5>
                                
                                <p className="card-text">From ₹64,999</p>
                            </div>

                            <div class="card-body">
                               
                            </div>
                        </div>

                    </div>

                    <div className="col">
                        
                    <div class="card" index="width: 18rem;">
                            <img src={LaptopImg3} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Mi NoteBook Ultra Gray</h5>
                                <p class="card-text">From ₹47,999 </p>

                            </div>

                            <div className="card-body">
                               
                            </div>
                        </div>

                    </div>

                    <div className="col">

                    <div className="card" index="width: 18rem;">
                            <img src={LaptopImg2} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 className="card-title">Mi NoteBook Pro</h5>
                                <p className="card-text">From ₹45,999</p>
                            
                            </div>

                            <div className="card-body">
                               
                            </div>
                        </div>

                     </div>

              </div>
           </div>
               <br/>

        <Link to="/laptop" className="btn41-43 btn-42">
                 View More
        </Link>



        <br/>

<div className='Brand-Head'>
          <h1>TV's</h1>
        </div>

         
          <br/>
     <div className="container text-center">

        <div className="row">
            <div className="col">
                
                <div class="card" index="width: 18rem;">
                    <img src={TvImg} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Xiaomi Smart TV a43 (108 CM) </h5>
                        <p class="card-text">38% off</p>
                        <p className="card-text">From ₹21,999</p>
                    </div>

                    <div class="card-body">
                       
                    </div>
                </div>

            </div>

            <div className="col">
                
            <div class="card" index="width: 18rem;">
                    <img src={TvImg3} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Xiaomi Smart TV X Pro 1.38m (55)</h5>
                        <p class="card-text">35% off </p>

                        <p class="card-text">From ₹44,999 </p>

                    </div>

                    <div className="card-body">
                       
                    </div>
                </div>

            </div>

            <div className="col">

            <div className="card" index="width: 18rem;">
                    <img src={TvImg2} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 className="card-title">Xiaomi Smart TV X Pro 1.25m (50)</h5>
                        <p class="card-text">33% off</p>

                        <p className="card-text">From ₹39,999</p>
                    
                    </div>

                    <div className="card-body">
                       
                    </div>
                </div>

             </div>

      </div>
   </div>
       <br/>

        <Link to="/laptop" className="btn41-43 btn-42">
         View More
        </Link>

        <br/>

        <section id="social-media">

          <div class="container text-center">
            <p>FIND US ON SOCIAL MEDIA</p>
    
            <div class="social-icons">


              <a href="#"><img src={GmailImg}/></a>
              <a href="https://github.com/kunaldec022002/xiomi-store-reactproject/tree/main"><img src={GitImg}/></a>
              <a href="#"><img src={InstaImg}/></a>
              <a href="https://www.google.com/maps/search/xiaomi+center+pune/@18.5749739,73.7710354,12z/data=!3m1!4b1?authuser=0&entry=ttu"><img src={GoogleImg}/></a>
              

              

            </div>
          </div>
         </section>

             <Footer/>


                  
    </>              

  )
}

export default Home