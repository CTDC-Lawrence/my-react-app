import React from 'react';
import './services.css';
import sixSigmaImg from '../../assets/images/sixsigma.png';

const SixSigmaQuality = () => {
  return (
    <div className="service-page-container">
      <div className="service-page-content">
        <h1 className="service-page-title">Six Sigma Quality</h1>
        <img src={sixSigmaImg} alt="Six Sigma Quality" className="service-page-image" />
        <p className="service-page-description">Six Sigma is a methodology that helps organizations improve their processes and reduce defects. Our experts use statistical analysis to identify areas for improvement and implement strategies to increase efficiency and quality.</p>
        <ul className="service-page-list">
          <li>Process improvement through DMAIC methodology</li>
          <li>Process mapping and statistical analysis</li>
          <li>Design of experiments and hypothesis testing</li>
          <li>Training and certification for Six Sigma Green and Black Belts</li>
        </ul>
        <p className="service-page-advantage">By implementing Six Sigma methodologies, your organization can benefit from:</p>
        <ul className="service-page-advantage-list">
          <li>Reduced process variation and defects</li>
          <li>Increased process efficiency and productivity</li>
          <li>Improved customer satisfaction and loyalty</li>
          <li>Cost savings through waste reduction and increased efficiency</li>
        </ul>
        <p className="service-page-contact">Contact us today to learn more about our Six Sigma quality services.</p>
      </div>
    </div>
  );
};

export default SixSigmaQuality;
