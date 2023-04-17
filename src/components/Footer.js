// This is our Footer component
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
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
        reserved.{' '}
      </p>
    </footer>
  );
}

export default Footer;
