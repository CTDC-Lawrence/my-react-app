import React from 'react';
import './services.css';
import digitalAutomationImg from '../../assets/images/digital-automation.png';

const DigitalAutomation = () => {
  return (
    <div className="service-page-container">
      <div className="service-page-content">
        <h1 className="service-page-title">Digital Automation</h1>
        <img src={digitalAutomationImg} alt="Digital Automation" className="service-page-image" />
        <p className="service-page-description">Digital automation is the use of technology to automate repetitive and manual processes. Our experts can help your organization to streamline your operations and improve efficiency through the implementation of digital automation solutions.</p>
        <ul className="service-page-list">
          <li>Robotic process automation (RPA)</li>
          <li>Intelligent automation (IA)</li>
          <li>Chatbots and virtual assistants</li>
          <li>Automated testing and quality assurance (QA)</li>
        </ul>
        <p className="service-page-advantage">By implementing digital automation solutions, your organization can benefit from:</p>
        <ul className="service-page-advantage-list">
          <li>Increased productivity and efficiency</li>
          <li>Reduced errors and costs</li>
          <li>Improved customer experience</li>
          <li>More time for strategic initiatives</li>
        </ul>
        <p className="service-page-contact">Contact us today to learn more about our digital automation services.</p>
      </div>
    </div>
  );
};

export default DigitalAutomation;
