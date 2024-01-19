import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookSquare,  FaInstagramSquare } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
 

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
        

            <div className="col-lg-3 col-md-6 footer-links">
              <h4> Quick Links</h4>
              <ul>
              <li className="nav-item ion-ios-arrow-right">
                  <Link className="nav-link ion-ios-arrow-right" to="/">
                     Home Page 
                  </Link>
                  </li>
              <li className="nav-item ion-ios-arrow-right">
                  <Link className="nav-link ion-ios-arrow-right" to="/about-us">
                     About Us 
                  </Link>
                  </li>
                  <li className="nav-item ion-ios-arrow-right">
                  <Link className="nav-link ion-ios-arrow-right" to="/privacy">
                    Privacy Policy
                  </Link>
                  </li>
                  <li className="nav-item ion-ios-arrow-right">
                  <Link className="nav-link ion-ios-arrow-right" to="/privacy">
                     Term of Services
                  </Link>
                  </li>
                 <li><i className="ion-ios-arrow-right"></i> <a href="/">Corporate Communication</a></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
              <h4> Popular Links</h4>
              <ul>
                <li>  <Link className="nav-link ion-ios-arrow-right" to="/faq">
                  FAQ
                  </Link></li>
                <li> <Link className="nav-link ion-ios-arrow-right" to="/vision">
                  Vision
                  </Link></li>
                <li><i className="ion-ios-arrow-right"></i> <a href="/">DriverCV</a></li>
                <li><i className="ion-ios-arrow-right"></i> <a href="/">Communication</a></li>
                <li> <Link className="nav-link ion-ios-arrow-right" to="/our-publication">
                  Our Publication
                  </Link></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-contact">
              <h4>Contact Us</h4>
              <p>
              123 Street, <br />
                 New York, USA<br />
                <strong>Phone:</strong> 987654321<br />
                <strong>Email:</strong> info@example.com<br />
              </p>

              <div className="social-link social-media-desktop">
                
                <a href="/" className="twitter"><i className="fa fa-twitter"></i></a>
                <a href="/" className="facebook"><i className="fa fa-facebook"><FaFacebookSquare /></i></a>
                <a href="/" className="instagram"><i className="fa fa-instagram"><FaInstagramSquare /></i></a>
                <a href="/" className="google-plus"><i className="fa fa-google-plus"></i></a>
                <a href="/" className="linkedin"><i className="fa fa-linkedin"><CiLinkedin /></i></a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 footer-newsletter">
              <h4>Our Newsletter</h4>
              <p>As We Step Into A New Month Filled With Promise And Opportunities, We're Thrilled To Bring You The Latest Edition Of Our Newsletter. SURUCUCV..</p>
              <form action="" method="post">
                <input type="email" name="email" /><input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          &copy; Copyright <strong>Surucucv</strong>. All Rights Reserved by Zcorp
        </div>
      </div>
    </footer>
  );
};

export default Footer;
