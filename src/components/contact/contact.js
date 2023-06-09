import React from 'react';
import './contact.css';
import { contactOptions } from '../../data/contact-options';

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>Please select a contact option:</p>
      <ul>
        {contactOptions.map((option) => (
          <li key={option.id}>
            <a href={option.url}>{option.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contact;
