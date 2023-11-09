import"../Navbar/Navbar.css";
import {Link} from "react-router-dom";
import NavImg from '../../views/Home/img/xiaomi.png';

export default function Navbar()

{
    return(

        <>

                    <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img className="home-brand-img" src={NavImg}/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">

                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>    
                       
                        <li className="nav-item">
                            <Link className="nav-link" to="/smartphone">Smartphones</Link>
                        </li>


                        <li className="nav-item">
                            <Link className="nav-link" to="/tv">Smart TV's</Link>
                        </li>
                       
                        <li className="nav-item">
                            <Link className="nav-link" to="/laptop">Tablets&Laptop</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="lifestyle">LifeStyle</Link>
                        </li> 

        
                
                        
                        </ul>

                    
                        
                        <Link to="/login"><button className="bn632-hover bn27">Login</button></Link>
                        <Link to="/signup"><button className="bn636-hover bn22">Signin</button></Link>
                        
                    </div>
                    </div>
                </nav>

                
        </>
    )

}