import React from 'react';
import './Navbar.css';

// This is our Navbar component
function Navbar() {
  return (
    <nav className="navbar">
      <h1>CTDC</h1>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Services</a></li>
        <li><a href="/contact">Frameworks</a></li>
        <li><a href="/contact">Free Samples</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
