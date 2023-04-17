// This is our Footer component
import React from 'react';
import { Link } from "react-router-dom";
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-sections">
        <div className="footer-left">
          <div className="footer-nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/frameworks">Frameworks</Link>
            <Link to="/free-samples">Free Samples</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div className="footer-middle">
          <div className="social-media-links">
            <a href="https://www.facebook.com/YourPage" target="_blank" rel="noopener noreferrer">
              <img src={`${process.env.PUBLIC_URL}/images/facebook.svg`} alt="Facebook" />
            </a>
            <a href="https://www.twitter.com/YourProfile" target="_blank" rel="noopener noreferrer">
              <img src={`${process.env.PUBLIC_URL}/images/twitter.svg`} alt="Twitter" />
            </a>
            <a href="https://www.instagram.com/YourProfile" target="_blank" rel="noopener noreferrer">
              <img src={`${process.env.PUBLIC_URL}/images/instagram.svg`} alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/in/YourProfile" target="_blank" rel="noopener noreferrer">
              <img src={`${process.env.PUBLIC_URL}/images/linkedin-in.svg`} alt="LinkedIn" />
            </a>
          </div>
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
          <p>
            &copy; {new Date().getFullYear()} Connect the Dots Club. All rights
            reserved.{" "}
          </p>
        </div>
        <div className="footer-right">
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

