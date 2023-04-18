import React from 'react';
import './services.css';
import agileImg from '../../assets/images/agile.png';

const AgileCoaching = () => {
  return (
    <div className="service-page-container">
      <div className="service-page-content">
        <h1 className="service-page-title">Agile Coaching</h1>
        <img src={agileImg} alt="Agilists Planning" className="service-page-image" />
        <p className="service-page-description">Agile is a project management approach that emphasizes flexibility and collaboration. Our experienced coaches will work with your team to implement agile methodologies, helping you to deliver products and services faster and more efficiently.</p>
        <ul className="service-page-list">
          <li>Scrum and Kanban methodologies</li>
          <li>Agile software development</li>
          <li>Agile team management</li>
          <li>Agile project planning and execution</li>
        </ul>
        <p className="service-page-advantage">By adopting agile methodologies, your organization can benefit from:</p>
        <ul className="service-page-advantage-list">
          <li>Improved product quality</li>
          <li>Faster time-to-market</li>
          <li>Increased collaboration and communication</li>
          <li>Reduced project risks and costs</li>
        </ul>
        <p className="service-page-contact">Contact us today to learn more about our agile coaching services.</p>
      </div>
    </div>
  );
};

export default AgileCoaching;
