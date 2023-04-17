import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown/Dropdown.js';

const images = [
  // Your image objects
];

// This is our Navbar component
function Navbar() {
  return (
    <nav className="navbar">
      <h1>CTDC</h1>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li>
          <Dropdown label="Frameworks">
            {images.map((image, index) => (
              <Link key={index} to={`/${image.title.toLowerCase()}`}>
                {image.title}
              </Link>
            ))}
          </Dropdown>
        </li>
        <li><Link to="/free-samples">Free Samples</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;


