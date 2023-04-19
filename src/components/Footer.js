import React from 'react';
import { Link } from "react-router-dom";
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      {/* Footer sections container */}
      <div className="footer-sections">       
        {/* Footer left section */}
        <div className="footer-left">
          <Link to="/" className="footer-link">
            <h3>Connect the Dots Club</h3>
          </Link>
          <nav className="footer-left-nav-links">
            <Link to="/about" className="footer-link">About</Link>  
            <Link to="/services" className="footer-link">Services</Link>
            <Link to="/frameworks" className="footer-link">Frameworks</Link>
            <Link to="/free-samples" className="footer-link">Free Samples</Link>
            <Link to="/contact" className="footer-link">Contact</Link>                   
          </nav>
        </div>
        {/* Footer middle section */}
        <div className="footer-middle">
          
          {/* Social media links */}
          <div className="social-media-links">
            {/* Facebook link */}
            <a href="https://www.facebook.com/YourPage" target="_blank" rel="noopener noreferrer">
              <img src={`${process.env.PUBLIC_URL}/images/facebook.svg`} alt="Facebook" />
            </a>
            {/* Twitter link */}
            <a href="https://www.twitter.com/YourProfile" target="_blank" rel="noopener noreferrer">
              <img src={`${process.env.PUBLIC_URL}/images/twitter.svg`} alt="Twitter" />
            </a>
            {/* Instagram link */}
            <a href="https://www.instagram.com/YourProfile" target="_blank" rel="noopener noreferrer">
              <img src={`${process.env.PUBLIC_URL}/images/instagram.svg`} alt="Instagram" />
            </a>
            {/* LinkedIn link */}
            <a href="https://www.linkedin.com/in/YourProfile" target="_blank" rel="noopener noreferrer">
              <img src={`${process.env.PUBLIC_URL}/images/linkedin-in.svg`} alt="LinkedIn" />
            </a>
          </div>
        
          {/* Footer links */}
          <div className="footer-links">
            <Link className="footer-link" to="/cookie-policy">
              Cookie Policy
            </Link>
            <span className="footer-link">|</span>
            <Link className="footer-link" to="/terms-of-service">
              Terms of Service
            </Link>
            <span className="footer-link">|</span>
            <Link className="footer-link" to="/privacy-policy">
              Privacy Policy
            </Link>
          </div>
        
          {/* Copyright notice */}
          <p className="copywrite">
            &copy; {new Date().getFullYear()} Connect the Dots Club. All rights
            reserved.
          </p>
        </div>
        

        {/* Footer right section */}
        <div className="footer-right">
          {/* Google Map */}
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345073045!2d144.9537363155043!3d-37.817209979751984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce7e33!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2s!4v1634168141953!5m2!1sen!2s"
            width="300"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
