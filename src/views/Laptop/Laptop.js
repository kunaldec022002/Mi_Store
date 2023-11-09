import React from 'react'
import "./Laptop.css"
import Card from '../../components/Card/Card';
import ImgTablet from './../../views/Laptop/img/tab2.jpg'
import Img from './../../views/Laptop/img/tab-2.jpeg'
import Images from './../../views/Laptop/img/tab-3.jpeg'
import Tablet from './../../views/Laptop/img/tab-4.jpeg'
import Tab from './../../views/Laptop/img/tab3.jpg'
import ImgTab from './../../views/Laptop/img/tab-7.jpeg'
import ImgTabs from './../../views/Laptop/img/tab1.jpeg'
import ImgTabs1 from './../../views/Laptop/img/tab-1.jpeg'
import ImageOfLaptop from './../../views/Laptop/img/laptop-2.jpeg'
import LapImage from './../../views/Laptop/img/lap.webp'
import HomeImg1 from './../../views/Laptop/img/redmi-note-3.jpg'
import HomeImg2 from './../../views/Laptop/img/poster1.jpg'
import HomeImg3 from './../../views/Laptop/img/m-6.jpeg'
import HomeImg4 from './../../views/Laptop/img/M-10.jpeg'
import LapImage2 from './../../views/Laptop/img/laptop-4.jpeg'
import LapImage3 from './../../views/Laptop/img/laptop-5.jpeg'
import LapImage4 from './../../views/Laptop/img/lap-1.jpeg'
import LapImage5 from './../../views/Laptop/img/lap-6.jpeg'
import LapImage6 from './../../views/Laptop/img/lap-7.jpeg'
import LapImage7 from './../../views/Laptop/img/lap-8.jpeg'
import Navbar from '../../components/Navbar/Navbar';
import Footer from "./../../components/Footer/Footer"



function Laptop() {
  return (
    <>
    <Navbar/>
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
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

    <div>
      <br/>
      <h1 className='main-title'>Tablets </h1>
      <br/>
      <div className='container-tablets'>
      <Card img={ImgTablet} price={20999} id={1} name="Xiomi Mi Pad 5" button={15}/>
      <Card img={Img} price={18999} id={2} name="Xiomi Mi pad 6" button={18}/>
      <Card img={Images} price={22999} id={3} name="Xiomi Mi pad 5 Review" button={33}/>
      <Card img={Tablet} price={18599} id={4} name="Xiomi Mi pad 6 pro 11" button={22}/>
      </div>
      <br/>
      <br/>
      <br/>
      <div className='container-tablets'>
      <Card img={Tab} price={19999} id={5} name="Xiomi Pad 6 pro" button={11}/>
      <Card img={ImgTab} price={24999} id={6} name="The Best Xiomi Tablet" button={17}/>
      <Card img={ImgTabs} price={23999} id={7} name="The Best Redmi Tablet"button={22}/>
      <Card img={ImgTabs1} price={27999} id={8} name="The Xiomi Tablet" button={33}/>
      </div>
      <br/>
      <div>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKAguEXMYDI4EnZEHJOqSDntxZqd7Pz1jTTQ&usqp=CAU' className='MiddleImage'/>
      </div>
      <br/>
      <h1 className='main-title'>Laptops </h1>
      <br/>
      <div className='container-tablets'>
      <Card img={ImageOfLaptop} price={74999} id={9} name="Xiomi NoteBook pro 11"button={28}/>
      <Card img={LapImage} price={45999} id={10} name="Xiomi Mi Notebook Ultra"button={27}/>
      <Card img={LapImage2} price={55999} id={11} name="Xiomi Mi GameZoneG"button={33}/>
      <Card img={LapImage3} price={30999} id={12} name="Xiomi Mi Notebook"button={31}/>
      </div>
      <br/>
      <br/>
      <div className='container-tablets'>
      <Card img={LapImage4} price={48999} id={13} name="Xiomi Pro 11"button={24}/>
      <Card img={LapImage5} price={52999} id={14} name="Xiomi Mi Notebook Pro"button={26}/>
      <Card img={LapImage6} price={55999} id={15} name="Xiomi Mi NoteBook"button={38}/>
      <Card img={LapImage7} price={49999} id={16} name="Xiomi Mi GameZone H"button={42}/>
      </div>
    </div>
    <br/>
    <br/>
    <Footer/>
    </>  
  )
}

export default Laptop;