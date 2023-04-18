import React from 'react';
import './services.css';
import trainingImg from '../../assets/images/training.png';

const TrainingCurriculum = () => {
  return (
    <div className="service-page-container">
      <div className="service-page-content">
        <h1 className="service-page-title">Training &amp; Curriculum</h1>
        <img src={trainingImg} alt="Training" className="service-page-image" />
        <p className="service-page-description">We provide training and curriculum development services to help organizations develop and deliver effective training programs. Our team of experienced trainers and instructional designers can work with you to create custom training programs tailored to your unique needs.</p>
        <ul className="service-page-list">
          <li>Custom training program design and development</li>
          <li>Learning management system implementation and support</li>
          <li>E-learning course development</li>
          <li>Instructional design and content development</li>
        </ul>
        <p className="service-page-advantage">By partnering with us for your training and curriculum development needs, your organization can benefit from:</p>
        <ul className="service-page-advantage-list">
          <li>Improved employee performance and productivity</li>
          <li>Increased employee engagement and satisfaction</li>
          <li>Reduced training costs and time-to-competence</li>
          <li>Customized training programs tailored to your unique needs</li>
        </ul>
        <p className="service-page-contact">Contact us today to learn more about our training and curriculum development services.</p>
      </div>
    </div>
  );
};

export default TrainingCurriculum;
