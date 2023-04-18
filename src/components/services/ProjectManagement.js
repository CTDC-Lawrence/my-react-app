import React from 'react';
import './services.css';
import projectManagementImg from '../../assets/images/project-management.png';

const ProjectManagement = () => {
  return (
    <div className="service-page-container">
      <div className="service-page-content">
        <h1 className="service-page-title">Project Management</h1>
        <img src={projectManagementImg} alt="Project Management" className="service-page-image" />
        <p className="service-page-description">Project management is the process of planning, executing, and controlling the completion of specific goals and objectives within an organization. Our project management experts can help you achieve success in your projects by using proven methodologies and best practices.</p>
        <ul className="service-page-list">
          <li>Project planning and execution</li>
          <li>Project monitoring and control</li>
          <li>Risk management</li>
          <li>Change management</li>
          <li>Stakeholder management</li>
          <li>Project quality management</li>
        </ul>
        <p className="service-page-advantage">By using our project management services, your organization can benefit from:</p>
        <ul className="service-page-advantage-list">
          <li>Improved project success rate</li>
          <li>Reduced project risks and costs</li>
          <li>Increased stakeholder satisfaction</li>
          <li>Increased team collaboration and communication</li>
          <li>Higher quality deliverables</li>
        </ul>
        <p className="service-page-contact">Contact us today to learn more about our project management services.</p>
      </div>
    </div>
  );
};

export default ProjectManagement;
