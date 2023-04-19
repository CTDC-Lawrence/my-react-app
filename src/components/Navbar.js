import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Services from '../data/Services';
import freeSamples from '../data/sampleData';
import contactOptions from '../data/contactOptions';

const Navbar = ({ Frameworks }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (event) => {
    if (event.target.className === 'navbar-logo') {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = (event) => {
    if (event.target.className === 'navbar-logo') {
      setIsHovered(false);
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-link" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <h1>CTDC</h1>
      </Link>
      <Link to="/about" className="navbar-link" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        About
      </Link>
      <Link to="/services" className="navbar-link" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        Services
      </Link>
      <Link to="/frameworks" className="navbar-link" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        Frameworks
      </Link>
      <Link to="/free-samples" className="navbar-link" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        Free Samples
      </Link>
      <Link to="/contact" className="navbar-link" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;
