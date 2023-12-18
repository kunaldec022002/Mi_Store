import"../Navbar/Navbar.css";
import {Link} from "react-router-dom";
import NavImg from '../../views/Home/img/xiaomi.png';

export default function Navbar()

{
    return(

        <>
                    

                    <nav class="navbar navbar-expand-lg" id="nav-container">
            <div class="container-fluid">
              <img src={NavImg} className="brand-img"/>
              <Link to="/" class="navbar-brand">XIAOMI</Link>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse link-container" id="navbarScroll">
                <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >

                  <li class="nav-item">
                    <Link to="/" class="nav-link active" aria-current="page">Home</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/laptop" class="nav-link">Laptop</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/lifestyle" class="nav-link">Lifestyle</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/smartphone" class="nav-link">Smartphone</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/tv" class="nav-link">TV</Link>
                  </li>
                

                </ul>
                <form class="d-flex" role="search">
                  <Link to="/signup" className="btn signup">Signup</Link>
                  <Link to="/login" className="btn login">login</Link>
                </form>
              </div>
            </div>
        </nav>

                
        </>
    )

}