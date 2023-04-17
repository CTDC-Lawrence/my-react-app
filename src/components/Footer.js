// This is our Footer component
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} Connect the Dots Club. All rights reserved.{' '}
        <Link to="/cookie-policy">Cookie Policy</Link> |{' '}
        <Link to="/terms-of-service">Terms of Service</Link> |{' '}
        <Link to="/privacy-policy">Privacy Policy</Link>
      </p>
    </footer>
  );
}

export default Footer;

