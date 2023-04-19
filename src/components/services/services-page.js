import React from 'react';
import { Link } from 'react-router-dom';
import './services-page.css';
import services from '../../data/services';

const ServicesPage = () => {
  return (
    <div className="services-page-container">
      <h1 className="services-page-title">Services</h1>
      <div className="services-page-content">
        {services.map((service, index) => (
          <div className="service-item" key={index}>
            <h2 className="service-title">{service.label}</h2>
            <p className="service-description">Brief description of {service.label} service goes here.</p>
            <Link to={service.path} className="service-link">Learn More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
