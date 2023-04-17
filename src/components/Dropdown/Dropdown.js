import React, { useState } from 'react';
import './Dropdown.css';

const Dropdown = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="dropdown" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <span className="dropdown-btn">{label}</span>
      {isOpen && <div className="dropdown-content">{children}</div>}
    </li>
  );
};

export default Dropdown;
