import React, { useState } from 'react';
import './DropdownMenu.css';

const DropdownMenu = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-menu">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        {label}
      </button>
      {isOpen && (
        <ul className="dropdown-items">
          {items.map((item, index) => (
            <li key={index}>
              <a href={item.path}>{item.label}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
