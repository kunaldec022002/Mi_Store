import React from "react";
import {Link} from "react-router-dom"
import './Footer.css';
import MIImg from './icon/xiaomi.png';
import GitHub from './icon/github-sign.png';
import Gmail from './icon/gmail (1).png'
import Google from './icon/google-maps.png';
import Insta from './icon/instagram (3).png'

function Footer(){
    return(
        <div>
            <div className="footer-container">
                <div>
                    <h3>MI_STORE</h3>
                    <div>
                        <img src={MIImg} className="footer-club-img"/>
                    </div>
                </div>

                <div>
                    <h3>Quick Links</h3>
                    <p><Link to="/tv" className="quick-link">TV</Link></p>
                    <p><Link to="/contact"  className="quick-link">Contact</Link></p>
                    <p><Link to="/laptop"  className="quick-link">Laptop</Link></p>
                    <p><Link to="/smartphone"  className="quick-link">Smartphone</Link></p>
                    <p><Link to="/lifestyle"  className="quick-link">Lifestyle</Link></p>

                </div>

              

                <div>
                    <h3>Social Media</h3>
                    
                    <div className="footer-icon-container">
                        <a href=""><img src={GitHub} className="footer-icons"/></a>
                        <a href="#"><img src={Gmail} className="footer-icons"/></a>
                       
                    </div>

                    <div>
                      <a href="#"><img src={Google} className="footer-icons"/></a>
                      <a href="#"><img src={Insta} className="footer-icons"/></a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer;