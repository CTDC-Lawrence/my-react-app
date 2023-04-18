import React from 'react';
import './services.css';
import processImg from '../../assets/images/process-improvement.png';

const ProcessImprovement = () => {
  return (
    <div className="service-page-container">
      <div className="service-page-content">
        <h1 className="service-page-title">Process Improvement</h1>
        <img src={processImg} alt="Process Improvement" className="service-page-image" />
        <p className="service-page-description">Process improvement involves identifying and analyzing organizational processes in order to make them more efficient and effective. Our experts can help you streamline your operations, reduce costs, and improve quality.</p>
        <ul className="service-page-list">
          <li>Process mapping and analysis</li>
          <li>Process redesign and optimization</li>
          <li>Lean and Six Sigma methodologies</li>
          <li>Performance metrics and monitoring</li>
        </ul>
        <p className="service-page-advantage">By improving your processes, your organization can benefit from:</p>
        <ul className="service-page-advantage-list">
          <li>Reduced waste and inefficiencies</li>
          <li>Increased productivity and throughput</li>
          <li>Better quality control and compliance</li>
          <li>Improved customer satisfaction</li>
        </ul>
        <p className="service-page-contact">Contact us today to learn more about our process improvement services.</p>
      </div>
    </div>
  );
};

export default ProcessImprovement;
