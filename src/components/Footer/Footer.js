import "./Footer.css"
import { Link } from 'react-router-dom'
import showToast from 'crunchy-toast'
import MapImg from "../../views/Home/img/ICON/google-maps.png"
import GmailImg from "../../views/Home/img/ICON/gmail (1).png"
import ContactImg from "../../views/Home/img/ICON/telephone-call.png"


function footerContact()
{
   showToast('Thanku For Contacting Us🙏','success', 3000);
}
function Footer()
{
  
  return(

    <>

<footer>

<div class="footer-main">
   <div class="footer-about">
       <h3>About Us</h3>
       <p>Company information here...</p>
       <p>About</p>
   </div>
   <div class="footer-services">
       <h3>Quick Link</h3>
       <p><Link to="/" className="quick-link">Home</Link></p>
      
       <p><Link to="/smartphone" className="quick-link">Smartphone</Link></p>
       <p><Link to="/tv" className="quick-link">Tv</Link></p>
       <p><Link to="/lifestyle" className="quick-link">Lifestyle</Link></p>
       <p><Link to="/laptop/showdetails/:id" className="quick-link">ShowDetails</Link></p>
       
   </div>
   <div class="footer-contact">
       <h3>Contact Us</h3>
     <p><Link to="/contact" className="quick-link">Contact</Link></p>
    
   </div>
   <div class="footer-follow">
       <h3>Follow Us</h3>
       <p>Social media links here...</p>
   </div>
</div>

</footer>


    
    </>
  )
  
}

export default Footer
          