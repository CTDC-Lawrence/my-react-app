import React from 'react';
import './services.css';
import scrumImg from '../../assets/images/scrum.jpg';

const ScrumImplementation = () => {
  return (
    <div className="service-page-container">
      <div className="service-page-content">
        <h1 className="service-page-title">Scrum Implementation</h1>
        <img src={scrumImg} alt="Scrum Board" className="service-page-image" />
        <p className="service-page-description">Scrum is a popular framework for Agile project management that emphasizes iterative and incremental development. Our experienced Scrum Masters will work with your team to implement Scrum methodologies, helping you to deliver products and services faster and more efficiently.</p>
        <ul className="service-page-list">
          <li>Scrum framework and roles</li>
          <li>Agile software development using Scrum</li>
          <li>Scrum team management</li>
          <li>Scrum project planning and execution</li>
        </ul>
        <p className="service-page-advantage">By adopting Scrum methodologies, your organization can benefit from:</p>
        <ul className="service-page-advantage-list">
          <li>Improved product quality</li>
          <li>Faster time-to-market</li>
          <li>Increased collaboration and communication</li>
          <li>Reduced project risks and costs</li>
        </ul>
        <p className="service-page-contact">Contact us today to learn more about our Scrum implementation services.</p>
      </div>
    </div>
  );
};

export default ScrumImplementation;
