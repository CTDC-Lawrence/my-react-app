import React from 'react';
import './services.css';
import aiImg from '../../assets/images/artificial-intelligence.png';

const ArtificialIntelligence = () => {
  return (
    <div className="service-page-container">
      <div className="service-page-content">
        <h1 className="service-page-title">Artificial Intelligence</h1>
        <img src={aiImg} alt="Artificial Intelligence" className="service-page-image" />
        <p className="service-page-description">Artificial Intelligence (AI) is a transformative technology that is revolutionizing the way we work. Our team of experts can help you harness the power of AI to drive growth, innovation, and competitiveness.</p>
        <ul className="service-page-list">
          <li>Machine learning and predictive analytics</li>
          <li>Natural Language Processing (NLP)</li>
          <li>Computer vision and image recognition</li>
          <li>Robotic process automation (RPA)</li>
        </ul>
        <p className="service-page-advantage">By leveraging AI, your organization can benefit from:</p>
        <ul className="service-page-advantage-list">
          <li>Improved decision-making and accuracy</li>
          <li>Increased operational efficiency and productivity</li>
          <li>Enhanced customer experience and engagement</li>
          <li>Reduced costs and risks</li>
        </ul>
        <p className="service-page-contact">Contact us today to learn more about our Artificial Intelligence services.</p>
      </div>
    </div>
  );
};

export default ArtificialIntelligence;
